import React, { useState, useEffect } from 'react' 
import {InputPlayerField} from './InputPlayerField'
import {PlayerList} from './PlayerList'
import { PlayerModel } from '../PlayerModel'
const { v4: uuidv4 } = require('uuid');


export const HomePage = () => {
    const [playerName, setplayerName] = useState("")
    const [playerPowerRankings, setplayerPowerRankings] = useState<PlayerModel[]>([])
    
    const handleAddPlayer = (e: React.FormEvent) => {
        e.preventDefault();

        if (playerName) {
            setplayerPowerRankings([...playerPowerRankings, {id: uuidv4(), playerName, onList: true }])
            setplayerName("")
        }

    }

    useEffect(() => {
        console.log(playerPowerRankings);
    }, [playerPowerRankings]);

    // const data = fetch(`https://www.balldontlie.io/api/v1/players?search=${playerName}`)

    return (
        <div>
            <h2>NBA Power Rankings</h2>
            <InputPlayerField playerName={playerName} setplayerName={setplayerName} handleAddPlayer={handleAddPlayer} />
            <PlayerList />
        </div>
    )
}

export default HomePage;