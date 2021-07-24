import React from 'react'
import Covid from './Components/Covid'
import StateWise from './Components/stateWiseData/StateWise';
import "./Components/stateWiseData/stateWise.css";
import Footer from "./Components/Footer";

const App = () => {

  return (
    <>
      <Covid/>
      <StateWise/>
      <Footer/>
    </>
  )
}

export default App;