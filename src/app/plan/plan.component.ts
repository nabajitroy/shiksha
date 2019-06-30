import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl,Validator, Validators } from '@angular/forms';
 

@Component({
  selector: 'plan',
  templateUrl: './plan.component.html', 
  styleUrls:    ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  planForm: FormGroup;
  ipForm: FormGroup;
  ipPattern : string ='^(?=.*[^\.]$)((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$';
  ngOnInit() {

    this.planForm = this.fb.group({
      planName: ['Basic'],
    })

     this.ipForm = this.fb.group({
      ips: this.fb.array([
        this.fb.group({ip:['',Validators.required,Validators.pattern(this.ipPattern) ]})
      ])
    })
  }

  get ips() {
   
    return this.ipForm.get('ips') as FormArray;
  }

 

  addIp(pointIndex) {
     console.log(this.ipForm.get('ips').value.length);
   
    if(this.planForm.get('planName').value ==='basic' && this.ipForm.get('ips').value.length<5){
      this.ips.push(this.fb.group({ip:['',Validators.required,Validators.pattern(this.ipPattern)]}));
    } else if (this.planForm.get('planName').value ==='premium' && this.ipForm.get('ips').value.length<10){
      this.ips.push(this.fb.group({ip:['',Validators.required,Validators.pattern(this.ipPattern)]}));
     }
  }

  deleteIp(index) {
   // console.log(index);
    this.ips.removeAt(index);
  }
  
  submitPlan(){
    console.log( this.planForm.value);
  }



  //////////// End ////////////////////
}