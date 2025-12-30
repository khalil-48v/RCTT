import { useState } from "react"


import 'bootstrap/dist/css/bootstrap.css';

export default function Counter() {

    const [counter, setCounter] = useState(0)

    const handleChangeIncrement = () => {
        setCounter(prev => prev + 1)

    }
    const handleChangeDencrement = () => {
        if (counter > 0) {
            setCounter(prev => prev - 1)
        } else {
            setCounter(0)
        }
    }

    const handleChangeRestare = () => {
        setCounter(0)
    }

    const butn = "btn btn-primary mx-5 px-5"

    return (
        <div className="container" >
            <button className={butn} onClick={handleChangeIncrement}> Incerement</button>
            <button className={butn} onClick={handleChangeDencrement}>Deincerement</button>
            <button className={butn} onClick={handleChangeRestare}>Restart</button>
            <br />
            <fieldset className="bg-warning">
                you Have clicked {counter} times
            </fieldset>

        </div >
    )
}