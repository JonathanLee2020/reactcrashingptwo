import './App.css';
import Todo from "./components/Todo.jsx"
import Title from "./components/Title.jsx"
import Modal from "./components/Modal.jsx"
import React, { UseState } from "react";
import { useState, useEffect } from 'react';
import Counter from "./components/Counter.jsx"
import About from "./pages/About.jsx"
import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  console.log("hello gamers, our app is starting")
  // return <Counter initVal={0} />
  // let isModalOpen = false;
  //showModal is initialised as the parameter (false in this situation) amd adjustModal is set to the funciton that maniplulates the parameeter
  let [showModal, adjustModal] = useState(false);
  function deleteTask() {
    console.log(`we have deleted one task`);
    adjustModal(true);
  }
  function closeModal() {
    adjustModal(false);
    console.log(`we have shut the modal`);
  }

  useEffect(() => {
  }, [showModal])

  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>c
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>




















    // <div className="App">
    //   <Title></Title>
    //   <div className="addTask">
    //     <input type="text" onChange={(event) =>{
    //       console.log(event.target.value);
    //     }}/>
    //     <button >Add Task</button>
    //   </div>
    //   <div className="todo__wrapper">
    //     <Todo 
    //     title="Finish being a hello"
    //     paragraph = "wave"
    //     deleteTask = {deleteTask}
    //     />
    //     <Todo 
    //     title="Finish pull ups"
    //     paragraph = "Lovely contraction on the back 🤤🤤🤤"
    //     deleteTask = {deleteTask}
    //     />
    //     <Todo 
    //     title="Finish saying hello"
    //     paragraph = "say the words hello"
    //     deleteTask = {deleteTask}
    //     />
    //   </div>
    //   {showModal ? <Modal title="want to delete?🥺🥺"end="Leave😈"keep="Stay🥰" closeModal = {closeModal}/> : null}
    // </div>
  );
}

export default App;
