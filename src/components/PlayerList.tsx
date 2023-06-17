import React from 'react'
import { PlayerModel } from '../PlayerModel'
import {Link} from "react-router-dom"

interface PlayerListProps {
    players: PlayerModel[]
}

export const PlayerList: React.FC<PlayerListProps> = ({players}) => {
    return (
        <div className="player_list">
            {players.map((player) => (
                <div className="player-preview" key={player.id} >
                    <h2>{ player.name }</h2>
                </div>
            ))}
        </div>
    )
}

