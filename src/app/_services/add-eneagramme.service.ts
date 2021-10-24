import { Injectable } from '@angular/core';
import { EneTypeService } from './type.service';
import { SkillService } from './skill.service';
import { CategoryService } from './category.service';
@Injectable({
  providedIn: 'root'
})
export class AddEneagrammeService {

      /* SCORE ADDITION */
  public coreScore = 45;
  public wingScore = 25;
  public tritype2Score = 25;
  public tritype3Score = 15;
  public instinctDom = 10;
  public instinctBlind = -10;

  constructor(
    public eneTypeService: EneTypeService,
    public skillService: SkillService,
    public categoryService: CategoryService,) { 
    }


    public eneagrammeCalculator(formValues) {
    this.addCore(formValues.type); 
    this.addWing(formValues);
    this.addTritype2(formValues);
    this.addTritype3(formValues);
    this.addInstinct(formValues);
    this.removeInstinct(formValues);
    }

    
      addCore(formValuesType) {
        this.eneTypeService.getEneTypeAll().forEach(type => {
          if(formValuesType === type.id){
            type.core.score = type.core.score + this.coreScore;
          }
        })
      }
    
      addWing(formValues) {
        this.eneTypeService.getEneTypeAll().forEach(type => {
          if(formValues.wing === type.id){
            type.core.score = type.core.score + this.wingScore;
            }
          }
          
        )
      }

      
addInstinct(formValues) {
    this.eneTypeService.getEneTypeAll().forEach(type => {
      if(formValues.instinct1 === type.instinct) {
        type.core.score = type.core.score + this.instinctDom;
      }    
    });
  }
  
  removeInstinct(formValues) {
    this.eneTypeService.getEneTypeAll().forEach(type => {
      if(formValues.instinct2 !== type.instinct && formValues.instinct1 !== type.instinct) {
        type.core.score = type.core.score + this.instinctBlind;
      }    
    });
  }
  
    addTritype2(formValues) {
      this.eneTypeService.getEneTypeAll().forEach(type => {
        if(formValues.tritype2 === type.id) {
          type.core.score = type.core.score + this.tritype2Score;
        }
      })
  
    }
  
    addTritype3(formValues) {
      this.eneTypeService.getEneTypeAll().forEach(type => {
        if(formValues.tritype3 === type.id) {
          type.core.score = type.core.score + this.tritype3Score;
        }
      })
    }
}