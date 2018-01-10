import React, { Component } from 'react';
import { CarouselSlide } from './CarouselSlide'
class CarouselComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            currentIndex: 0
        };
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.goToSlide = this.goToSlide.bind(this);
        setInterval(() => {
            this.nextSlide();
        }, 10000)
        
    }

    

    goToSlide(index) {
        this.setState({
            currentIndex: index
        });
    }

    prevSlide() {
        let index = this.state.currentIndex;
        let { slides } = this.props;
        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }
        this.setState({
            currentIndex: index - 1
        });


    }

    nextSlide() {
        let index = this.state.currentIndex;
        let { slides } = this.props;
        let slidesLength = slides.length - 1;
        if (index === slidesLength) {
            index = -1;
        }
        this.setState({
            currentIndex: index + 1
        });
    }


    render() {
       

        return (
            <div className="image-carousel">
               
                <div className="">
                <a href="#" className="carousel-controls left" onClick={e => this.prevSlide(e)}  >
                    <span className="fa fa-2x fa-angle-left" />
                </a>
                <ul className="carousel-slides">
                    {this.props.slides.map((slide, index) =>
                        <CarouselSlide
                            key={index}
                            index={index}
                            currentIndex={this.state.currentIndex}
                            slide={slide}
                        />
                    )}
                </ul>
                <a href="#" className="carousel-controls right" onClick={e => this.nextSlide(e)}  >
                    <span className="fa fa-2x fa-angle-right" />
                </a>
                <ul className="carousel-indicators">
                    {this.props.slides.map((slide, index) =>
                        <li key={index}>
                            <a
                                className={
                                    index == this.state.currentIndex
                                        ? "carousel-indicator active"
                                        : "carousel-indicator"
                                }
                                onClick={e => this.goToSlide(index)}
                            />
                        </li>
                    )}
                </ul>
                </div>
            </div>
        );
    }
}

export default CarouselComponent




