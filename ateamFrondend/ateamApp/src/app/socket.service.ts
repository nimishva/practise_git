import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = "http://localhost:3000";
  private socket;

  constructor() { 
    this.socket = io(this.url);
  }

  public getOwnUserId = (userId)=>{
    return new Observable(((observer) => {
      this.socket.on(userId, data => {
        observer.next(data);
      });
    }))
    }
    //Listening server 
    public verifyUser = ()=>{
      return new Observable((observer)=>{
        this.socket.on('verifyUser',data=>{
          observer.next(data);
        })
      })
    } //User verification
  
    public tokenValidity = ()=>{
      return new Observable((observer)=>{
        this.socket.on('token-error',errorDetails=>{
          observer.next(errorDetails);
        })
      }) //Observable
    }
    public createNewEvent = (eventData) => {
        this.socket.emit('new-event',eventData);
    } //CreateNewEvent
  
  
    public UpdateEvent = (eventData) => {
      this.socket.emit('update-event',eventData);
  } //Update Event
  
    public DeleteEvent = (eventData) => {
    this.socket.emit('delete-event',eventData);
  } //Update Event
  
  
    public getNewEvents = () =>{
      return new Observable(observer=>{
        this.socket.on('get-new-events',eventData=>{
          observer.next(eventData);
        })
      }) //Observable
    } //Get New Events ends here 
  
     //Emitting to server
     public setUserOnline:any = (authToken)=>{
      this.socket.emit('setUser',authToken);
  } //Setting up user online
}
