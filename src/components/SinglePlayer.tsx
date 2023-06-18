import React from 'react'
import {Link} from "react-router-dom"

interface SinglePlayerProps {
    name: string;
    id: string;
}

export const SinglePlayer: React.FC<SinglePlayerProps> = ({name, id}) => {
    return (
        <div className="single_player">
            <Link to={`/player/${id}`}>
                <h2>{name}</h2>
                <p>New York Knicks</p>
            </Link>
        </div>
    )
}
