import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import NewMessageForm from '../new-message-form'

describe('<NewMessageForm />', () => {
  let getByTestId, handleSend

  afterEach(cleanup)

  describe('clicking the send button', () => {
    beforeEach(() => {
      handleSend = jest.fn()
      ;({ getByTestId } = render(<NewMessageForm onSend={handleSend} />))

      fireEvent.change(
        getByTestId('messageText'),
        {
          target: {
            value: 'New message',
          },
        },
      )

      fireEvent.click(getByTestId('sendButton'))
    })

    it('clears the text field', () => expect(getByTestId('messageText').value).toEqual(''))
    it('calls handleSend', () => expect(handleSend).toHaveBeenCalledWith('New message'))
  })
})
