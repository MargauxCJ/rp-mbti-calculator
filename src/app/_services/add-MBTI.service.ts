import { Injectable } from '@angular/core';
import { EneTypeService } from './type.service';
import { SkillService } from './skill.service';
import { CategoryService } from './category.service';

const MBTI = [
    { name: 'INTJ', dom: 'N', aux: 'T', ter: 'F', inf: 'S', inex: 'i' },
    { name: 'INTP', dom: 'T', aux: 'N', ter: 'S', inf: 'F', inex: 'i' },
    { name: 'ENTJ', dom: 'T', aux: 'N', ter: 'S', inf: 'F', inex: 'e' },
    { name: 'ENTP', dom: 'N', aux: 'T', ter: 'F', inf: 'S', inex: 'e' },
    { name: 'INFJ', dom: 'N', aux: 'F', ter: 'T', inf: 'S', inex: 'i' },
    { name: 'INFP', dom: 'F', aux: 'N', ter: 'S', inf: 'T', inex: 'i' },
    { name: 'ENFJ', dom: 'F', aux: 'N', ter: 'S', inf: 'T', inex: 'e' },
    { name: 'ENFP', dom: 'N', aux: 'F', ter: 'T', inf: 'S', inex: 'e' },
    { name: 'ISTJ', dom: 'S', aux: 'T', ter: 'F', inf: 'N', inex: 'i' },
    { name: 'ISFJ', dom: 'S', aux: 'F', ter: 'T', inf: 'N', inex: 'i' },
    { name: 'ESTJ', dom: 'T', aux: 'S', ter: 'N', inf: 'F', inex: 'e' },
    { name: 'ESFJ', dom: 'F', aux: 'S', ter: 'N', inf: 'T', inex: 'e' },
    { name: 'ISTP', dom: 'T', aux: 'S', ter: 'N', inf: 'F', inex: 'i' },
    { name: 'ISFP', dom: 'F', aux: 'S', ter: 'N', inf: 'T', inex: 'i' },
    { name: 'ESTP', dom: 'S', aux: 'T', ter: 'F', inf: 'N', inex: 'e' },
    { name: 'ESFP', dom: 'S', aux: 'F', ter: 'T', inf: 'N', inex: 'e' },
]

@Injectable({
    providedIn: 'root'
})
export class AddMBTIService {

    /* SCORE ADDITION */
    scoreDom: number = 12;
    scoreAux: number = 9;
    scoreTer: number = 6;
    scoreInf: number = 3;
    scoreInex: number = 24;

    constructor(
        public eneTypeService: EneTypeService,
        public skillService: SkillService,
        public categoryService: CategoryService,) {
    }

    public getMBTIAll() {
        return MBTI;
    }

    public getMBTIByName(name) {
        let mb = MBTI.filter(mbt => mbt.name === name);
        return mb[0];
    }

    public MBTICalculator(formValues) {
        this.addDomScore(formValues);
        this.addAuxScore(formValues);
        this.addTerScore(formValues);
        this.addInfScore(formValues);
        this.addinexScore(formValues);
    }

    addDomScore(formValues) {
        this.addScore(formValues, 'dom', this.scoreDom);
    }

    addAuxScore(formValues) {
        this.addScore(formValues, 'aux', this.scoreAux);
    }
    addTerScore(formValues) {
        this.addScore(formValues, 'ter', this.scoreTer);
    }
    addInfScore(formValues) {
        this.addScore(formValues, 'inf', this.scoreInf);
    }

