import {useState} from 'react'

const Header = (props) => {
    return (
        <h1>{props.text}</h1>
    )
}

const Button = (props) => {
    const {name, clickAction} = props

    return (
        <button onClick={clickAction}>{name}</button>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

    const handleNextAnecdoteClick = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const handleVote = () => {
        const votesCopy = [...votes]
        votesCopy[selected] = votesCopy[selected] + 1
        console.log("votes", votesCopy)
        setVotes(votesCopy)
    }

    return (
        <>
            <Header text="Anecdote of the day"/>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <Button name="vote" clickAction={handleVote}/>
            <Button name="next anecdote" clickAction={handleNextAnecdoteClick}/>
            <Header text="Anecdote with most votes"/>
            <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
        </>
    )
}

export default App