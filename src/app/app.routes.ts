import { Routes } from '@angular/router';
import { AddContact } from './components/add-contact/add-contact';
import { ListContacts } from './components/list-contacts/list-contacts';

export const routes: Routes = [
    { path: 'add-contact', component:AddContact},
    { path: 'list-contacts', component:ListContacts},
    { path: '**', redirectTo : 'add-contact'}
];
