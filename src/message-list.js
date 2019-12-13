import React from 'react'

const MessageList = ({ messages }) => (
  <ul>
    {messages.map((message, i) => (
      <li key={`${message}-${i}`}>
        {message}
      </li>
    ))}
  </ul>
)

export default MessageList
