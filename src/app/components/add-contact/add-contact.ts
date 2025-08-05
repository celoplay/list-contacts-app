import { Component } from '@angular/core';
import { IContact } from '../../models/contact.model';

@Component({
  selector: 'app-add-contact',
  imports: [],
  templateUrl: './add-contact.html',
  styleUrl: './add-contact.scss'
})
export class AddContact {

  public contact: IContact = {
    name: '',
    surname: '',
    telehpne: ''
  };
}
