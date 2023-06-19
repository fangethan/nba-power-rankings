import React from 'react'
import {Link} from "react-router-dom"
import {AiFillDelete} from "react-icons/ai"
import { PlayerModel } from '../PlayerModel'

interface SinglePlayerProps {
    player: PlayerModel
}

export const SinglePlayer: React.FC<SinglePlayerProps> = ({player}) => {
    
    const handleDeletePlayer = (id: string) => {
        fetch("http://localhost:3000/players/" + id, {
            method: "DELETE",
        }).then(() => {
            console.log("Player " + id + " deleted")
        })
    }

    return (
        <div className="single_player">
            <Link to={`/player/${player.id}`}>
                <h2>{player.name}</h2>
                <p>{player.team_name}</p>
            </Link>
            <span className="icon" onClick={() => handleDeletePlayer(player.id)}>
                <AiFillDelete/>
            </span>
        </div>
    )
}
