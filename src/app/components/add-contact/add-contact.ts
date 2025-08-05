import { Component } from '@angular/core';
import { IContact } from '../../models/contact.model';
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-add-contact',
  imports: [FormsModule, NgClass],
  templateUrl: './add-contact.html',
  styleUrl: './add-contact.scss'
})
export class AddContact {

  public contact: IContact = {
    name: '',
    surname: '',
    telephone: ''
  };

  addContact(){
    console.log(this.contact);
  }
}
