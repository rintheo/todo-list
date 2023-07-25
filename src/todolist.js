class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.isCompleted = false;
  }

  toggleTaskCompletion() {
    this.isCompleted = this.isCompleted ? false : true;
    console.log(this.isCompleted); // temp
  }
}

const ongoingTasks = [
  new Task("Task 1", "lorem ipsum blablabalbal asfpas lorem ipsum blablabalbal asfpas sad asfalorem ipsum blablabalbal asfpas sad asfasad asfasdajpsaj fsf a"),
  new Task("Task 2", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a"),
  new Task("Task 3", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a"),
];
const completedTasks = [];

const getOngoingTasks = () => ongoingTasks;
const getCompletedTasks = () => completedTasks;

const addTask = (title, description) => {
  ongoingTasks.push(new Task(title, description));
}

const completeTask = (index) => {
  completedTasks.push(...getOngoingTasks().splice(index, 1))
}

const uncompleteTask = (index) => {
  ongoingTasks.push(...getCompletedTasks().splice(index, 1))
}

export {
  getOngoingTasks,
  getCompletedTasks,
  addTask,
  completeTask,
  uncompleteTask,
}