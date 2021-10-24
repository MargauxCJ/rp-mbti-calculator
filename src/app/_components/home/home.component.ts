import { Component, OnInit } from '@angular/core';
import { EneTypeService } from 'src/app/_services/type.service';
import { SkillService } from 'src/app/_services/skill.service';
import { CategoryService } from 'src/app/_services/category.service';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { AddEneagrammeService } from 'src/app/_services/add-eneagramme.service';
import { AddMBTIService } from 'src/app/_services/add-MBTI.service';
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
  public selectedInstinct1: string = '';
  public result;
  
  constructor(
    public eneTypeService: EneTypeService,
    public skillService: SkillService,
    public categoryService: CategoryService,
    public addEneagrammeService: AddEneagrammeService,
    public addMBTIService: AddMBTIService,
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
      'mbti': [null],
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
    this.addEneagrammeService.eneagrammeCalculator(formValues);
    this.addMBTIService.MBTICalculator(formValues)

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


displayInstinct(selectedInstinct) {
  let tab = ['so', 'sp', 'sx'];
  if(selectedInstinct === 'so'){
    tab = tab.filter(res => res !== 'so');
  }
  if(selectedInstinct === 'sp'){
    tab = tab.filter(res => res !== 'sp');
  }
  if(selectedInstinct === 'sx'){
    tab = tab.filter(res => res !== 'sx');
  }
  return tab;
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
