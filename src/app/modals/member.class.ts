// models/member.model.ts

export enum Salutation {
    HERR = 'Herr',
    FRAU = 'Frau',
    DIVERS = 'Divers'
  }
  
  export enum PaymentInterval {
    MONATLICH = 'Monatlich',
    VIERTELJAEHRLICH = 'Vierteljährlich',
    HALBJAEHRLICH = 'Halbjährlich',
    JAEHRLICH = 'Jährlich'
  }
  
  export enum PaymentMethod {
    LASTSCHRIFT = 'Lastschrift',
    UEBERWEISUNG = 'Überweisung',
    BAR = 'Bar'
  }
  
  export interface Member {
    id: number;
    membershipNumber: string;           // Mitgliedsnummer
    salutation: Salutation;            // Ansprache
    firstName: string;                 // Vorname
    lastName: string;                  // Nachname
    street: string;                    // Straße + Hausnummer
    postalCode: string;                // Postleitzahl
    city: string;                      // Stadt
    phone: string;                     // Telefon
    email: string;                     // Email
    birthDate: string;                 // Geburtsdatum
    birthPlace: string;                // Geburtsort
    citizenship: string;               // Staatsbürgerschaft
    occupation: string;                // Beruf
    memberSince: string;               // Mitglied seit
    paymentInterval: PaymentInterval;  // Beitragsintervall
    contributionAmount: number;        // Beitragshöhe
    paymentMethod: PaymentMethod;      // Zahlungsart
    bankName: string;                  // Name der Bank
    iban: string;                      // IBAN
    notes: string;                     // Notiz
    status: 'active' | 'inactive';     // Status (behalten wir bei)
  }
  
  // Beispiel-Member für die Entwicklung
  export const MOCK_MEMBER: Member = {
    id: 1,
    membershipNumber: 'M2024001',
    salutation: Salutation.HERR,
    firstName: 'Max',
    lastName: 'Mustermann',
    street: 'Musterstraße 123',
    postalCode: '12345',
    city: 'Berlin',
    phone: '+49 123 456789',
    email: 'max.mustermann@email.de',
    birthDate: '1990-01-01',
    birthPlace: 'München',
    citizenship: 'Deutsch',
    occupation: 'Software-Entwickler',
    memberSince: '2024-01-01',
    paymentInterval: PaymentInterval.MONATLICH,
    contributionAmount: 25.00,
    paymentMethod: PaymentMethod.LASTSCHRIFT,
    bankName: 'Sparkasse',
    iban: 'DE89 3704 0044 0532 0130 00',
    notes: 'Aktives Mitglied im Vorstand',
    status: 'active'
  };