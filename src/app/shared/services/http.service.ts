import { Injectable } from '@angular/core';
import { API } from './API';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends API {

  header: HttpHeaders;

  constructor(httpClient: HttpClient) {
    super (httpClient);
    this.header = new HttpHeaders();
    this.header.set ('Content-type', 'application/json');
  }

  async getWorkers(url: string) {
    return this.get (url, this.header).toPromise();
  }

  async postWorker(data, url: string) {
    return this.post (url, data, this.header).toPromise();
  }

  async putWorker(id: number, data, url: string) {
    return this.put (`${url}/${id}`, data, this.header).toPromise();
  }

  async deleteWorker(id: number, url: string) {
    return this.delete (`${url}/${id}`, this.header).toPromise();
  }

  async getWorker(id, url: string){
    return this.get( `${url}/${id}`, this.header).toPromise();
  }
}