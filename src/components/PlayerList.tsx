import React, { useState, useEffect } from 'react' 
import { PlayerModel } from '../PlayerModel'
import { SinglePlayer } from './PlayerDetails'
import {Link} from "react-router-dom"
import {AiFillDelete} from "react-icons/ai"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface PlayerListProps {
    players: PlayerModel[]
}

export const PlayerList: React.FC<PlayerListProps> = ({players}) => {
    const [isPopUpOpen, setisPopUpOpen] = useState(false);
    const [selectedPlayer, setselectedPlayer] = useState<PlayerModel | undefined>(undefined);
    const [position, setPosition] = useState(players)

    const handlePlayerClick = (player: PlayerModel) => {
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

    const handleOnDragEnd = (result: any) => {
        if (!result.destination) return;

        const items = Array.from(position);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setPosition(items);
    }

    useEffect(() => {
        setPosition(players);
      }, [players]);

    return (
        <div className="player_list">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="players-1">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {position.map((player, index) => (
                            <Draggable key={player.id} draggableId={player.id} index={index}>
                            {(provided) => (
                              <div
                                className="player-preview"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Link to={`/player/${player.id}`} onClick={() => handlePlayerClick(player)}>
                                  <h2>{player.name}</h2>
                                  <p>{player.team_name}</p>
                                </Link>
                                <span className="icon" onClick={() => handleDeletePlayer(player.id)}>
                                  <AiFillDelete />
                                </span>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}   
                </Droppable>
            </DragDropContext>
            {isPopUpOpen && selectedPlayer && <SinglePlayer player={selectedPlayer}/>}
        </div>
    )
}

 