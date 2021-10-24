import { Skill } from "./skills.model";

export interface EneType {
    id: number;
    wing: number[];
    int: number;
    desint: number;
    core: Skill;
    instinct: string;
}
