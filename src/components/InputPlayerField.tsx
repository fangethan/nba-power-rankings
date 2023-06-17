import '../styles/style.css';
import React from 'react' 

export const InputPlayerField = () => {

    return (
        <form className="player_input"> 
            <input type="input" placeholder="Enter a player's name" className="player_input_box" />
            <button className="player_input_submit" type="submit">Go</button>
        </form> 
    )
}

export default InputPlayerField;
