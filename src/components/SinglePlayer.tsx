import React from 'react'
import {Link} from "react-router-dom"
import {AiFillDelete} from "react-icons/ai"

interface SinglePlayerProps {
    name: string;
    id: string;
}

export const SinglePlayer: React.FC<SinglePlayerProps> = ({name, id}) => {
    
    const handleDeletePlayer = (id: string) => {
        console.log(id)
    }

    return (
        <div className="single_player">
            <Link to={`/player/${id}`}>
                <h2>{name}</h2>
                <p>New York Knicks</p>
            </Link>
            <span className="icon" onClick={() => handleDeletePlayer(id)}>
                <AiFillDelete/>
            </span>
        </div>
    )
}
