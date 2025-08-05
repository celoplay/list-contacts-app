import { Component, inject } from '@angular/core';
import { IContact } from '../../models/contact.model';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ContactService } from '../../services/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  imports: [FormsModule, NgClass],
  templateUrl: './add-contact.html',
  styleUrl: './add-contact.scss'
})
export class AddContact {

  private contactService: ContactService = inject(ContactService);
  private router = inject(Router); 
  public contact: IContact = {
    name: '',
    surname: '',
    telephone: ''
  };

  addContact(){
    //console.log(this.contact);
    const contact = Object.assign({},this.contact);
    this.contactService.addContact(this.contact);
    this.router.navigateByUrl('list-contacts');
  }
}
