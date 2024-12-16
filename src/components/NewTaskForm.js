import React from 'react'

export default function NewTaskForm() {
  return (
    <form className="new-task-form">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  )
}
