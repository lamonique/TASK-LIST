"use strict";

// Define UI Vars
var form = document.querySelector('#task-form');
var taskList = document.querySelector('.collection');
var clearBtn = document.querySelector('.clear-tasks');
var filter = document.querySelector('#filter');
var taskInput = document.querySelector('#task'); // Load all event listeners

loadEventListeners(); // Load all event listeners

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
} // Add Task