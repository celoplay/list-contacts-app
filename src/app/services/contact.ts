import { Injectable } from '@angular/core';
import { IContact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  public lisContacts: IContact[] = [];

  addContact(contact:IContact){
    this.lisContacts.push(contact);
  };
}
