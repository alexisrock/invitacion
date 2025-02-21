import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../Model/LoginRequest';
import { LoginResponse } from '../Model/LoginResponse';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfirmAssistanceRequest } from '../Model/ConfirmAssistanceRequest';
import { ConfirmAssistanceResponse } from '../Model/ConfirmAssistanceResponse';
import { StorageService } from './storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {


  urlBase: string = "https://9.169.177.198/";


  constructor(private readonly httpclient: HttpClient, private storageService: StorageService) { }


  public  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',

  },);



  private loadingSubject =  new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();


  setCurrentLoginResponse(currentLoginResponse: LoginResponse){
    this.storageService.setLocal('loginRequest',currentLoginResponse )
  }

  getLoginResponse(){
    const response = this.storageService.getLocal<LoginResponse>('loginRequest');
    return response;
  }


  loadingOn() {
    this.loadingSubject.next(true);
  }

  loadingOff() {
    this.loadingSubject.next(false);
  }

  login(loginRequest: LoginRequest){
    return this.httpclient.post<LoginResponse>(this.urlBase+'login/', loginRequest,{headers: this.headers } );
  }


  confirmAsisitencia(Request: ConfirmAssistanceRequest){
    return this.httpclient.post<ConfirmAssistanceResponse>(this.urlBase+'confirm-assistance/', Request,{headers: this.headers } );
  }


}
