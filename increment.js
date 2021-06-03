const container = document.querySelector('.container')
const Incrementor = () => {
    const  [countValue,setCounter] = React.useState(0)
    console.log(setCounter)
    return (
        <div>
            <h1 className="countValue"> { countValue } </h1>
            <button className="incrementBtn btn" onClick={ () => setCounter( countValue + 1) }>Increase</button>
            <button className="decreaseBtn btn" onClick={ () => setCounter( countValue - 1) }>Decrease</button>
        </div>
    )
}

ReactDOM.render(<Incrementor />, container)