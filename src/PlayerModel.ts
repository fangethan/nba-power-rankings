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
    pts: number;
    reb: number;
    ast: number;
    stl: number;
    blk: number;
    fg_pct: number;
    fg3_pct: number;
    ft_pct: number;
    turnover: number;
    min: string;
    games_played: number;
}