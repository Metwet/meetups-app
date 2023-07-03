import { Injectable } from '@angular/core';
import { Meetup } from '../models/meetup.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {

  private baseUrl: string = `${environment.backendOrigin}/meetup`

  constructor(private http: HttpClient) {  }

  getMeetups(): Observable<Meetup[]> {
    return this.http.get<Meetup[]>(`${this.baseUrl}`);
  }

  addMeetup(meetup: Meetup):void {
  }

  updateMeetup(meetup: Meetup):void {

  }

  deleteMeetup(meetup: Meetup): void {

  }

  subscribeToMeetup(meetupId:number, userId:number):Observable<Meetup> {
    const requestBody = {
      idMeetup: meetupId,
      idUser: userId
    }
    return this.http.put<Meetup>(`${this.baseUrl}`, requestBody)
  }

  unsubscribeToMeetup(meetupId:number, userId:number):Observable<Meetup>{
    const requestBody = {
      idMeetup: meetupId,
      idUser: userId
    }
    return this.http.delete<Meetup>(`${this.baseUrl}`, {body:requestBody})
  }
}