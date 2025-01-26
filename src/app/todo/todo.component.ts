import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule, CommonModule],
})
export class TodoComponent {
  // Array to store tasks with name and completion status
  tasks: { name: string; completed: boolean }[] = [];

  // Variable to hold new task input
  newTask: string = '';

  isModalOpen:boolean = false;

  constructor() {
    // Load tasks from local storage when the component is initialized
    this.loadTasks();
  }

  // Function to add a new task to the list
  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask.trim(), completed: false });
      this.newTask = ''; // Clear the input field after adding the task
      this.saveTasks();  // Save updated tasks to local storage
    }
  }

  // Function to toggle task completion status
  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTasks(); // Save updated tasks to local storage
  }

  // Function to delete a task from the list
  deleteTask(index: number) {
    this.tasks.splice(index, 1); // Remove task at the given index
    this.saveTasks(); // Save updated tasks to local storage
  }

  // Function to save tasks to local storage
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  // Function to load tasks from local storage
  loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks); // Convert JSON string back to an object
    }
  }

  //Open the summary modal
  openSummaryModal() {
    this.isModalOpen = true;
  }

  closeSummaryModal() {
    this.isModalOpen = false;
  }
}