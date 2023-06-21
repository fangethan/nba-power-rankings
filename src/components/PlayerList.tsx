import React, { useState } from 'react' 
import { PlayerModel } from '../PlayerModel'
import { SinglePlayer } from './SinglePlayer'
import {Link} from "react-router-dom"
import {AiFillDelete} from "react-icons/ai"


interface PlayerListProps {
    players: PlayerModel[]
}

export const PlayerList: React.FC<PlayerListProps> = ({players}) => {
    const [isPopUpOpen, setisPopUpOpen] = useState(false);
    const [selectedPlayer, setselectedPlayer] = useState<PlayerModel | undefined>(undefined);

    const handlePlauyerClick = (player: PlayerModel) => {
        setisPopUpOpen(true)
        setselectedPlayer(player)
    }

    const handleDeletePlayer = (id: string) => {
        fetch("http://localhost:3000/players/" + id, {
            method: "DELETE",
        }).then(() => {
            console.log("Player " + id + " deleted")
        })
    }

    return (
        <div className="player_list">
            {players.map((player) => (
                <div className="player-preview" key={player.id} >
                    <Link to={`/player/${player.id}`} onClick={() => handlePlauyerClick(player)} >
                        <h2>{player.name}</h2>
                        <p>{player.team_name}</p>
                    </Link>
                    <span className="icon" onClick={() => handleDeletePlayer(player.id)}>
                        <AiFillDelete/>
                    </span>
                </div>
            ))}
            {isPopUpOpen && selectedPlayer && <SinglePlayer player={selectedPlayer}/>}
        </div>
    )
}

 