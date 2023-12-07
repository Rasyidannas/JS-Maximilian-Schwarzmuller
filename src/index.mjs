class Tooltip {}

// this is for box item
class ProjectItem {
  constructor(id, updateProjectListsFunction) {
    this.id = id; //this is property
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton(); //this method will auto run when instantiate
    this.connectSwitchButton();
  }

  connectMoreInfoButton() {}

  //this for change button finish to active
  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn.addEventListener("click", this.updateProjectListsHandler);
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
        new ProjectItem(prjItem.id, this.switchProject.bind(this))
      );
    }
    // console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction; //this will store as property and get element for change active and finish
  }

  addProject() {
    console.log(this);
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
      finishedProjectList.addProject.bind(finishedProjectList)
    ); //this is callback and store element will change active to finish to addProject
    finishedProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList)
    ); //this is callback and store element will change active to finish to addProject
  }
}

App.init();
