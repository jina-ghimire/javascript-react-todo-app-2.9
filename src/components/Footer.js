import React from 'react'
import TasksFilter from './TasksFilter'

export default function Footer({count}) {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TasksFilter/>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}
