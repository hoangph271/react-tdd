import React, { useState } from 'react'
import NewMessageForm from './new-message-form'
import MessageList from './message-list'

const App = () => {
  const [messages, setMessages] = useState([])
  const handleSend = newMessage => setMessages([newMessage, ...messages])

  return (
    <div>
      <NewMessageForm onSend={handleSend} />
      <MessageList messages={messages} />
    </div>
  )
}

export default App
