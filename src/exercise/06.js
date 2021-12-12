// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // Exercise
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const userName = event.target.elements.username.value;
  //   onSubmitUsername(userName)
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor='username'>Username:</label>
  //       <input id='username' type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  // EXTRA-1
  // const inputRef = React.useRef()
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const userName = inputRef.current.value
  //   onSubmitUsername(userName)
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor='username'>Username:</label>
  //       <input ref={inputRef} id='username' type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  // EXTRA-2
  // const [error, setError] = React.useState(undefined)
  // const onChange = event => {
  //   const userName = event.target.value
  //   setError(
  //     userName !== userName.toLowerCase()
  //       ? 'Type only lower case letters'
  //       : undefined,
  //   )
  // }
  // const handleSubmit = event => {
  //   event.preventDefault()
  //   const userName = event.target.elements.username.value
  //   onSubmitUsername(userName)
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input id="username" type="text" onChange={onChange} />
  //       <label role="alert" style={{color: 'red', marginLeft: '10px'}}>
  //         {error}
  //       </label>
  //     </div>
  //     <button type="submit" disabled={error}>
  //       Submit
  //     </button>
  //   </form>
  // )

  // EXTRA-3
  const [userName, setUserName] = React.useState('')
  const onChange = event => {
    const userName = event.target.value
    setUserName(userName.toLowerCase())
  }
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(userName)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" onChange={onChange} value={userName} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
