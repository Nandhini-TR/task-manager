import {useState, useEffect} from 'react'
import TasksList from '../TasksList'
import TasksForm from '../TasksForm'
import './index.css'

const tasksList = [
  {
    taskId: 'UPCOMING',
    taskName: 'Upcoming',
  },
  {
    taskId: 'OVERDUE',
    taskName: 'Overdue',
  },
  {
    taskId: 'COMPLETED',
    taskName: 'Completed',
  },
]

const Dashboard = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [],
  )
  const [selectedtasks, setSelectedtasks] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [priorityFilter, setPriorityFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log(tasks)
  }, [tasks])

  const addTask = task => {
    if (selectedtasks.id) {
      setTasks(tasks.map(t => (t.id === selectedtasks.id ? task : t)))
      console.log(selectedtasks)
    } else {
      setTasks([...tasks, task])
    }
    setSelectedtasks(null)
    setShowForm(false)
  }

  const editTask = task => {
    setSelectedtasks(task)
    setShowForm(true)
    console.log(selectedtasks)
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => id !== task.id))
  }

  const handleAddTaskClick = status => {
    setSelectedtasks({status})
    setShowForm(true)
  }

  const filteredTasks = tasks
    .filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(task => (priorityFilter ? task.priority === priorityFilter : true))

  return (
    <>
      <nav className="nav-container">
        <h1 className="nav-heading">Task Manager</h1>
        <div className="filter-container">
          <select
            value={priorityFilter}
            onChange={event => setPriorityFilter(event.target.value)}
            className="priority-filter"
          >
            <option value="">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input
            type="search"
            placeholder="search"
            className="search-container"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </nav>
      <ul className="board-container">
        {tasksList.map(eachTask => (
          <TasksList
            key={eachTask.taskId}
            tasksList={eachTask}
            tasks={filteredTasks.filter(
              task => task.status === eachTask.taskName,
            )}
            handleAddTaskClick={handleAddTaskClick}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
      {showForm && (
        <TasksForm
          task={selectedtasks}
          addTask={addTask}
          closeForm={() => {
            setShowForm(false)
            setSelectedtasks(null)
          }}
          status={selectedtasks}
        />
      )}
    </>
  )
}
export default Dashboard
