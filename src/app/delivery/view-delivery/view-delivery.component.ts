import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-view-delivery',
  templateUrl: './view-delivery.component.html',
  styleUrls: ['./view-delivery.component.css']
})
export class ViewDeliveryComponent implements OnInit {
  department = "delivery";
  workers: any = [{}];
  add = false;
  filterParam: string;
  sortParam: string = 'byId2';

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
