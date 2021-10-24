import { Skill } from "./skills.model";

export interface Category {
    id: number;
    name: string;
    skills: Skill[];
    instinct: string;
}

