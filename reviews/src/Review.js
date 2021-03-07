import React, { useState } from 'react';
import  './index.css';
import { FaChevronCircleLeft,
     FaChevronCircleRight,
      FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {image, job, name, text} = reviews[index];

    const checkIndex = (number) => {
        if(number > reviews.length - 1){
            return 0;
        }
        if(number < 0){
            return reviews.length - 1;
        }
        return number;
    };
    const prevPerson = () => {
       setIndex((index)=>{
        let newindex = index - 1;
        return checkIndex(newindex)
       })
       
    };

    const nextPerson = () => {
        setIndex((index)=>{
            let newindex = index + 1;
            return checkIndex(newindex)
           })
    }
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * reviews.length);
        setIndex(() => {
            return checkIndex(randomNumber);
        })

    }
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div> 
                <h4 className="author">{name}</h4>
                <p className="job">{job}</p>
                <p className="info">{text}</p>
                <div className="button-container">
                    <button className="prev-btn" onClick={prevPerson}>
                        <FaChevronCircleLeft />
                    </button>
                    <button className="next-btn" onClick={nextPerson}>
                        <FaChevronCircleRight />
                    </button>
                </div>
                <button className="random-btn" onClick={randomPerson} >
                       Surprise me
                </button>
        </article>
    )
}

export default Review
