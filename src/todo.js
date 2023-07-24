class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

const tasks = [
  new Task("Task 1", "lorem ipsum blablabalbal asfpas lorem ipsum blablabalbal asfpas sad asfalorem ipsum blablabalbal asfpas sad asfasad asfasdajpsaj fsf a"),
  new Task("Task 2", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a"),
  new Task("Task 3", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a"),
];

const getTasks = () => tasks;

const addTask = (title, description) => {
  tasks.push(new Task(title, description));
  console.log(tasks);
}

export {
  getTasks,
  addTask,
}