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
  public result;

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
      'tritype': [null],
      'instinct': [null],
      validate: ''
    });
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  test() {
    console.log(this.eneTypeService.getWingById(1));
  }

  onSubmit(formValues) {
    console.log(formValues);
    console.log(this.result);
    this.addCore(formValues.type); 
  }

  addCore(formValuesType) {
    this.eneTypeService.getEneTypeAll().forEach(type => {
      if(formValuesType === type.id){
        console.log(type.id);
        type.core.score = type.core.score + 5;
        console.log(type.core);  
      }
    })
  }
}
