import React, { useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info}) => {
    const [showParagraph, setShowParagraph] = useState(false)
    return (
        <article className="question">
            <header className="question">
                <h4>{title}</h4>
                <button className="btn" onClick={() => setShowParagraph(!showParagraph)}>{showParagraph ? <AiOutlineMinus /> : <AiOutlinePlus/>}</button>
            </header>
            {showParagraph && <p>{info}</p> }
        </article>
    )
}

export default Question
