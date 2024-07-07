import { useState } from 'react';
import icon from '../images/icon-dice.svg'

const Card = ({data}) => {
    const [count, setCount] = useState("001")
    const [number, setNumber] = useState(2)
    const numAdvice = () => {
        if (data.length > number -1) {
            const n = number + 1
            const num = number.toString().padStart(3, "0");
            setNumber(n)
            setCount(num)
        } else {
            setNumber(2)
            setCount("001")
        }
    }
    return (
        <div className="card">
            <div className="advice">A D V I C E <span> # {count}</span></div>
            <div className="quote">"{data[number - 2]}"</div>
            <div className="image"></div>
            <div className="button" onClick={numAdvice}><img src={icon}/></div>
        </div>
    )
}

export default Card;