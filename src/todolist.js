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

// temporarily fill tasks
const tasks = [
  new Task("Task 1", "lorem ipsum blablabalbal asfpas lorem ipsum blablabalbal asfpas sad asfalorem ipsum blablabalbal asfpas sad asfasad asfasdajpsaj fsf a", 1690255509265),
  new Task("Task 2", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a", 1690255517012),
  new Task("Task 3", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a", 1690255521737),
  new Task("Task 4", "asdgaspsum bl aasgas dgsadgsag gsadgasagbal asfpasjpsaj sdgsd", 1690255521739),
];

// temporary true
tasks[3].toggleTaskCompletion();

const getTasks = () => tasks;

const getTask = (index) => {
  return tasks.filter(task => task.index == index)[0];
}

const addTask = (title, description, index) => {
  tasks.push(new Task(title, description, index));
}

export {
  getTask,
  getTasks,
  addTask,
}