import { Injectable } from "@angular/core";
import { EneType } from "../_models/types.model";
import { Skills } from "./skill.service";

const Types : EneType[] = [
    { id : 1, wing: [9,2], int: 7, desint: 4, core: Skills[2], instinct: 'sp'},
    { id : 2, wing: [1,3], int: 4, desint: 8, core: Skills[5], instinct: 'sx'},
    { id : 3, wing: [2,4], int: 6, desint: 9, core: Skills[6], instinct: 'so'},
    { id : 4, wing: [3,5], int: 1, desint: 2, core: Skills[3], instinct: 'sx'},
    { id : 5, wing: [4,6], int: 8, desint: 7, core: Skills[4], instinct: 'sx'},
    { id : 6, wing: [5,7], int: 9, desint: 3, core: Skills[8], instinct: 'so'},
    { id : 7, wing: [6,8], int: 5, desint: 1, core: Skills[1], instinct: 'sp'},
    { id : 8, wing: [7,9], int: 2, desint: 5, core: Skills[0], instinct: 'sp'},
    { id : 9, wing: [8,1], int: 3, desint: 6, core: Skills[7], instinct: 'so'},
]
@Injectable({
    providedIn: 'root'
})

export class EneTypeService {
    constructor() {}

    public getEneTypeAll() {
        return Types;
    }

    public getWingById(idType) {
        let wings = Types.filter(type => idType === type.id);
        return wings[0].wing;
    }

}