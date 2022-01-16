import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const users= [
      { 'uid' : 1029, 'uname' : 'Geeta'},
      { 'uid' : 1030, 'uname' : 'Alice'},
      { 'uid' : 1031, 'uname' : 'John'},
      { 'uid' : 1032, 'uname' : 'Ravi'},
      { 'uid' : 1033, 'uname' : 'Ali' },
      { 'uid' : 1034, 'uname' : 'Shyam' },
      { 'uid' : 1035, 'uname' : 'Megha' },
      { 'uid' : 1036, 'uname' : 'Mary'},
      { 'uid' : 1037, 'uname' : 'Kolaus'},
      { 'uid' : 1038, 'uname' : 'Christin'}
    ];
    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user=> user.uid)) + 1 : 11;
  }
}
