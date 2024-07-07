import { useState } from 'react';
import icon from '../images/icon-dice.svg'

const Card = ({data}) => {
    const [count, setCount] = useState("001")
    const numAdvice = () => {
        if (data.length > +count ) {
            const n = +count + 1
            const num = n.toString().padStart(3, "0");
            setCount(num)
        } else {
            setCount("001")
        }
    }
    return (
        <div className="card">
            <div className="advice">A D V I C E <span> # {count}</span></div>
            <div className="quote">"{data[+count - 1]}"</div>
            <div className="image"></div>
            <div className="button" onClick={numAdvice}><img src={icon}/></div>
        </div>
    )
}

export default Card;