class Tooltip {}

class ProjectItem {}

class ProjectList {
  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    console.log(prjItems);
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
