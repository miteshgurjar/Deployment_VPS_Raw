import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');


  useEffect(() => {
    fetch('http://localhost:4242/api/message')
      .then(response => response.json())
      .then(res=> setMessage(()=>res.message))
      .catch(error => console.error('Error fetching message:', error));

  },[]);
  return (
    <>
      <div>
        
        <h1>made the simple website</h1>
        <div>data {message}</div>
      </div>
    </>
  )
}

export default App
