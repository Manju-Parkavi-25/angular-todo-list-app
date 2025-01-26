# To-Do List Application

A simple and clean Angular-based To-Do list application that allows users to add, toggle, and delete tasks. Data is saved using local storage to maintain state even after page reloads.

## Features

- Add new tasks
- Mark tasks as completed (strikethrough effect)
- Delete tasks
- Data stored in Local Storage for persistence

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app.git

	2.	Navigate to the project directory:

cd todo-app


	3.	Install dependencies:

npm install


	4.	Run the application:

ng serve


	5.	Open your browser and go to:

http://localhost:4200/


	6.	The application should now be running!

Technologies Used
	•	Angular 19
	•	TypeScript
	•	HTML/CSS
	•	LocalStorage (for data persistence)
	•	Angular CLI

Summary of What You Learned in Angular

Through the development of the To-Do List application, you gained valuable hands-on experience in Angular with the following concepts:
	1.	Component-Based Architecture:
	•	Used @Component decorator to define components and create a standalone component for managing the To-Do List.
	•	Leveraged the component’s selector, template, and styles for clear separation of concerns.
	2.	Data Binding:
	•	Two-way Binding ([(ngModel)]) for managing user input in the form.
	•	Interpolation ({{ }}) to display dynamic content.
	•	Property Binding ([class.completed]) to conditionally apply classes.
	•	Event Binding ((click)) for handling user actions like adding, toggling, and deleting tasks.
	3.	Directives:
	•	Structural Directives like *ngIf (conditional rendering) and *ngFor (iteration) to handle dynamic display of tasks and messages.
	•	Attribute Directive (ngModel) for managing form inputs.
	4.	Local Storage Integration:
	•	Implemented local storage to persist tasks even after the browser page is reloaded. This allows tasks to be saved and restored automatically.
	5.	Component Styling:
	•	Applied custom styles using an external CSS file to enhance the appearance of the application.
	•	Used dynamic styling techniques, such as applying a line-through effect on completed tasks using CSS classes.
	6.	Angular CLI:
	•	Used Angular CLI commands for component generation, project setup, and app running.

Contributing
	1.	Fork the repository
	2.	Create your feature branch (git checkout -b feature-name)
	3.	Commit your changes (git commit -m 'Add some feature')
	4.	Push to the branch (git push origin feature-name)
	5.	Open a Pull Request

License

This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
	•	Inspired by various to-do list applications available on the web.
	•	Thanks to the Angular community for creating such an amazing framework!

### *Where to Keep This Summary in the Application*:

- *README File*: The summary is included in the README.md file, which is the most common place for project overviews and learning outcomes.
- *UI (Optional)*: You can create an "About" or "What You Learned" page or modal within the app itself, where users can read the summary.