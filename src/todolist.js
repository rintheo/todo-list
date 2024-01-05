import format from 'date-fns/format';

class Task {
  constructor(
    id,
    userId,
    email,
    title, 
    description, 
    isCompleted,
    index,
    priority,
    list,
    dueDate,
  ) {
    this.id = id;
    this.userId = userId;
    this.email = email;
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
    this.index = index;
    this.priority = priority;
    this.list = list;
    this.dueDate = new Date(dueDate);
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

  setTaskDueDate(date) {
    this.dueDate = date;
  }
}

const tasks = [
  // new Task("Buy groceries", "Get milk, eggs, bread, and vegetables from the supermarket.", Date.now() - 86400000),
  // new Task("Finish report for work", "Compile the sales data and write a summary for the quarterly report.", Date.now() + 123),
  // new Task("Call Mom", "Catch up with Mom and check how she's doing.", Date.now() + 1102),
  // new Task("Go for a jog", "Run for 30 minutes around the park to stay active.", Date.now() + 2323),
  // new Task("Read a book", "Start reading 'The Great Gatsby' by F. Scott Fitzgerald.", Date.now() + 4242),
  // new Task("Clean the garage", "Organize and declutter the garage space.", Date.now() + 12512),
  // new Task("Pay utility bills", "Settle electricity, water, and internet bills for the month.", Date.now() + 40000),
  // new Task("Plan weekend trip", "Research destinations and create an itinerary for the weekend getaway.", Date.now() + 51243),
  // new Task("Update resume", "Add recent work experiences and skills to the resume.", Date.now() + 86400000),
  // new Task("Practice guitar", "Spend 1 hour practicing chords and scales on the guitar.", Date.now() + 86400000 * 2+ 5125),
  // new Task("Organize digital files", "Sort and arrange documents and photos on the computer.", Date.now() + 86400000 * 3 + 120512),
  // new Task("Water the plants", "Give the indoor and outdoor plants a good watering.", Date.now() + 86400000 * 4 + 120524),
  // new Task("Attend yoga class", "Join the evening yoga session at the local studio.", Date.now() + 86400000 * 4 + 120536),
  // new Task("Fix leaking faucet", "Call the plumber or attempt to repair the faucet yourself.", Date.now() + 86400000 * 5 + 120738),
  // new Task("Watch a documentary", "Pick an interesting documentary and learn something new.", Date.now() + 86400000 * 5  + 122626),
  // new Task("Start learning a language", "Download language learning app and begin with basic phrases.", Date.now() + 86400000 * 6),
];

const getTasks = async (token) => {
  return new Promise((resolve) => {
    fetch('https://todo-list-backend.azurewebsites.net/api', {
      method: 'GET',
      headers: {
        'authorization': 'Bearer ' + token,
      }
    })
      .then(data => data.json())
      .then(response => {
        console.log(response);
        tasks.length = 0;
        response.forEach(entry => {
          tasks.push(
            new Task(
              entry.id,
              entry.userId,
              entry.email,
              entry.title, 
              entry.description, 
              entry.isCompleted,
              entry.index,
              entry.priority,
              entry.list,
              entry.dueDate,
            )
          )
        })
        resolve(tasks);
      });
  })
};

const getTask = (index) => {
  return tasks.filter(task => task.index == index)[0];
}

const addTask = async (title, description, index, priority, list, email, dueDate, isCompleted, token) => {
  const body = {
    userId: 'string',
    title: title,
    description: description,
    isCompleted: isCompleted,
    index: index,
    priority: priority,
    list: list,
    email: email,
    dueDate: dueDate,
  }

  return new Promise((resolve) => {
    fetch('https://todo-list-backend.azurewebsites.net/api', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'authorization': 'Bearer ' + token,
        'content-type': 'application/json',
      }
    })
      .then(data => data.json())
      .then(response => {
        console.log(response);
        resolve();
      });
  })
}

const updateTask = async (title, description, index, priority, list, email, dueDate, isComplete=false, token) => {
  const id = getTask(index).id;

  const body = {
    userId: 'string',
    title: title,
    description: description,
    isCompleted: isComplete,
    index: index,
    priority: priority,
    list: list,
    email: email,
    dueDate: dueDate,
  }

  return new Promise((resolve) => {
    fetch(`https://todo-list-backend.azurewebsites.net/api/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'authorization': 'Bearer ' + token,
        'content-type': 'application/json',
      }
    })
      .then(data => data.json())
      .then(response => {
        console.log(response);
        resolve();
      });
  })
}

const deleteTask = async (index, token) => {
  const id = getTask(index).id;

  return new Promise((resolve) => {
    fetch(`https://todo-list-backend.azurewebsites.net/api/${id}`, {
      method: 'DELETE',
      headers: {
        'authorization': 'Bearer ' + token,
        'content-type': 'application/json',
      }
    })
      .then(response => {
        console.log(response);
        resolve();
      });
  })
}

const doesTaskExist = (index) => {
  return tasks.some(task => task.index == index);
}

const lists = [
  'Home',
  'Work',
];

const getLists = () => lists;

// API Tests
export {
  getTask,
  getTasks,
  addTask,
  updateTask,
  deleteTask,
  doesTaskExist,
  getLists,
}