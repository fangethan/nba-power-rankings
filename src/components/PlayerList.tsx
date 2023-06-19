import React from 'react'
import { PlayerModel } from '../PlayerModel'
import { SinglePlayer } from './SinglePlayer'

interface PlayerListProps {
    players: PlayerModel[]
}

export const PlayerList: React.FC<PlayerListProps> = ({players}) => {
    return (
        <div className="player_list">
            {players.map((player) => (
                <div className="player-preview" key={player.id} >
                    <SinglePlayer 
                        player={player}
                        />
                </div>
            ))}
        </div>
    )
}

 