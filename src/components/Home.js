import React,{useEffect} from "react";
import {Container,Button} from 'reactstrap';
const Home = () => {

    useEffect(()=>{
        document.title="Home || Learn Code With Me";
    },[]);

    return(
        // <div class="container-fluid bg-light text-dark p-5">
        // <div>
        //     <Container className="text-center">
        //     <h1 >Learn Code with me</h1>
        //     <p>
        //         This is developed by learn code wwith me for learning purpose and
        //         backend is on springboot and front end on react  jsS
        //     </p>
        //     </Container>
        //     <Container className="text-center">
        //         <Button color="primary" outline>Start Using</Button>
        //     </Container>
            
        // </div>
        // </div>
        <div className="home-page-container">
      <header className="hero-section">
        <h1>Welcome to Learn Code With Me</h1>
        <p>Unlock Your Coding Potential with Our Comprehensive Courses</p>
        <p>At <strong>Learn Code With Me</strong>, we are passionate about empowering 
            individuals with the skills they need to thrive in the 
            ever-evolving world of technology. Whether you're a beginner 
            taking your first steps into coding or an experienced developer 
            looking to upskill, our platform offers a diverse range of courses 
            to cater to your learning journey.</p>
      </header>

      <section id="featured-courses">
        
      </section>

      <section className="benefits-section">
        <h2>Why Choose Learn Code With Me?</h2>
        <div className="benefit">
          <h3>1. Comprehensive Curriculum</h3>
          <p>Dive into our carefully curated courses designed to cover a wide 
            spectrum of programming languages, frameworks, and technologies. 
            From web development to artificial intelligence, we've got you covered..</p>
        </div>
        <div className="benefit">
          <h3>2. Expert Instructors</h3>
          <p>Learn from industry professionals and experienced educators who bring 
            real-world insights into the virtual classroom. Our instructors are dedicated to your success.</p>
        </div>
        <div className="benefit">
          <h3>3. Hands-On Projects</h3>
          <p> Apply your knowledge through hands-on projects and build a portfolio that showcases your coding prowess. 
            Practical experience is key, and we make sure you get plenty of it.</p>
        </div>
      </section>
    </div>
    
    );
};

export default Home;