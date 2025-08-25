import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Profile } from '../Components/profile'
import { Usestate } from '../Components/usestate'
import { Toggle } from '../Components/showToggle'
import { UseArray } from '../Components/useArray'
import { Card } from '../Components/Card'
import { Navbar } from '../Components/Navbar'


// Step 1: Data Array
const songs = [

  {
    title: "Shape of You",
    singer: "Ed Sheeran",
    image: "https://media.gettyimages.com/id/1496391549/photo/new-york-new-york-ed-sheeran-performs-on-nbcs-today-at-rockefeller-plaza-on-june-06-2023-in.jpg?s=612x612&w=0&k=20&c=aTvUhNQGu0BU93lO753B0g4SwGdSZ0B81Q_CACxoJZE=",
    isFavourite: false,
  },
  {
    title: "Levitating",
    singer: "Dua Lipa",
    image: "https://media.gettyimages.com/id/2150337885/photo/new-york-new-york-dua-lipa-performs-onstage-during-the-2024-time100-gala-at-jazz-at-lincoln.jpg?s=612x612&w=0&k=20&c=Jx0_m_K04FMsQlADOeQRgFkyMgnK6EZLO-38K8er0_I=",
    isFavourite: false,
  },
  {
    title: "Stay",
    singer: "The Kid LAROI, Justin Bieber",
    image: "https://media.gettyimages.com/id/1414522669/photo/budapest-hungary-justin-bieber-performs-on-day-three-of-sziget-festival-2022-on-%C3%B3budai-sziget.jpg?s=612x612&w=0&k=20&c=lrAM0XwNi46nI5xzu_ooBoT21A2IA5Cges58fd7994Y=",
    isFavourite: false,
  },
  {
    title: "Someone Like You",
    singer: "Adele",
    image: "https://media.gettyimages.com/id/1406409082/photo/london-england-adele-performs-on-stage-as-american-express-present-bst-hyde-park-in-hyde-park.jpg?s=612x612&w=0&k=20&c=fSXmkast2enXwcm__XE3L-JVo_uqq7txv0eP4-1wX4U=",
    isFavourite: false,
  },
];


function App() {
  const [songdata,setsongdata]=useState(songs)
    function handleclick(index) {
    setsongdata((prev) => {
      return prev.map((obj, i) => {
        if (i === index) {
          return { ...obj, isFavourite: !obj.isFavourite };
        }
        return obj;
      });
    });
  }
  return (
    <div>
      <Navbar data = {songdata}></Navbar>
    <div className='flex gap-5 flex-wrap'>
      {songdata.map((obj, index) => {
      return <Card key={index} data={obj} handleclick = {handleclick} index = {index}/>;
      })}


    </div>
    </div>


  )
}

export default App;
