export interface PlayerModel {
    id: string;
    name: string;
    team_name: string;
    position: string;
    height: string;
    stats: PlayerStats | undefined;
    onList: boolean;
}

export interface PlayerStats {
    points: number;
    rebounds: number;
    assists: number;
}