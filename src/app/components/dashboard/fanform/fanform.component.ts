import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fancards } from 'src/app/shared/generic.service';

@Component({
  selector: 'app-fanform',
  templateUrl: './fanform.component.html',
  styleUrls: ['./fanform.component.css']
})
export class FanformComponent implements OnInit {

  constructor() { }

  @Output() closeform =new EventEmitter<boolean>()
  @Output() submitdata = new EventEmitter<fancards>()

  myform!:FormGroup;
  submitButtonDissabled:boolean=false;
 
  

  ngOnInit(): void {

  

    this.myform= new FormGroup({
    
    firstName:new FormControl(null,[Validators.required,Validators.minLength(5)]),
    lastName:new FormControl(null,[Validators.required,Validators.minLength(5)]),
    title:new FormControl(null,[Validators.required,Validators.maxLength(10)]),
    description:new FormControl(null,[Validators.required,Validators.maxLength(40)]),
    country:new FormControl(null,Validators.required),
    })

  }



  submitted()
  {
 
const data= this.myform.value as fancards
console.log(data,'this is the data')
this.submitdata.emit(data)



     this.myform.reset(
     )
    
  }


 
  terminateform()
  {   
    this.closeform.emit(false)
  }

  
}
