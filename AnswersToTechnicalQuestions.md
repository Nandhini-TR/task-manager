# Answers to technical questions

## How long did you spend on the coding test? 
- It took approximately 2.5 days to complete

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it. 
- One of the most useful features added to modern versions of JavaScript, especially in frameworks like React, is the concept of hooks. 
- Hooks such as **useState** and **useEffect** provide a more elegant way to manage component state and lifecycle without needing class components.
- **useState** is used to manage the state of task, editing tasks, deleting tasks
- **useEffect** is used to handle storing tasks in local storage
```sh
import {useState, useEffect} from 'react'

const Dashboard = () => {
  // useState hook to manage tasks and other states
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )
  const [selectedtasks, setSelectedtasks] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [priorityFilter, setPriorityFilter] = useState('')

  // useEffect hook to store tasks in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Function to add or edit tasks
  const addTask = task => {
    if (selectedtasks.id) {
      setTasks(tasks.map(t => (t.id === selectedtasks.id ? task : t)))
    } else {
      setTasks([...tasks, task])
    }
    setSelectedtasks(null)
    setShowForm(false)
  }

  // Function to edit a task
  const editTask = task => {
    setSelectedtasks(task)
    setShowForm(true)
  }

  // Function to delete a task
  const deleteTask = id => {
    setTasks(tasks.filter(task => id !== task.id))
  }

}
```

## How would you track down a performance issue in production? Have you ever had to do this?
useEffect Performance Issue
- which is due to lack of usage of **dependency array** as a second argument to the useEffect, due to which effect will run on every render. This can cause unnecessary re-execution of the effect, leading to performance issues, especially if the effect contains expensive operations like API calls, calculations, or state updates.

## If you had more time, what additional features or improvements would you consider adding to the task management application
I would like to add features like

- **Remainders** on the tasks which is close to the deadline
- **Dark mode** Toggle for visual comfort
- **Multi-user** application to share the tasks with a specific user
- **Drag and Drop** from overdue card, upcoming card to completed card