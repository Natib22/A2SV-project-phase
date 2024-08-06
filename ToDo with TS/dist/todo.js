"use strict";
const taskName = document.getElementById("taskName");
const taskDescription = document.getElementById("taskDescription");
const container = document.getElementById("taskContainer");
var dropdownBtn = document.querySelector(".themeButton");
var dropdownContent = document.getElementById("dropdown-content");
var themeIcon = document.getElementById("themeIcon");
function addTask() {
    if ((taskName === null || taskName === void 0 ? void 0 : taskName.value) === "" || (taskDescription === null || taskDescription === void 0 ? void 0 : taskDescription.value) === "") {
        alert("Empty Fields enter something");
    }
    else {
        let myDiv = document.createElement("div");
        myDiv.className = "taskList";
        let innerDiv = document.createElement("div");
        innerDiv.className = "parag";
        let taskTitle = document.createElement("h2");
        taskTitle.textContent = taskName.value;
        let mySpan = document.createElement("span");
        mySpan.textContent = taskDescription.value;
        let edit = document.createElement("button");
        edit.className = "completed";
        edit.id = "edit";
        edit.textContent = "edit";
        let complete = document.createElement("button");
        complete.className = "completed";
        complete.textContent = "Completed";
        let dele = document.createElement("button");
        dele.className = "delete";
        dele.textContent = "Delete";
        complete.addEventListener("click", function () {
            completeButton(myDiv, taskTitle, mySpan, complete, edit);
        });
        dele.addEventListener("click", function () {
            deleteButton(myDiv);
        });
        edit.addEventListener("click", function () {
            editButton(taskTitle, mySpan);
        });
        innerDiv.append(taskTitle);
        innerDiv.append(mySpan);
        myDiv.append(innerDiv);
        myDiv.append(edit);
        myDiv.append(complete);
        myDiv.append(dele);
        container === null || container === void 0 ? void 0 : container.append(myDiv);
        // Clear input fields
        taskName.value = "";
        taskDescription.value = "";
        saveData();
    }
}
function deleteButton(myDiv) {
    if (container) {
        container.removeChild(myDiv);
        saveData();
    }
}
function completeButton(myDiv, taskTitle, mySpan, complete, edit) {
    if (mySpan) {
        mySpan.style.textDecoration = "line-through";
    }
    if (taskTitle) {
        taskTitle.style.textDecoration = "line-through";
    }
    myDiv.removeChild(complete);
    myDiv.removeChild(edit);
    saveData();
}
function saveData() {
    if (container) {
        localStorage.setItem("myList", container.innerHTML);
    }
}
function showData() {
    if (container) {
        container.innerHTML = localStorage.getItem("myList") || "";
        attachEventListeners();
    }
}
function attachEventListeners() {
    const tasks = container === null || container === void 0 ? void 0 : container.querySelectorAll(".taskList");
    tasks === null || tasks === void 0 ? void 0 : tasks.forEach((task) => {
        const complete = task.querySelector(".completed");
        const dele = task.querySelector(".delete");
        const edit = task.querySelector("#edit");
        const taskTitle = task.querySelector("h2");
        const mySpan = task.querySelector("span");
        if (complete && edit) {
            complete.addEventListener("click", function () {
                completeButton(task, taskTitle, mySpan, complete, edit);
            });
        }
        if (edit) {
            edit.addEventListener("click", function () {
                editButton(taskTitle, mySpan);
            });
        }
        if (dele) {
            dele.addEventListener("click", function () {
                deleteButton(task);
            });
        }
    });
}
showData();
var parag = document.getElementById("parag");
function changeToBlue() {
    const root = document.documentElement;
    root.classList.toggle("light-blue"); // Toggle the 'light-blue' class on the :root element
    document.body.style.animation = "AnimationName 59s ease infinite;";
    const themeIcon = document.getElementById("themeIcon");
    if (themeIcon)
        themeIcon.style.filter = "hue-rotate(180deg) brightness(1.2)";
}
function change() {
    changeToBlue();
}
function editButton(taskTitle, mySpan) {
    if (taskTitle) {
        taskTitle.textContent = prompt("Task Name");
    }
    if (mySpan)
        mySpan.textContent = prompt("Task description");
    saveData();
}
