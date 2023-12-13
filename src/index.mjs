class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true); //this cloneNode will duplicate
    element.replaceWith(clonedElement); //this will replace another element with clonedElement
    return clonedElement;
  }

  static moveElement(elementId, newDestiantionSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestiantionSelector);
    destinationElement.append(element);
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }

    this.insertBefore = insertBefore;
  }

  //this will be remove when click modal
  detach = () => {
    //this using arrow function because will access this
    // this.element.parentElement.removeChild(this.element)
    if (this.element) {
      this.element.remove(); //this same way like above
    }
  };

  //this will show modal
  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? "afterbegin" : "beforeend",
      this.element,
    );
  }
}

class Tooltip extends Component {
  constructor(closeNotifierFunction, text) {
    super(); //this call becaue using "this"
    this.closeNotifier = closeNotifierFunction; //this is store as property
    this.text = text;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier(); //this calling
  };

  create() {
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";
    tooltipElement.textContent = this.text;
    tooltipElement.addEventListener("click", this.closeTooltip);
    this.element = tooltipElement; //this store as property
  }
}

// this is for box item
class ProjectItem {
  hasActiveTooltip = false; //this for avoid mutliple open modal

  constructor(id, updateProjectListsFunction, type) {
    this.id = id; //this is store as property
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton(); //this method will auto run when instantiate
    this.connectSwitchButton(type);
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) return;

    const projectElement = document.getElementById(this.id);
    // console.log(projectElement.dataset);
    //this will access to data (data-extra-info) attribute in html
    const tooltipText = projectElement.dataset.extraInfo;

    const tooltip = new Tooltip(
      () => (this.hasActiveTooltip = false),
      tooltipText,
    );
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  //this for more info button
  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    let moreInfoBtn = projectItemElement.querySelector("button:first-of-type");

    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler.bind(this));
  }

  //this for change button finish to active
  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === "active" ? "Finish" : "Activate";
    switchBtn.addEventListener(
      "click",
      this.updateProjectListsHandler.bind(null, this.id),
    );
  }

  //this for update item
  update(updateProjectListFn, type) {
    this.updateProjectListsHandler = updateProjectListFn;
    this.connectSwitchButton(type);
  }
}

//this is for box project (active and finish box)
class ProjectList {
  //this is field
  projects = [];

  constructor(type) {
    this.type = type; //this is store as property
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    // console.log(prjItems);
    for (const prjItem of prjItems) {
      //prjItems berisi nodeList
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type),
      );
    }
    // console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction; //this will store as property and get element for change active and finish
  }

  addProject(project) {
    // console.log(this);
    this.projects.push(project);

    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`); //this is static class

    project.update(this.switchProject.bind(this), this.type);
  }

  //this will move active to finish
  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex((p) => p.id === projectId);
    // this.projects.splice(projectIndex, 1);

    //this for get element for will change finish and active
    this.switchHandler(this.projects.find((p) => p.id === projectId));

    //this is same way like above for remove projects element
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  //this static can call without intatiate
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");

    activeProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList),
    ); //this is callback and store element will change active to finish to addProject
    finishedProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList),
    ); //this is callback and store element will change active to finish to addProject
  }
}

App.init();
