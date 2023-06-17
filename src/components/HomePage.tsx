import React, { useState } from 'react' 
import InputPlayerField from './InputPlayerField'
import PlayerList from './PlayerList'

export const HomePage = () => {
    const [playerName, setplayerName] = useState("")


    return (
        <div>
            <h2>NBA Power Rankings</h2>
            <InputPlayerField />
            <PlayerList />
        </div>
    )
}

export default HomePage;