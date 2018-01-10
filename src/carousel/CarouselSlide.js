import React, { Component } from 'react';

export class CarouselSlide extends Component {
    render() {
      return (
        <li
          className={
            this.props.index == this.props.currentIndex
              ? "carousel-slide active"
              : "carousel-slide"
          }
        >
          <img src={require('../images/' + this.props.slide.link + '.jpg')} />
          
        </li>
      );
    }
  }

