import { useEffect, useState } from "react";
import { PlayerModel } from "../PlayerModel";

const useDelete = (
  id: string,
  initialPlayerRankings: PlayerModel[] | (() => PlayerModel[]),
) => {
  const [playerPowerRankings, setPlayerPowerRankings] = useState(
    initialPlayerRankings,
  );

  const deletePlayer = (id: string) => {
    const updatedRankings = playerPowerRankings.filter(
      (player) => player.id !== id,
    );
    setPlayerPowerRankings(updatedRankings);
  };

  return { playerPowerRankings, deletePlayer };
};

export default useDelete;
