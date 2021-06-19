import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DataHolderService {

  constructor() { }
  private dsSelectedUser = new BehaviorSubject<User>(null);
  selectedUser = this.dsSelectedUser.asObservable();
  sendSelectedUser(user: User): void {
    this.dsSelectedUser.next(user);
  }
}