    addinexScore(formValues) {
        let mbtiSelected = this.getMBTIByName(formValues.mbti);
        let category = this.categoryService.getAllCategories();
        let physiqueSkills = category[0].skills;
        let mentalSkills = category[1].skills;
        let socialSkills = category[2].skills;
        let allSkills = this.skillService.getSkillsAll();
        switch (true) {
            case (mbtiSelected.dom === "S" && mbtiSelected.inex === 'i'): {
                let max = Math.max(physiqueSkills[0].score, physiqueSkills[1].score, physiqueSkills[2].score);
                physiqueSkills.forEach(e => {
                    if(e.score !== max){
                        e.score = e.score + (this.scoreInex/2)
                    }
                })
                break;
            }
            case (mbtiSelected.dom === "S" && mbtiSelected.inex === 'e'): {
                let max = Math.max(physiqueSkills[0].score, physiqueSkills[1].score, physiqueSkills[2].score);
                physiqueSkills.forEach(e => {
                    let i = 'false';
                    if(e.score === max && i !== 'true') {
                        e.score = e.score + (this.scoreInex);
                        i = 'true';
                    }
                })
                break;
            }
            case (mbtiSelected.dom === "N" && mbtiSelected.inex === 'i'): {
                allSkills.sort((a,b) => a.score - b.score);
                allSkills[7].score = allSkills[7].score + this.scoreInex;
                break;
            }

            case (mbtiSelected.dom === "N" && mbtiSelected.inex === 'e'): {
                physiqueSkills.sort((a,b) => a.score-b.score);
                mentalSkills.sort((a,b) => a.score-b.score);
                socialSkills.sort((a,b) => a.score-b.score);
                physiqueSkills[2].score = physiqueSkills[2].score + (this.scoreInex/3);
                mentalSkills[2].score = mentalSkills[2].score + (this.scoreInex/3);
                socialSkills[2].score = socialSkills[2].score + (this.scoreInex/3); 
                break;
            }
            case (mbtiSelected.dom === "F" && mbtiSelected.inex === 'i'): {
                let max = Math.max(socialSkills[0].score, socialSkills[1].score, socialSkills[2].score);
                socialSkills.forEach(e => {
                    let i = 'false';
                    if(e.score === max && i !== 'true') {
                        e.score = e.score + (this.scoreInex);
                        i = 'true';
                    }
                })
                break;
            }
            case (mbtiSelected.dom === "F" && mbtiSelected.inex === 'e'): {
                let max = Math.min(socialSkills[0].score, socialSkills[1].score, socialSkills[2].score);
                socialSkills.forEach(e => {
                    let i = 'false';
                    if(e.score === max && i !== 'true') {
                        e.score = e.score + (this.scoreInex);
                        i = 'true';
                    }
                })
                break;
            }
            case (mbtiSelected.dom === "T" && mbtiSelected.inex === 'i'): {
                let max = Math.max(mentalSkills[0].score, mentalSkills[1].score, mentalSkills[2].score);
                let min = Math.min(mentalSkills[0].score, mentalSkills[1].score, mentalSkills[2].score);
                if(min === max) {
                    mentalSkills[0].score = mentalSkills[0].score + this.scoreInex;
                } else {
                    mentalSkills.forEach(e => {
                        if(e.score !== max && e.score !== min) {
                            e.score = e.score + (this.scoreInex);
                        }
                    })
                }
                break;
            }
            case (mbtiSelected.dom === "T" && mbtiSelected.inex === 'e'): {
                let max = Math.max(mentalSkills[0].score, mentalSkills[1].score, mentalSkills[2].score);
                let min = Math.min(mentalSkills[0].score, mentalSkills[1].score, mentalSkills[2].score);
                if(min === max) {
                    mentalSkills[0].score = mentalSkills[0].score + (this.scoreInex/2);
                    mentalSkills[2].score = mentalSkills[2].score + (this.scoreInex/2);
                } else {
                    mentalSkills.forEach(e => {
                        if(e.score === max || e.score === min) {
                            e.score = e.score + (this.scoreInex/2);
                        }
                    })
                }
                break;
            }
        }
    }


    addScore(formValues, func, score) {
        let mbtiSelected = this.getMBTIByName(formValues.mbti)
        let wichFunc;

        switch (func) {
            case 'dom':
                wichFunc = mbtiSelected.dom;
                break;
            case 'aux':
                wichFunc = mbtiSelected.aux;
                break;
            case 'ter':
                wichFunc = mbtiSelected.ter;
                break;
            case 'inf':
                wichFunc = mbtiSelected.inf;
                break;

        }
        switch (wichFunc) {
            case 'S': {
                this.addTocategory(score, 'physique');
                break;
            };
            case 'T': {
                this.addTocategory(score, 'mental');
                break;
            };
            case 'F': {
                this.addTocategory(score, 'social');
                break;
            };
            case 'N': {
                this.addTocategory((score / 3), 'physique');
                this.addTocategory((score / 3), 'mental');
                this.addTocategory((score / 3), 'social');
                break;
            }
        }
    }

    addTocategory(score, category) {
        this.categoryService.getAllCategories().forEach(cat => {
            if (cat.name === category) {
                cat.skills.forEach(skill => {
                    skill.score = skill.score + score;
                })
            }
        });
    }
}