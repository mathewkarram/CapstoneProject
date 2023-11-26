import Button from "react-bootstrap/Button";
import './App.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
export  function SignUp() {
  
  const [formData, setFormData] = useState({
    
    name: '',
    email: '',
    
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:8000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    
    console.log('Form submitted:', response);
    setFormData({ name: '', email: '' });
    alert('Thank you for subscribing!');
  };


    return(
     <div>
      <Container>
      <Row>
      <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
      <div class="header">
        <h2>Subscribe to our Newsletter</h2>
        <p>Recieve Weekly Updates and Exclusive Coupons!</p>
      </div>
      <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
      </Row>
      </Container>
      <Container>
      <Row>
      <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
      <div>
        <form action="/signup" method="POST" onSubmit={handleSubmit} >
          <div class="form-group">
            <div class= "flex_item"></div>
            <label class= "flex_item" className="formlabel" for="name">Name: </label>
            
            <input
              type="text"
              class="form-control flex-item"
              id="name"
              name="name"
              value={formData.name} 
              onChange={handleChange}
              required
              
            />
            <div class= "flex_item"></div>
          </div>

          <div class="form-group">
          <div class= "flex_item"></div>
            <label class= "flex_item" className="formlabel" for="email">Email: </label>
            <input
              type="email"
              class="form-control flex_item"
              id="email"
              name="email"
              required
              value={formData.email} 
              onChange={handleChange}
              
            />
            <div class= "flex_item"></div>
          </div>

          <Button
            variant="primary"
            type="submit"
           
          >
            Subscribe
          </Button>s
        </form>
        
      </div>
      <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
      </Row>
      </Container>
      </div>
      );
  }