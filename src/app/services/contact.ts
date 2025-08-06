import { Injectable } from '@angular/core';
import { IContact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  [x: string]: any;
  
  public lisContacts: IContact[] = [];

  addContact(contact:IContact){
    this.lisContacts.push(contact);
  };

    deleteContact(index:number){
    this.lisContacts.splice(index,1);
  };
}
