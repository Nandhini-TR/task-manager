import {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

const TasksForm = props => {
  const {task, addTask, closeForm} = props

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [status, setStatus] = useState('Upcoming')

  useEffect(() => {
    if (task) {
      setTitle(task.title || '')
      setDescription(task.description || '')
      setDueDate(task.dueDate || '')
      setPriority(task.priority || 'Medium')
      setStatus(task.status || 'Upcoming')
    } else {
      setTitle('')
      setDescription('')
      setDueDate('')
      setPriority('Medium')
      setStatus('Upcoming')
    }
  }, [task])

  const handleSubmit = event => {
    event.preventDefault()
    const newTask = {
      id: uuidv4(),
      title,
      description,
      dueDate,
      priority,
      status,
    }
    addTask(newTask)
    closeForm()
  }

  return (
    <div className="popup">
      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="add-task-title">{task.id ? 'Edit' : 'Add'} Task</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          className="text-container"
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          className="text-container"
          onChange={e => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          value={dueDate}
          className="text-container"
          onChange={e => setDueDate(e.target.value)}
          required
        />
        <select
          value={priority}
          className="drop-down-container"
          onChange={e => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <div className="button-container">
          <button type="submit" className="add-task-button">
            {task.id ? 'Edit' : 'Add'} Task
          </button>
          <button className="cancel-button" type="submit" onClick={closeForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default TasksForm
