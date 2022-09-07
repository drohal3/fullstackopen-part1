import {useState} from 'react'

const Button = (props) => {

    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const StatisticLine = (props) => {
    const {title, value} = props

    return (
        <p>{title}: {value}</p>
    )
}

const Statistics = (props) => {
    const {good, neutral, bad} = props;
    let all = good + neutral + bad

    return (all > 0) ? (
        <>
            <StatisticLine title="good" value={good}/>
            <StatisticLine title="neutral" value={neutral}/>
            <StatisticLine title="bad" value={bad}/>
            <StatisticLine title="all" value={all}/>
            <StatisticLine title="avg" value={all > 0 ? (good - bad) / all : 0}/>
            <StatisticLine title="positive" value={all > 0 ? good * 100 / all : 0}/>

        </>
    ) : (
        <p>No feedback given.</p>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button text="good" handleClick={() => setGood(good + 1)}/>
            <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
            <Button text="bad" handleClick={() => setBad(bad + 1)}/>
            <h1>Statistics</h1>
            <Statistics good = {good} neutral = {neutral} bad = {bad}/>
        </div>
    )
}

export default App