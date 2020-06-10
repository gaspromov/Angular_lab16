import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-view-sales',
  templateUrl: './view-sales.component.html',
  styleUrls: ['./view-sales.component.css']
})
export class ViewSalesComponent implements OnInit {

  department = "sales";
  workers: any = [{}];
  add = false;
  filterParam: string;
  sortParam: string;

  constructor(
    public http: HttpService,
  ) { }

  async ngOnInit() {
    await this.getWorkers();
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
