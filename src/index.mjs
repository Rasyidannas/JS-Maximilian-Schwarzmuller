class Tooltip {}

// this is for box item
class ProjectItem {
  constructor(id) {
    this.id = id; //this is property
    this.connectMoreInfoButton(); //this method will auto run when instantiate
    this.connectSwitchButton();
  }

  connectMoreInfoButton() {}

  //this for change button finish to active
  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn.addEventListener("click");
  }
}

//this is for box project (active and finish box)
class ProjectList {
  //this is field
  projects = [];

  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    // console.log(prjItems);
    for (const prjItem of prjItems) {
      //prjItems berisi nodeList
      this.projects.push(new ProjectItem(prjItem.id));
    }
    console.log(this.projects);
  }

  addProject() {}

  //this will move active to finish
  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex((p) => p.id === projectId);
    // this.projects.splice(projectIndex, 1);

    //this is same way like above
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  //this static can call without intatiate
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
  }
}

App.init();
