import React, { useRef } from "react";
import Slider from "react-slick";

import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './index.css'

const testimonials = [
    {
        name: 'John smith',
        tag: 'Managing Director at xyx co orp',
        review: `Never going backwaiting in lines! Shop Smater,
        get it delivered with YAP. Its that simple.`
    },
    {
        name: 'John smith',
        tag: 'Managing Director at xyx co orp',
        review: `Never going backwaiting in lines! Shop Smater,
        get it delivered with YAP. Its that simple.`
    },
    {
        name: 'John smith',
        tag: 'Managing Director at xyx co orp',
        review: `Never going backwaiting in lines! Shop Smater,
        get it delivered with YAP. Its that simple.`
    },
    {
        name: 'John smith',
        tag: 'Managing Director at xyx co orp',
        review: `Never going backwaiting in lines! Shop Smater,
        get it delivered with YAP. Its that simple.
        .`
    }
]

const Testimonials = () => {
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1.7,
        speed: 500,
        arrows: false,
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
                color: "white",
                position: 'relative'
              }}
            >
                <div style={{ textAlign: "center",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                 }}>
                    <button className="slider-btn" onClick={previous}>
                    <GrFormPreviousLink className="text-3xl"/>
                    </button>
                    <ul style={{ margin: "20px" }}> {dots} </ul>
                    <button className="slider-btn" onClick={next}>
                    <GrFormNextLink className="text-3xl"/>
                    </button>
                </div>
            </div>
          ),
      };
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex items-center px-10 mx-3 my-10">
                <h1 className="text-white bg-green-700 rounded-xl p-3 text-sm">Testimonials</h1>
                <p className="mx-5 py-5 w-6/12 text-xl text-left">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our delivery Services</p>
            </div>
            <div className="slider-container flex flex-col bg-black p-9 rounded-4xl text-white w-11/12 md:h-[85vh]">
            <Slider ref={slider => {
                sliderRef = slider;
                }}  {...settings}>
                {testimonials.map((testmonial) => (
                        <div>
                            <p className="testimonial-box p-9 h-48 border-2 border-green-500 text-xl rounded-3xl" >{testmonial.review}</p>
                            <h3 className="text-green-300 font-semibold text-xl mx-8 ">{testmonial.name}</h3>
                            <p className="mx-8">{testmonial.tag}</p>
                        </div>
                    ))}
            </Slider>
            
            </div>
        </div>
    )}
export default Testimonials