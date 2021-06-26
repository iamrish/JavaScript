class ProjectItem {
  constructor(listItem, switchProjectHandler) {
    this.id = listItem.id;
    this.title = listItem.querySelector("h2").textContent.trim();
    this.desctiption = listItem.querySelector("p").textContent.trim();
    this.moreInfoButton = listItem.querySelector(".alt");
    this.toggleButton = listItem.lastElementChild;
    this.toggleButtonText = this.toggleButton.textContent.trim();
    this.hookUl = listItem.parentElement;
    const currentSection = listItem.parentElement.parentElement;
    this.siblingHookUl =
      this.toggleButtonText == "Finish"
        ? currentSection.nextElementSibling.querySelector("ul")
        : currentSection.previousElementSibling.querySelector("ul");
    this.moreInfoButton.addEventListener("click", this.moreInfo);
    this.toggleButton.addEventListener("click", this.toggleProject.bind(this));
    this.switchProjectHandler = switchProjectHandler;
  }

  toggleButtonTpe() {
    this.toggleButtonText = this.toggleButtonText == "Finish" ? "Activate" : "Finish";
    return this.toggleButtonText;
  }

  toggleProject() {
    const li = document.getElementById(this.id);
    li.remove();
    li.lastElementChild.textContent = this.toggleButtonTpe();
    this.siblingHookUl.appendChild(li);
    const tempUl = this.hookUl;
    this.hookUl = this.siblingHookUl;
    this.siblingHookUl = tempUl;
    this.switchProjectHandler(this.id);
  }

  update(switchProjectHandler){
    this.switchProjectHandler = switchProjectHandler;
  }

  moreInfo() {}
}

class ProjectList {
  constructor(hookID) {
    // console.log(hookID)
    this.hook = document.getElementById(hookID);
    this.eleList = [];
    const list = this.hook.querySelectorAll("li");
    for (const ele of list) this.eleList.push(new ProjectItem(ele, this.switchProject.bind(this)));
  }

  setSwitchProjectHandler(switchProjectHandler){
    this.switchProjectHandler = switchProjectHandler;
    console.log(switchProjectHandler)
  }

  addProject(item){
    this.eleList.push(item);
    console.log("Updated Oppostion: ", this.eleList);
    item.update(this.switchProject.bind(this));
  }

  switchProject(itemId){
    this.switchProjectHandler(this.eleList.find(project => project.id === itemId));
    this.eleList = this.eleList.filter(project => project.id !== itemId);
    console.log("Current List: ", this.eleList);
  }
}

class App {
  static init() {
    const activeProjects = new ProjectList("active-projects");
    const finishedProjects = new ProjectList("finished-projects");
    // Agarmain yaha pe listeners define kardu, to kaise handle karunga main.
    activeProjects.setSwitchProjectHandler(finishedProjects.addProject.bind(finishedProjects));
    finishedProjects.setSwitchProjectHandler(activeProjects.addProject.bind(activeProjects));
    // console.log(activeProjects.switchProject)
    // activeProjects.switchProject("p2");
  }
}

App.init();
