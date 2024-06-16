/* eslint-disable no-unused-vars */



import './App.css'
import React from 'react'
import Jokes from './components/Jokes.jsx';
import Profile from './Profile.jsx';


function App() {
  const jokingLine = [{
    "joke": "tell me please",
    "punchLine":"you are a joke",
  },
    {
    "joke": "tell me please",
    "punchLine":"you are a joke",
  },
  ]

  return (
    <>
      <Profile />
      <Jokes keydadjoke={jokingLine} />
    </>
  )
}

export default App
