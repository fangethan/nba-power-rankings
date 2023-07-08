import React, { useState } from 'react' 
import {InputPlayerField} from './InputPlayerField'
import {PlayerList} from './PlayerList'
import { PlayerModel, PlayerStats } from '../PlayerModel'
import nbaLogo from "../images/nba_logo.png"

const { v4: uuidv4 } = require('uuid');

export const HomePage = () => {
    const [playerName, setplayerName] = useState("")
    const [playerPowerRankings, setplayerPowerRankings] = useState<PlayerModel[]>([])

    const handleAddPlayer = (e: React.FormEvent) => {
        e.preventDefault();

        if (playerName){
            fetch(`https://www.balldontlie.io/api/v1/players?search=${playerName}`).then(async (res) => {
                const data = await res.json();
                if (data.data[0] === undefined) {
                    alert("This player is either injured or hasn't played yet!");
                } else if (data.data.length > 1) {
                    alert("Please specify the name more!");
                } else {          
                    const playerFullName = data.data[0].first_name + " " + data.data[0].last_name
                    const isDuplicate = playerPowerRankings.some((player: PlayerModel) => {
                        return player.name === playerFullName;
                    });
                    
                    if (isDuplicate) {
                        alert(`${playerFullName} is already in the power rankings`);
                    } else {
                        setplayerName(playerFullName)
                        setplayerPowerRankings([...playerPowerRankings, 
                            {
                                id: uuidv4(), 
                                name: playerFullName, 
                                team_name: data.data[0].team.full_name,
                                position: data.data[0].position,
                                height: data.data[0].height_feet + "'" + data.data[0].height_inches,
                                weight: data.data[0].weight_pounds + "lbs",
                                stats: await getPlayerStats(data.data[0].id),
                                onList: true, 
                            }])
                        setplayerName("")
                    }
                }
                }).catch((err) => {
                    console.log(err);
            });
        }
    }

    const getPlayerStats = async (id: number): Promise<PlayerStats | undefined> => {
        try {
          const response = await fetch(
            `https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${id}`
          );
          const playerData = await response.json();
          return playerData.data[0];
        } catch (err) {
          console.log(err);
          return undefined;
        }
    };

    return (
        <div>
            <div className='title'>
                <span className='logo_container'>
                    <img className='logo_image' src={nbaLogo} alt="Nbalogo"  />
                </span>
                <h2>NBA Power Rankings</h2>
            </div>
            <br />
            <InputPlayerField playerName={playerName} setplayerName={setplayerName} handleAddPlayer={handleAddPlayer} />
            {playerPowerRankings && <PlayerList players={playerPowerRankings} />}
        </div>
    )
}

export default HomePage;