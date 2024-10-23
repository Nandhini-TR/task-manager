# Task Manager

### Refer to the image below:

<br>

  ![App Flow](app-flow.gif)

<br/>


### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Features

<details>
<summary>Click to view</summary>

#### Add Tasks: 
- Add new tasks with a title, description, due date, priority (Low, Medium, High), and status (Upcoming, Overdue, Completed).
#### Edit Tasks:
- Modify existing tasks by clicking the ellipsis menu and selecting "Edit".
#### Delete Tasks:
- Delete existing tasks by clicking the ellipsis menu and selecting "Delete".
#### Search:
- Search for tasks by title using the search bar.
#### Filter by Priority:
- Filter tasks based on priority (Low, Medium, High, All).
#### Task Status Categorization:
- Upcoming: Tasks with upcoming due dates.
- Overdue: Tasks that are overdue.
- Completed: Tasks that have been marked as completed.
</details>


### Components

<details>
<summary>Click to view</summary>

#### Dashboard
- The main component of the Task Manager. It renders the list of tasks, handles filtering, and manages the state of tasks in the application.

#### TasksList

- Displays a categorized list of tasks (Upcoming, Overdue, Completed) with the ability to add new tasks under each category. It uses the Task component to display individual tasks.

#### TasksForm

- Handles adding and editing tasks. The form captures the task's title, description, due date, priority, and status. It generates a unique ID for new tasks and updates existing tasks based on their ID.

#### Task

- Displays individual task cards. It shows the task title, description, due date, and priority. The task card includes options to edit or delete the task through a dropdown menu.

</details>


### Acknowledgments

<details> <summary>Click to view</summary> 

#### React 
- A JavaScript library for building user interfaces.

#### React Icons 
- Popular icons used in the project.
</details>

