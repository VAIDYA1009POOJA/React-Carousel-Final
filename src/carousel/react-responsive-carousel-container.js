import React, { Component } from 'react';
import CarouselComponent from './react-responsive-carousel';


class CarouselContainer extends Component {
    constructor(props) {
        super();
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onApplyLimiter = this.onApplyLimiter.bind(this);
        this.state = {
            totalSlides: [
                { name: 'Image1',  link: 'image1' },
                { name: 'Image2',  link: 'image2' },
                { name: 'Image3',  link: 'image3' },
                { name: 'Image4',  link: 'image4' },
                { name: 'Image5',  link: 'image5' }
            ],
            limiter: 0
        }
        this.state.slides = this.state.totalSlides;
    }

    onApplyLimiter(e) {
        let { slides, totalSlides } = this.state;
        let newSlides = JSON.parse(JSON.stringify(totalSlides));
        this.setState({
            slides: newSlides.splice(1, this.state.limiter)
        })
    }

    onChangeInput(e) {
        this.setState({
            limiter: e.target.value
        });
    }

    render() {

        return (
            <div>
                <div className="limite-carousel">
                    <p>Enter a limiter below {this.state.slides.length}</p>
                    <input type="number" defaultValue={0} value={this.state.limiter} onChange={e => this.onChangeInput(e)} />
                    <button className="btn" onClick={e => this.onApplyLimiter(e)}>Apply</button>
                </div>
                <CarouselComponent slides={this.state.slides} />
            </div>
        );
    }


}

export default CarouselContainer




