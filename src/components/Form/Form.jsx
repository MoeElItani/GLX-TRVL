// Styles
import './Form.scss'
// Imports
import { useState } from 'react'

const Form = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [subject, setSubject] = useState('')
   const [message, setMessage] = useState('')
   const [submit, setSubmit] = useState(false)

   const handleSubmit = (e) => {
      e.preventDefault()
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setSubmit(true)
   }
   return (
      <div className='form' onSubmit={handleSubmit}>
         <form>
            <label>Your Name</label>
            <input
               type='text'
               required
               placeholder='your name'
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
               type='email'
               required
               placeholder='example@mail.com'
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <label>Subject</label>
            <input
               type='text'
               required
               placeholder='subject'
               value={subject}
               onChange={(e) => setSubject(e.target.value)}
            />
            <label>Details</label>
            <textarea
               rows='6'
               placeholder='write us a message!'
               type='text'
               required
               value={message}
               onChange={(e) => setMessage(e.target.value)}
            />
            <button className='btn'>Submit</button>
            {submit && (
               <p id='reply'>
                  Thanks for contacting us! 😊
               </p>
            )}
         </form>
      </div>
   )
}

export default Form
