import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Profile } from '../Components/profile'


// Step 1: Data Array
const profiles = [
  {
    name: "Arindam Bhattacharya",
    title: "MLSA | AI&ML Enthusiast | GLBITM'27'",
    summary: "Hello, myself Arindam, a BTech second year IT student, AI&ML Enthusiast, passionate about learning new technologies and building new connections.",
    image: "image.jpg"
  },
  {
    name: "Kushal Sharma",
    title: "React Developer | Backend Learner",
    summary: "Hey! I'm Kushal, learning React and DevOps. Passionate about building scalable systems and contributing to open-source.",
    image: "image.jpg"
  },
  {
    // name: "Riya Patel",
    title: "UI/UX Designer | Frontend Enthusiast",
    summary: "Riya loves crafting beautiful user experiences and exploring the world of design systems.",
    image: "image.jpg"
  }
];

// Step 2: Use .map to render Profile components
function App() {
  return (
    <div className="all">
      {profiles.map((profile, index) => (
        <Profile
          key={index} // Always add a unique key when using .map
          name={profile.name}
          title={profile.title}
          summary={profile.summary}
          image={profile.image}
        />
      ))}
    </div>
  );
}

export default App;
