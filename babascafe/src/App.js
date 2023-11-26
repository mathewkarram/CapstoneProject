import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { AboutUs } from "./aboutus.js";
import { SignUp } from "./signup.js";
import './App.css';
export default function App(props) {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
        <div className="container2">
          <Container  >
            <Row>
            <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
            <Nav>
              <Nav.Item className="nav"><Link to="/" className="link">Home</Link></Nav.Item>
              <Nav.Item className="nav"><Link to="/aboutus" className="link">About Us </Link> </Nav.Item>
              <Nav.Item className="nav"> <Link to="/signup" className="link">Sign Up </Link></Nav.Item>
              <img className="cafelogo" src="https://t4.ftcdn.net/jpg/05/14/51/79/360_F_514517927_dXLi1DauUmrCaE3AkElsVgJ1jaYZMcSA.jpg" alt="Cafe Logo" width={100} height={100} style={{ position: "relative", left: 850 }} />
            </Nav>
            <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
            </Row>
          </Container>
          </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        
          <div id="footer">
        <Container>
          <Row>
            <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
            <Nav className="justify-content-center">
            
              <Nav.Item className="nav"><Link to="/" className="link">Home</Link></Nav.Item> 
              <Nav.Item className="nav"><Link to="/aboutus" className="link">About Us </Link></Nav.Item> 
              <Nav.Item className="nav"><Link to="/signup" className="link">Sign Up </Link></Nav.Item>
           
            </Nav>
            <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
          </Row>
          </Container>
          </div>
          
    
      </BrowserRouter>
      <div id="copyrightinfo">
        Copyright &copy; 35 Crimly Avenue, North York, ON <br />
        Contact us: <br />
        Phone: 647-760-7189 <br />
        Email: <a href="mailto: mathew.karram@outlook.com">
          {" "}
          mathew.karram@outlook.com
        </a>
      </div>
      </div>
    </div>


  );
}
function Home() {
  
  return (
    <div>
      <Body />
      
    </div>
  )
}




 function Body() {
  const [items, SetItems] = useState([]);
  const foodpics = [
    "https://www.allrecipes.com/thmb/yv2xN_cr4C-N9CG9stg3mc8R_Bo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9069845-how-to-make-cheese-sticks-JanetFlo-4x3-1-96354370aba64fa0800156dc0bc87b3e.jpg",
    "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps79249_WSD1999447A12_17_1b_WEB.jpg",
    "https://www.foodandwine.com/thmb/6wTm7a0y87X97LK-ZMxe2787kI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg",
    "https://www.simplyrecipes.com/thmb/4LFrc9hSMoKErr2WI7tThcnvWwA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Perfect-Lemonade-LEAD-08-B-441ceb568f854bb485dbed79e082bb4a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg",
    "https://photos.bigoven.com/recipe/hero/ham-and-cheese-baguette-3b7c76.jpg",
    "https://sugargeekshow.com/wp-content/uploads/2020/10/baked_donut_recipe_featured.jpg"
  ];
  const headings = [
    "Cheese Sticks",
    "French Vanilla Latte",
    "English Breakfast Tea",
    "Lemonade",
    "Italian Cappucino",
    "Ham and Cheese Sandwich",
    "Baba's Cafe's Classic Donuts"
  ];
  const [searchKey, setSearchKey] = useState(" ");

  React.useEffect(() => {
    fetch(
      'https://api.nal.usda.gov/fdc/v1/foods/list?api_key=BzFXu12iRdyTztnqGZPF4kIiN0CYM1lkcsRQhQe5'
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        SetItems(json.slice(0, 8));
      });
  }, []);
  var counter = 0;
  return (
    <div className="intro">
      <Container>
        <Row>
          <Col xs={2} s={2} md={2} lg={3} xl={4} ></Col>
          <Col xs={8} s={8} md={10} lg={12} xl={14}><h1 className="heading1">Welcome to BABA's Cafe!</h1></Col>
          <Col xs={2} s={2} md={2} lg={3} xl={4}></Col></Row>
        <Row>
          <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
          <Col xs={8} s={8} md={10} lg={12} xl={14}><h2 className="heading2">Where we value Health first!</h2></Col>
          <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
        </Row>
        <Row>
          <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
          <Col xs={8} s={8} md={10} lg={12} xl={14}>
            <div className="intropar">
              At BABA's Cafe we know the struggles of going out to eat while on a
              diet. The stress of wondering how nutritious the food you are eating
              while with friends is vanished at BABA's Cafe. We have provided all the
              tools below for you to get educated on what you put in your body while
              dining at our establishment. Start scrolling to see the nutritious
              dishes we have to offer!
            </div>
          </Col>
          <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
          <Col xs={8} s={8} md={10} lg={12} xl={14}><h3 className="heading2">Featured Items!</h3></Col>
          <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
        </Row>
      </Container>
      <Carousel>
        <Carousel.Item>
          <img src={foodpics[1]} alt="French Vanilla Latte" width={400} height={300} />
          <Carousel.Caption >
            <div className="carousalcap">
            {headings[1]}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={foodpics[0]} alt="Cheese Sticks" width={400} height={300} />
          <Carousel.Caption >
          <div className="carousalcap">
            {headings[0]}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={foodpics[6]} alt="Baba's Classic Donuts" width={400} height={300} />
          <Carousel.Caption >
          <div className="carousalcap">
            {headings[6]}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <label>Search: </label>
      <input type="text" onChange={(e) => setSearchKey(e.target.value)} />{" "}

      {items.map((x, i) => {
        if (
          searchKey.length > 0 &&
          !headings[i % headings.length]
            .toLowerCase()
            .includes(searchKey.toLowerCase())
        ) {
          return<></>
        }
        counter++;
        return (
          <Container>
            <Row>
              <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
              <Col xs={8} s={8} md={10} lg={14} xl={16}>
                <div className="container1">
                  <div class="container1item"></div>
                  <div>
                    {i !== 0 && (
                      <div>
                       <div class="container1item"></div> 
                      <img
                        className="foodimg"
                        variant="top"
                        src={foodpics[i % foodpics.length]}
                        alt="Food"
                        style={{ width: '8rem', height: '10rem', margin: 'auto' }}
                      />
                      <div class="container1item"></div>
                      </div>
                    )}
                    {i !== 0 && <h3 className="info">{headings[i % headings.length]}</h3>}
                    {x.foodNutrients.map((y) =>
                      y.unitName === "KCAL" ||
                        y.name === "Carbohydrate, by difference" ||
                        y.name === "Protein" ||
                        y.name === "Total lipid (fat)" ? (
                        <div>
                          <div>
                            <span className="info">
                              {y.name}: {y.amount}
                            </span>
                          </div>
                        </div>

                      ) : null
                    )}


                  </div>
                  <div class="container1item"></div>
                </div>
              </Col>
              <Col xs={2} s={2} md={2} lg={3} xl={4}></Col>
            </Row>
          </Container>
        );
      })}
      {counter < 1 ? <div style={{color: "bisque"}}>Sorry we don't carry that item!</div> : <></>}
      
    </div>
  );
}






