import "../styles/style.css";
import React, { useRef } from "react";

type InputPlayerFieldProps = {
  playerName: string;
  setplayerName: React.Dispatch<React.SetStateAction<string>>;
  handleAddPlayer: (e: React.FormEvent) => void;
};

export const InputPlayerField: React.FC<InputPlayerFieldProps> = ({
  playerName,
  setplayerName,
  handleAddPlayer,
}) => {
  const playerInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="player-input-container">
      <form
        className="player-input"
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
          className="player-input-box"
        />
        <button className="player-input-submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};
