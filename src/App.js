import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container,Row,Col } from 'reactstrap';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer,toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import {BrowserRouter, BrowserRouter as Router,Route,Routes} from "react-router-dom";
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {

  const btnHandle=()=>{
    toast.success("this is my first message",{
      position:'top-center'
    });
  };
  return <div>
    <BrowserRouter>
    
    <ToastContainer />
    <Container>
      <Header/>
      <Row>
        <Col md={4}>
          <Menus/>
        </Col>
        <Col md={8}> 
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/add-course" element={<AddCourse/>} exact />
          <Route path="/view-courses" element={<Allcourses/>} exact /> 
          <Route path="/about-us" element={<AboutUs/>} exact /> 
          <Route path="/contact-us" element={<ContactUs/>} exact />

          
          </Routes>
        </Col>
      </Row>
    </Container>
    </BrowserRouter>
    
    </div>
}

export default App;
