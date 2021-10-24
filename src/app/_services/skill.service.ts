import { Injectable } from "@angular/core";
import { Skill } from "../_models/skills.model";
export const Skills: Skill[] = [
    {id: 1, name: 'force', score: 30, wing: []},
    {id: 2, name: 'dexterite', score: 30, wing: []},
    {id: 3, name: 'endurance', score: 30, wing: []},
    {id: 4, name: 'chance', score: 30, wing: []},
    {id: 5, name: 'intellect', score: 30, wing: []},
    {id: 6, name: 'sagesse', score: 30, wing: []},
    {id: 7, name: 'charisme', score: 30, wing: []},
    {id: 8, name: 'discretion', score: 30, wing: []},
    {id: 9, name: 'negociation', score: 30, wing: []},
]
@Injectable({
    providedIn: 'root'
})

export class SkillService {}