import React from 'react'
import FacialExpression from './components/FacialExpression'
import './App.css'
import { useState } from 'react'
import Moodsongs from './components/Moodsongs'

const App = () => {

  const [songs, setSongs] = React.useState([
  //   {
  //   title:"title_1",
  //   artist:"artist_1",
  //   url: "url_1"

  // },
  // {
  //   title:"title_2",
  //   artist:"artist_2",
  //   url: "url_2"

  // },
  // {
  //   title:"title_3",
  //   artist:"artist_3",
  //   url: "url_3"
  // }

  ])


  
    
  
    
  
  return (
    <div>
      < FacialExpression  setSongs={setSongs}/>
      <Moodsongs songs = { songs }/>
    </div>
  )
}

export default App
