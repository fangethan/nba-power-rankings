export interface PlayerModel {
    id: string;
    name: string;
    team_name: string;
    position: string;
    height: string;
    weight: string;
    stats: PlayerStats | undefined;
    onList: boolean;
}

export interface PlayerStats {
    points: number;
    rebounds: number;
    assists: number;
    steals: number;
    blocks: number;
    fgPercentage: number;
    threePointPercentage: number;
    freeThrowsPercentage: number;
    turnovers: number;
    minutes: number;
    games_played: number;
}