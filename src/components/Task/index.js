import {useState} from 'react'
import {PiFlagLight} from 'react-icons/pi'
import {HiMiniEllipsisHorizontal} from 'react-icons/hi2'
import {TbClockHour10} from 'react-icons/tb'
import './index.css'

function Task(props) {
  const {task, editTask, deleteTask} = props
  const [menuOpen, setMenuOpen] = useState(false)

  const flagColor = {
    Low: 'priority-tag-low ',
    Medium: 'priority-tag-medium',
    High: 'priority-tag-high',
  }

  const flag = flagColor[task.priority]

  const formatDate = dateString => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
    })
  }

  const handleEdit = () => {
    editTask(task)
    setMenuOpen(false)
  }

  const handleDelete = () => {
    deleteTask(task.id)
    setMenuOpen(false)
  }

  return (
    <div className="task-card">
      <div className="ellipsis-container">
        <h1 className="task-title">{task.title}</h1>
        <button
          type="button"
          className="ellipsis-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiMiniEllipsisHorizontal />
        </button>
      </div>
      {menuOpen && (
        <div className="edit-container">
          <button type="button" className="edit-button" onClick={handleEdit}>
            Edit
          </button>
          <button type="button" className="edit-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
      <p className="task-description">{task.description}</p>
      <div className="task-footer">
        <div className={`priority-container ${flag}`}>
          <PiFlagLight className="flag-icon" />
          <p>{task.priority}</p>
        </div>
        <div className="timer-container">
          <TbClockHour10 className="clock-icon" />
          <p className="due-date">{formatDate(task.dueDate)}</p>
        </div>
      </div>
    </div>
  )
}

export default Task
