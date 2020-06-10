import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-view-it',
  templateUrl: './view-it.component.html',
  styleUrls: ['./view-it.component.css']
})
export class ViewItComponent implements OnInit {
  department = "it";
  workers: any = [{}];
  add = false;
  sortParam: string;
  filterParam: string;

  constructor(
    public http: HttpService,
  ) { }

  async ngOnInit() {
    await this.getWorkers();
    // let date = new Date();
  }

  async onDelete(id){
    await this.http.deleteWorker(id, this.department);
    await this.getWorkers();
  }

  onAdd(){
    this.add = !this.add;
  }

  async onAddWorker(worker: {}){
    await this.http.postWorker(worker, this.department);
    this.onAdd();
    await this.getWorkers();
  }

  async getWorkers(){
    this.workers = await this.http.getWorkers(this.department);
  }

}
