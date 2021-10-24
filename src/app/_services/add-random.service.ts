import { Injectable } from '@angular/core';
import { EneTypeService } from './type.service';
import { SkillService } from './skill.service';
import { CategoryService } from './category.service';
@Injectable({
  providedIn: 'root'
})
export class AddRandomService {
    public category : any;
    public physiqueSkills : any;;
    public mentalSkills : any;;
    public socialSkills : any;;
    public allSkills : any;;

    public scoreRand: number = 10;

  constructor(
    public eneTypeService: EneTypeService,
    public skillService: SkillService,
    public categoryService: CategoryService,) {
        this.category = this.categoryService.getAllCategories();
        this.allSkills = this.skillService.getSkillsAll();
        this.physiqueSkills = this.category[0].skills;
        this.mentalSkills = this.category[1].skills;
        this.socialSkills = this.category[2].skills;
    }


    public randomSkillsForAll() {
        this.randomMentalSkills();
        this.randomPhysiqueSkills;
        this.randomSocialSkills();
    }

    public randomPhysiqueSkills() {
        let turn = [0,1,2];
        turn.forEach(() =>{
        this.physiqueSkills[this.getRandomInt()].score += this.scoreRand;
        this.physiqueSkills[this.getRandomInt()].score -= this.scoreRand;
        });
    }

    public randomMentalSkills() {
        let turn = [0,1,2];
        turn.forEach(() =>{
        this.mentalSkills[this.getRandomInt()].score += this.scoreRand;
        this.mentalSkills[this.getRandomInt()].score -= this.scoreRand;
        });
    }
    public randomSocialSkills() {
        let turn = [0,1,2];
        turn.forEach(() =>{
        this.socialSkills[this.getRandomInt()].score += this.scoreRand;
        this.socialSkills[this.getRandomInt()].score -= this.scoreRand;
        });
    }

    public getRandomInt() {
        return Math.floor(Math.random() * 3);
    }
}

