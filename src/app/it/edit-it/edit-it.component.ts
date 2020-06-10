import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/services/http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-it',
  templateUrl: './edit-it.component.html',
  styleUrls: ['./edit-it.component.css']
})
export class EditItComponent implements OnInit {
  departament = "it";
  formEdit: FormGroup;
  disabled = false;
  worker;
  id: number;

  
  constructor(
    private http: HttpService,
    private router: Router,
    private activedRouter: ActivatedRoute,
  ) { 
      this.activedRouter.params.subscribe(param => 
      {
        this.id = param.id;
      })
  }

  ngOnInit(){
    this.getWorker().then(() => {
    this.formEdit = new FormGroup({
      firstName: new FormControl({value: this.worker.firstName, disabled: this.disabled}, [Validators.required]),
      middleName: new FormControl({value: this.worker.middleName, disabled: this.disabled}, [Validators.required]),
      lastName: new FormControl({value: this.worker.lastName, disabled: this.disabled}, [Validators.required]),
      birthDay: new FormControl({value: this.worker.birthDay, disabled: this.disabled}, [Validators.required]),
      email: new FormControl({value: this.worker.email, disabled: this.disabled}, [Validators.required, Validators.pattern('^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$')]),
      phone: new FormControl({value: this.worker.phone, disabled: this.disabled}, [Validators.required]),
    })
    })
  }

  async getWorker(){
    this.worker = await this.http.getWorker(this.id, this.departament);
  }

  
  async onEdit(){
    // this.formEdit.value.birthDay = this.makeDate(this.formEdit.value.birthDay)
    await this.http.putWorker(this.id, this.formEdit.value, this.departament);
    this.router.navigate([this.departament])
  }

  
  // makeDate(str: string){
  //   let newStr;
  //   newStr = `${str.slice(0,2)}.${str.slice(2,4)}.${str.slice(4,8)}`
  //   return newStr;
  // }

  async onDelete(){
    await this.http.deleteWorker(this.id, this.departament);
    this.router.navigate([this.departament])
  }

}
