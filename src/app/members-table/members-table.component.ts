import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Member, MOCK_MEMBERS, PaymentInterval, PaymentMethod, Salutation } from '../modals/member.class';
@Component({
  selector: 'app-members-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './members-table.component.html',
  styleUrl: './members-table.component.scss'
})
export class MembersTableComponent implements OnInit {
  // members: Member[] = [
  //   { 
  //     id: 1,
  //     membershipNumber: 'M2024001',
  //     salutation: Salutation.HERR,
  //     firstName: 'Max',
  //     lastName: 'Mustermann',
  //     street: 'Musterstraße 123',
  //     postalCode: '12345',
  //     city: 'Berlin',
  //     phone: '+49 123 456789',
  //     email: 'max.mustermann@email.de',
  //     birthDate: '1990-01-01',
  //     birthPlace: 'München',
  //     citizenship: 'Deutsch',
  //     occupation: 'Software-Entwickler',
  //     memberSince: '2024-01-01',
  //     paymentInterval: PaymentInterval.MONATLICH,
  //     contributionAmount: 25.00,
  //     paymentMethod: PaymentMethod.LASTSCHRIFT,
  //     bankName: 'Sparkasse',
  //     iban: 'DE89 3704 0044 0532 0130 00',
  //     notes: 'Aktives Mitglied im Vorstand',
  //     status: 'active'
  //   },
  //   // Weiteres Beispiel
  //   { 
  //     id: 2,
  //     membershipNumber: 'M2024002',
  //     salutation: Salutation.FRAU,
  //     firstName: 'Maria',
  //     lastName: 'Musterfrau',
  //     street: 'Hauptstraße 45',
  //     postalCode: '12345',
  //     city: 'Berlin',
  //     phone: '+49 987 654321',
  //     email: 'maria.musterfrau@email.de',
  //     birthDate: '1992-03-15',
  //     birthPlace: 'Hamburg',
  //     citizenship: 'Deutsch',
  //     occupation: 'Ärztin',
  //     memberSince: '2024-02-01',
  //     paymentInterval: PaymentInterval.JAEHRLICH,
  //     contributionAmount: 300.00,
  //     paymentMethod: PaymentMethod.UEBERWEISUNG,
  //     bankName: 'Deutsche Bank',
  //     iban: 'DE89 3704 0044 0532 0130 01',
  //     notes: '',
  //     status: 'active'
  //   }
  // ];

  members: Member[] = MOCK_MEMBERS;

  displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'actions'];

  ngOnInit() {}
}