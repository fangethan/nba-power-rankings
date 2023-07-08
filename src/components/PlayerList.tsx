import React, { useState, useEffect } from 'react' 
import { PlayerModel } from '../PlayerModel'
import { SinglePlayer } from './PlayerDetails'
import {Link} from "react-router-dom"
import {AiFillDelete} from "react-icons/ai"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const teamLogos = [
    require("../images/team_logos/atl_hawks_logo.png"),
    require("../images/team_logos/boston_logo.png"),
    require("../images/team_logos/brooklyn_logo.png"),
    require("../images/team_logos/charlotte_logo.png"),
    require("../images/team_logos/chicago_logo.png"),
    require("../images/team_logos/cavs_logo.png"),
    require("../images/team_logos/dallas_logo.png"),
    require("../images/team_logos/denver_logo.png"),
    require("../images/team_logos/detroit_logo.png"),
    require("../images/team_logos/warriors_logo.png"),
    require("../images/team_logos/rockets_logo.png"),
    require("../images/team_logos/pacers_logo.png"),
    require("../images/team_logos/clippers_logo.png"),
    require("../images/team_logos/lakers_logo.png"),
    require("../images/team_logos/memphis_logo.png"),
    require("../images/team_logos/miami_logo.png"),
    require("../images/team_logos/bucks_logo.png"),
    require("../images/team_logos/timberwolves_logo.png"),
    require("../images/team_logos/pelicans_logo.png"),
    require("../images/team_logos/knicks_logo.png"),
    require("../images/team_logos/okc_logo.png"),
    require("../images/team_logos/magic_logo.png"),
    require("../images/team_logos/76ers_logo.png"),
    require("../images/team_logos/suns_logo.png"),
    require("../images/team_logos/blazers_logo.png"),
    require("../images/team_logos/kings_logo.png"),
    require("../images/team_logos/spurs_logo.png"),
    require("../images/team_logos/raptors_logo.png"),
    require("../images/team_logos/jazz_logo.png"),
    require("../images/team_logos/wizards_logo.png"),
];

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
                                <AiFillDelete className='delete_icon' onClick={() => handleDeletePlayer(player.id)} />
                                <img className='team_logo' src={teamLogos[29]} alt="team_logo" />
                                <Link to={`/player/${player.id}`} onClick={() => handlePlayerClick(player)}>
                                  <h2>{player.name}</h2>
                                  <p>{player.team_name}</p>
                                </Link>
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

 