import { Component, OnInit } from '@angular/core';
import { EneTypeService } from 'src/app/_services/type.service';
import { SkillService } from 'src/app/_services/skill.service';
import { CategoryService } from 'src/app/_services/category.service';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public formGroup: FormGroup;
  public selectedType: number = 1;
  public selectedWing: number = 1;
  public selectedTritype1: number = null;
  public result;
  
  
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
    public categoryService: CategoryService,
    private formBuilder: FormBuilder) { 
    }

  ngOnInit(): void {
    this.createForm();
    this.result = this.categoryService.getAllCategories();
  }

  public createForm() {
    this.formGroup = this.formBuilder.group({
      'type': [null],
      'wing': [null],
      'tritype1': [null],
      'tritype2': [null],
      'tritype3': [null],
      'instinct1': [null],
      'instinct2': [null],
      validate: ''
    });
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  test() {
    //console.log(this.selectedWing);
  }

  onSubmit(formValues) {
    // this.randMix();
    this.addCore(formValues.type); 
    this.addWing(formValues);
    this.addTritype2(formValues);
    this.addTritype3(formValues);

  }

  randMix() {
    this.result.forEach(category => {
      /* CODE RAND HERE */
    });
    let array = [0,1,2];
      let random = Math.floor(Math.random()* array.length);
      random = Math.floor(Math.random() * array.length);
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

displayTritype(selectedType, tab) {
  
  if(selectedType === 1 || selectedType === 8 || selectedType === 9){
    this.removeItemAll(tab, 1);
    this.removeItemAll(tab, 8);
    this.removeItemAll(tab, 9);
  }

  if(selectedType === 2 || selectedType === 3 || selectedType === 4){
    this.removeItemAll(tab, 2);
    this.removeItemAll(tab, 3);
    this.removeItemAll(tab, 4);
  }

  if(selectedType === 5 || selectedType === 6 || selectedType === 7){
    this.removeItemAll(tab, 5);
    this.removeItemAll(tab, 6);
    this.removeItemAll(tab, 7);
  }
  return tab;
}

displayLastTritype(){
  return this.displayTritype(this.selectedType,this.displayTritype(this.selectedTritype1, [1,2,3,4,5,6,7,8,9]));
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




  removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }
}
