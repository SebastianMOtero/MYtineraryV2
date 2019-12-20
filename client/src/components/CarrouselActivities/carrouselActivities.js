import React from 'react'
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
// import { Input, Label, FormGroup } from 'reactstrap';
// import '../App.css'
// import OkComment from '../assets/images/arrowEnter.png';
// import { Row, Col } from 'react-bootstrap';
import './carrouselActivities.css';

class CarrouselActivities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activities: this.props.activities
        }
    }


    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 4,
            initialSlide: 0,
            arrows: false,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 7,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              }
            ]
          };
          return (
            <div>
              <div className = "CarrouselActivities">
              <h2> Activities </h2>
              <Slider {...settings}>
               {console.log(this.state.activities)}
               {this.state.activities.map( (activity) => {
                 return (
                  <div key={activity._id}>
                  <h6>{activity.name}</h6>
                </div>
                 )
               })}
                {/* <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
                <div>
                  <h3>7</h3>
                </div>
                <div>
                  <h3>8</h3>
                </div> */}
              </Slider>
              </div>
              
              {/* <FormGroup className='formgrupo'>
                <Label for="Comments">Comments</Label>
                <Row>
                    <Col xs="10" >
                        <Input type="textarea" name="text" id="InputComments" />
                    </Col>
                    <Col xs="2">
                        {/* <img src={OkComment} className="ArrowEnter" alt="Enter" /> */}
                    {/* </Col>
                </Row>
            </FormGroup> */} 
            </div>
            );
          
        }
    
            
}

export default CarrouselActivities;