import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() department: string;
  formAdd: FormGroup;
  disabled = false;

  @Output() onAddWorker = new EventEmitter<{}>();

  constructor() { }

  ngOnInit(){
    this.formAdd = new FormGroup({
      firstName: new FormControl({value: "", disabled: this.disabled}, [Validators.required]),
      middleName: new FormControl({value: "", disabled: this.disabled}, [Validators.required]),
      lastName: new FormControl({value: "", disabled: this.disabled}, [Validators.required]),
      birthDay: new FormControl({value: "", disabled: this.disabled}, [Validators.required]),
      email: new FormControl({value: "", disabled: this.disabled}, [Validators.required, Validators.pattern('^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$')]),
      phone: new FormControl({value: "", disabled: this.disabled}, [Validators.required]),
    })
  }

  onAdd(){
    // this.formAdd.value.birthDay = this.makeDate(this.formAdd.value.birthDay)
    this.onAddWorker.emit(this.formAdd.value);
  }

  // makeDate(str: string){
  //   let newStr;
  //   newStr = `${str.slice(0,2)}.${str.slice(2,4)}.${str.slice(4,8)}`
  //   return newStr;
  // }
}
