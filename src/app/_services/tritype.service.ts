import { Injectable } from "@angular/core";

const Tritrype = [
    {t1 : 8, t2 : 9, t3: 1},
    {t1 : 2, t2 : 3, t3: 4},
    {t1 : 5, t2 : 6, t3: 7},
]

@Injectable({
    providedIn: 'root'
})

export class TritypeService {
    constructor() {

    }

    public getTritypeList1(type1) {
        let tab = [8,9,1,2,3,4,5,6,7];

        Tritrype.forEach(t => {
            if(type1 == t.t1 || type1 == t.t2 || type1 == t.t3) {
                console.log('coucou');
                
            }
        })
    }
}