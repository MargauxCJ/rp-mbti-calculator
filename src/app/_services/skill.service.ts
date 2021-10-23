import { Injectable } from "@angular/core";
import { Skill } from "../_models/skills.model";
export const Skills: Skill[] = [
    {id: 1, name: 'force', score: 20},
    {id: 2, name: 'dexterite', score: 20},
    {id: 3, name: 'endurance', score: 20},
    {id: 4, name: 'chance', score: 20},
    {id: 5, name: 'intellect', score: 20},
    {id: 6, name: 'sagesse', score: 20},
    {id: 7, name: 'charisme', score: 20},
    {id: 8, name: 'discretion', score: 20},
    {id: 9, name: 'negociation', score: 20},
]
@Injectable({
    providedIn: 'root'
})

export class SkillService {}