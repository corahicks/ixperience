class Task {
  constructor(task, completedState) {
    this.task = task;
    this.completedState = completedState;
  }
}

class userInterface {
  constructor() {
    this.taskInput = document.getElementById("input-task");
    this.button = document.getElementById("add-btn");
    this.table = document.getElementById("table-body");

    //keeps track of all the tasks input
    this.tasks = [];
  }

  bindEventListeners() {
    this.button.addEventListener("click", (e) => {
      this.buttonClick(e);
    });
  }

  buttonClick(event) {
    //each task state starts as false
    const task = new Task(this.taskInput.value, false);
    this.tasks.push(task);

    this.taskInput.value = "";
    this.taskTable();
  }

  taskTable() {
    //get the table back to an empty state and then add all the table element again
    this.table.innerHTML = "";
    for (let task of this.tasks) {
      const row = document.createElement("tr");
      const taskCell = document.createElement("td");
      const completedCell = document.createElement("td");
      const actionCell = document.createElement("td");

      const actionButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("ms-3");

      taskCell.innerHTML = task.task;
      completedCell.innerHTML = task.completedState;
      actionButton.innerHTML = "✓";
      deleteButton.innerHTML = "X";

      actionButton.addEventListener("click", (e) =>
        this.onActionButtonClick(task)
      );
      deleteButton.addEventListener("click", (e) => this.deleteButton(task));
      actionCell.append(actionButton);
      actionCell.append(deleteButton);

      row.append(taskCell);
      row.append(completedCell);
      row.append(actionCell);
      this.table.append(row);
    }
  }

  onActionButtonClick(taskClicked) {
    taskClicked.completedState
      ? (taskClicked.completedState = false)
      : (taskClicked.completedState = true);

    this.taskTable();
  }

  deleteButton(taskToDelete) {
    this.tasks = this.tasks.filter((task) => {
      return task.task != taskToDelete.task;
    });
    this.taskTable();
  }
}

const ui = new userInterface();
ui.bindEventListeners();
console.log(ui);
