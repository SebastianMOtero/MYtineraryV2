import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import './CarrouselCities.css';
import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      accessibility: false,
      arrows: false,
      dots: true,
      autoplay:false
    };
    return (
      <div className="CarrouselBloqueRaiz">
        <h5>Popular MYtineraries</h5>
        <Slider {...settings}>
          <div className='bloqueCarrousel'>
              <div className="bloqueImg ">
                <h3>1</h3>
              </div>
          </div>
          <div className='bloqueCarrousel'>
              <div className="bloqueImg ">
            <h3>2</h3>
              </div>
          </div>
          <div className='bloqueCarrousel'>
              <div className="bloqueImg ">
            <h3>3</h3>
              </div>
          </div>
          <div className='bloqueCarrousel'>
              <div className="bloqueImg ">
            <h3>4</h3>

              </div>
          </div>
          <div className='bloqueCarrousel'>
          <div className="bloqueImg ">
            <h3>5</h3>

              </div>
          </div>
          <div className='bloqueCarrousel'>
          <div className="bloqueImg ">
            <h3>6</h3>

              </div>
          </div>
          <div className='bloqueCarrousel'>
          <div className="bloqueImg ">
            <h3>7</h3>

              </div>
          </div>
          <div className='bloqueCarrousel'>
          <div className="bloqueImg ">
            <h3>8</h3>

              </div>
          </div>
          <div className='bloqueCarrousel'>
          <div className="bloqueImg ">
            <h3>9</h3>

              </div>
          </div>
          <div className='bloqueCarrousel'>
          <div className="bloqueImg ">
            <h3>10</h3>

              </div>
          </div>
          <div className='bloqueCarrousel'>
          <div className="bloqueImg ">
            <h3>11</h3>

              </div>
          </div>
          <div className='bloqueCarrousel'>
              <div></div>
            <h3>12</h3>
          </div>
          <div className='bloqueCarrousel'>
              <div></div>
            <h3>13</h3>
          </div>
          <div className='bloqueCarrousel'>
              <div></div>
            <h3>14</h3>
          </div>
          <div className='bloqueCarrousel'>
              <div></div>
            <h3>15</h3>
          </div>
          <div className='bloqueCarrousel'>
              <div></div>
            <h3>16</h3>
          </div>
        </Slider>
      </div>
    );
  }
}