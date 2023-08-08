import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { PlayerModel } from "../PlayerModel";

interface SinglePlayerProps {
  player: PlayerModel;
  isPopUpOpen: boolean;
}

export const SinglePlayer: React.FC<SinglePlayerProps> = ({
  player,
  isPopUpOpen,
}) => {
  const handleDeletePlayer = (id: string) => {
    fetch("http://localhost:3000/players/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("Player " + id + " deleted");
    });
  };

  return (
    <div className="single_player_container">
      <h1>Popup</h1>
      <h2>{player.name}</h2>
      <p>
        {player.team_name}, {player.position}{" "}
      </p>
      <p>
        HT/WT: {player.height}, {player.weight}{" "}
      </p>
      <table>
        <tr>
          <th>GP</th>
          <th>MIN</th>
          <th>PTS</th>
          <th>FG%</th>
          <th>3P%</th>
          <th>FT%</th>
          <th>REB</th>
          <th>AST</th>
          <th>STL</th>
          <th>BLK</th>
          <th>TO</th>
        </tr>
        <tr>
          <td> {player.stats && player.stats.games_played} </td>
          <td> {player.stats && player.stats.min} </td>
          <td> {player.stats && player.stats.pts} </td>
          <td> {player.stats && (player.stats.fg_pct * 100).toFixed(1)} </td>
          <td> {player.stats && (player.stats.fg3_pct * 100).toFixed(1)} </td>
          <td> {player.stats && (player.stats.ft_pct * 100).toFixed(1)} </td>
          <td> {player.stats && player.stats.reb} </td>
          <td> {player.stats && player.stats.ast} </td>
          <td> {player.stats && player.stats.stl} </td>
          <td> {player.stats && player.stats.blk} </td>
          <td> {player.stats && player.stats.turnover} </td>
        </tr>
      </table>
      <button onClick={isPopUpOpen}></button>
      <span
        className="delete_icon"
        onClick={() => handleDeletePlayer(player.id)}
      >
        <AiFillDelete />
      </span>
    </div>
  );
};
