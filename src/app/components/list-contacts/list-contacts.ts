import { Component, inject } from '@angular/core';
import { ContactService } from '../../services/contact';
import { IContact } from '../../models/contact.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-list-contacts',
  imports: [TitleCasePipe],
  templateUrl: './list-contacts.html',
  styleUrl: './list-contacts.scss'
})
export class ListContacts {
  private contactService: ContactService = inject(ContactService);
  public lisContacts: IContact[] = this.contactService.lisContacts;

  deleteContact(index: number){
    this.contactService.deleteContact(index);
  }
}
