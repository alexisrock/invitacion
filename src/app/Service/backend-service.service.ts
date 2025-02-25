import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../Model/LoginRequest';
import { LoginResponse } from '../Model/LoginResponse';
import { BehaviorSubject } from 'rxjs';
import { ConfirmAssistanceRequest } from '../Model/ConfirmAssistanceRequest';
import { BaseResponse } from '../Model/ConfirmAssistanceResponse';
import { StorageService } from './storage-service.service';
import { ObservationRequest } from '../Model/ObservationRequest';
import { SuggestSongRequest } from '../Model/SuggestSongRequest';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {


  urlBase: string = "https://weddinginvitationcol.com/";


  constructor(private readonly httpclient: HttpClient, private readonly storageService: StorageService) { }


  public  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },);

  private readonly loadingSubject =  new BehaviorSubject<boolean>(false);
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
    return this.httpclient.post<BaseResponse>(this.urlBase+'confirm-assistance/', Request,{headers: this.headers } );
  }

  sendObservation(Request: ObservationRequest){
    return this.httpclient.post<BaseResponse>(this.urlBase+'update-observation/', Request,{headers: this.headers } );
  }

  sendSuggestsond(Request: SuggestSongRequest){
    return this.httpclient.post<BaseResponse>(this.urlBase+'insert-suggested-song/', Request,{headers: this.headers } );
  }


}
