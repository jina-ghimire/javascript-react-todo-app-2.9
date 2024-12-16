import React from 'react'
import { format } from 'date-fns'

export default function Task({ description, created, completed, editing }) {
  return (
    <li className={`${completed ? 'completed' : ''} ${editing ? 'editing' : ''}`}>
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={completed} />
        <label>
          <span className="description">{description}</span>
          <span className="created">{format(created, 'PPpp')}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      {editing && <input type="text" className="edit" defaultValue={description} />}
    </li>
  )
}
