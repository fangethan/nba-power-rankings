import '../styles/style.css';
import React from 'react' 

interface InputPlayerFieldProps {
    playerName: string;
    setplayerName: React.Dispatch<React.SetStateAction<string>>;
    handleAddPlayer: (e: React.FormEvent) => void;
  }

export const InputPlayerField: React.FC<InputPlayerFieldProps> = ({playerName, setplayerName, handleAddPlayer}) => {

    return (
        <form className="player_input" onSubmit={handleAddPlayer}> 
            <input 
                type="input" 
                value={playerName} 
                onChange={(e)=>setplayerName(e.target.value)} 
                placeholder="Enter a player's name" 
                className="player_input_box" />
            <button className="player_input_submit" type="submit">Go</button>
        </form> 
    )
}
