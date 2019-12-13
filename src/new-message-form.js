import React, { useState, useCallback } from 'react'

const NewMessageForm = ({ onSend }) => {
  const [message, setMessage] = useState('')
  const handleSend = useCallback(() => {
    onSend(message)
    setMessage('')
  }, [message, onSend])

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        data-testid="messageText"
      />
      <button
        onClick={handleSend}
        data-testid="sendButton"
      >
        {'Send'}
      </button>
    </div>
  )
}

export default NewMessageForm
