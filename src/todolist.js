class Task {
  constructor(title, description, index) {
    this.title = title;
    this.description = description;
    this.isCompleted = false;
    this.index = index;
    this.priority = 'none';
    this.list = 'Home';
  }

  toggleTaskCompletion() {
    this.isCompleted = this.isCompleted ? false : true;
  }

  setTaskPriority(priority) {
    this.priority = priority;
  }

  setTaskList(list) {
    this.list = list;
  }
}

// temporarily fill tasks
const tasks = [
  new Task("Task 1", "lorem ipsum blablabalbal asfpas lorem ipsum blablabalbal asfpas sad asfalorem ipsum blablabalbal asfpas sad asfasad asfasdajpsaj fsf a", 1690255509265),
  new Task("Task 2", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a", 1690255517012),
  new Task("Task 3", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a", 1690255521737),
  new Task("Task 4", "asdgaspsum bl aasgas dgsadgsag gsadgasagbal asfpasjpsaj sdgsd", 1690255521739),
  new Task("Task 5", "lorem ipsum blablabalbal asfpas llorem ipsum blablabalbal asfasdajpsaj fsf a", 1690255521740),
  new Task("Task 6", "loas as rasdgasem ipsum blablabalasd asd al asfpasjpsaj fsf a", 1690255521741),
  new Task("Task 7", "lorasdga  gem ipsum bl asgas dgsad gablabalbal asfpasjpsaj fsf a", 169025552142),
  new Task("Task 8", "asdgaspsum bl aasgas dgsadgsag gsadgasagbal asfpasjpsaj sdgsd", 1690255521743),
];

// temporary values ================================================ //
tasks[0].setTaskPriority('low');
tasks[1].setTaskPriority('medium');
tasks[2].setTaskPriority('high');
tasks[3].toggleTaskCompletion();
tasks[4].toggleTaskCompletion();

// console.log(tasks);

// ================================================================= //

const getTasks = () => tasks;

const getTask = (index) => {
  return tasks.filter(task => task.index == index)[0];
}

const addTask = (title, description, index) => {
  tasks.push(new Task(title, description, index));
}

const updateTask = (title, description, index) => {
  const task = getTask(index);
  task.title = title;
  task.description = description;
}

const deleteTask = (index) => {
  tasks.splice(tasks.findIndex(task => task.index == index), 1);
}

const doesTaskExist = (index) => {
  return tasks.some(task => task.index == index);
}

const lists = [
  'Home',
  'Work',
];

const getLists = () => lists;

export {
  getTask,
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  doesTaskExist,
  getLists,
}