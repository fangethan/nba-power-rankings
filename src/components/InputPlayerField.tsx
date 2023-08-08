import "../styles/style.css";
import React, { useRef } from "react";

interface InputPlayerFieldProps {
  playerName: string;
  setplayerName: React.Dispatch<React.SetStateAction<string>>;
  handleAddPlayer: (e: React.FormEvent) => void;
}

export const InputPlayerField: React.FC<InputPlayerFieldProps> = ({
  playerName,
  setplayerName,
  handleAddPlayer,
}) => {
  const playerInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="player_input_container">
      <form
        className="player_input"
        onSubmit={(e) => {
          handleAddPlayer(e);
          playerInputRef.current?.blur();
        }}
      >
        <input
          ref={playerInputRef}
          type="input"
          value={playerName}
          onChange={(e) => setplayerName(e.target.value)}
          placeholder="Enter a player's name"
          className="player_input_box"
        />
        <button className="player_input_submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};
