import React from 'react'
import {Link} from "react-router-dom"

interface SinglePlayerProps {
    name: string;
    id: string;
}

export const SinglePlayer: React.FC<SinglePlayerProps> = ({name, id}) => {
    return (
        <div className="single_player">
            <h2>{name}</h2>
            <h2>{id}</h2>
        </div>
    )
}
