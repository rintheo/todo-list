class Task {
  constructor(title, description, index) {
    this.title = title;
    this.description = description;
    this.isCompleted = false;
    this.index = index;
  }

  toggleTaskCompletion() {
    this.isCompleted = this.isCompleted ? false : true;
  }
}

const tasks = [
  new Task("Task 1", "lorem ipsum blablabalbal asfpas lorem ipsum blablabalbal asfpas sad asfalorem ipsum blablabalbal asfpas sad asfasad asfasdajpsaj fsf a", 1690077703),
  new Task("Task 2", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a", 1690081303),
  new Task("Task 3", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a", 1690160503),
];

const getTasks = () => tasks;

const getTask = (index) => {
  return tasks.filter(task => task.index == index)[0];
}

const addTask = (title, description) => {
  tasks.push(new Task(title, description));
}

export {
  getTask,
  getTasks,
  addTask,
}