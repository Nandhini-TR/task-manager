import {FiPlusCircle} from 'react-icons/fi'
import Task from '../Task'
import './index.css'

const TasksList = props => {
  const {tasksList, tasks, editTask, deleteTask, handleAddTaskClick} = props
  const {taskName, taskId} = tasksList

  const cardColor = {
    UPCOMING: 'upcoming-card',
    OVERDUE: 'overdue-card',
    COMPLETED: 'completed-card',
  }

  const cardBgContainer = cardColor[taskId]

  return (
    <li className={`task-container ${cardBgContainer}`}>
      <div className="add-form-container">
        <h1 className="task-name">{taskName}</h1>
        <button
          type="button"
          className="add-logo-button"
          onClick={() => handleAddTaskClick(taskName)}
        >
          <FiPlusCircle className="add-logo" />
        </button>
      </div>
      <div>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </li>
  )
}

export default TasksList
