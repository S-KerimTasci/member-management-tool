
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
  // export const MOCK_MEMBER: Member = 
  // {
  //   id: 1,
  //   membershipNumber: 'M2024001',
  //   salutation: Salutation.HERR,
  //   firstName: 'Max',
  //   lastName: 'Mustermann',
  //   street: 'Musterstraße 123',
  //   postalCode: '12345',
  //   city: 'Berlin',
  //   phone: '+49 123 456789',
  //   email: 'max.mustermann@email.de',
  //   birthDate: '1990-01-01',
  //   birthPlace: 'München',
  //   citizenship: 'Deutsch',
  //   occupation: 'Software-Entwickler',
  //   memberSince: '2024-01-01',
  //   paymentInterval: PaymentInterval.MONATLICH,
  //   contributionAmount: 25.00,
  //   paymentMethod: PaymentMethod.LASTSCHRIFT,
  //   bankName: 'Sparkasse',
  //   iban: 'DE89 3704 0044 0532 0130 00',
  //   notes: 'Aktives Mitglied im Vorstand',
  //   status: 'active'
  // };

  export const MOCK_MEMBERS: Member[] = [
    {
      id: 1,
      membershipNumber: 'M2024001',
      salutation: Salutation.HERR,
      firstName: 'Ahmet',
      lastName: 'Yilmaz',
      street: 'Landstraße 12',
      postalCode: '4020',
      city: 'Linz',
      phone: '+43 660 123 45 67',
      email: 'ahmet.yilmaz@email.at',
      birthDate: '1985-03-15',
      birthPlace: 'Ankara',
      citizenship: 'Österreich',
      occupation: 'Software-Entwickler',
      memberSince: '2023-01-01',
      paymentInterval: PaymentInterval.MONATLICH,
      contributionAmount: 25.00,
      paymentMethod: PaymentMethod.LASTSCHRIFT,
      bankName: 'Raiffeisenbank',
      iban: 'AT48 3200 0000 0022 2000',
      notes: 'Aktives Mitglied, spricht Deutsch und Türkisch',
      status: 'active'
    },
    {
      id: 2,
      membershipNumber: 'M2024002',
      salutation: Salutation.FRAU,
      firstName: 'Ayşe',
      lastName: 'Demir',
      street: 'Hauptplatz 8/4',
      postalCode: '4020',
      city: 'Linz',
      phone: '+43 660 234 56 78',
      email: 'ayse.demir@email.at',
      birthDate: '1992-07-22',
      birthPlace: 'Istanbul',
      citizenship: 'Türkei',
      occupation: 'Krankenschwester',
      memberSince: '2023-03-15',
      paymentInterval: PaymentInterval.VIERTELJAEHRLICH,
      contributionAmount: 75.00,
      paymentMethod: PaymentMethod.UEBERWEISUNG,
      bankName: 'Erste Bank',
      iban: 'AT98 2011 1000 0123 4560',
      notes: 'Organisiert regelmäßig kulturelle Veranstaltungen',
      status: 'active'
    },
    {
      id: 3,
      membershipNumber: 'M2024003',
      salutation: Salutation.HERR,
      firstName: 'Mehmet',
      lastName: 'Kaya',
      street: 'Wiener Straße 45/2/8',
      postalCode: '4020',
      city: 'Linz',
      phone: '+43 660 345 67 89',
      email: 'mehmet.kaya@email.at',
      birthDate: '1978-11-30',
      birthPlace: 'Izmir',
      citizenship: 'Österreich',
      occupation: 'Geschäftsführer',
      memberSince: '2023-06-01',
      paymentInterval: PaymentInterval.JAEHRLICH,
      contributionAmount: 300.00,
      paymentMethod: PaymentMethod.LASTSCHRIFT,
      bankName: 'Bank Austria',
      iban: 'AT95 1200 0000 1234 5678',
      notes: 'Vorstandsmitglied seit September 2023',
      status: 'active'
    },
    {
      id: 4,
      membershipNumber: 'M2024004',
      salutation: Salutation.FRAU,
      firstName: 'Zeynep',
      lastName: 'Özturk',
      street: 'Mozartstraße 15',
      postalCode: '4020',
      city: 'Linz',
      phone: '+43 660 456 78 90',
      email: 'zeynep.ozturk@email.at',
      birthDate: '1995-04-18',
      birthPlace: 'Linz',
      citizenship: 'Österreich',
      occupation: 'Lehrerin',
      memberSince: '2023-09-01',
      paymentInterval: PaymentInterval.MONATLICH,
      contributionAmount: 25.00,
      paymentMethod: PaymentMethod.UEBERWEISUNG,
      bankName: 'Sparkasse OÖ',
      iban: 'AT43 2032 0321 0012 3456',
      notes: 'Unterstützt bei Nachhilfeprogrammen',
      status: 'active'
    },
    {
      id: 5,
      membershipNumber: 'M2024005',
      salutation: Salutation.HERR,
      firstName: 'Mustafa',
      lastName: 'Çelik',
      street: 'Industriezeile 77/3',
      postalCode: '4020',
      city: 'Linz',
      phone: '+43 660 567 89 01',
      email: 'mustafa.celik@email.at',
      birthDate: '1988-09-25',
      birthPlace: 'Bursa',
      citizenship: 'Türkei',
      occupation: 'Techniker',
      memberSince: '2024-01-15',
      paymentInterval: PaymentInterval.HALBJAEHRLICH,
      contributionAmount: 150.00,
      paymentMethod: PaymentMethod.LASTSCHRIFT,
      bankName: 'Volksbank',
      iban: 'AT89 4321 0000 0123 4567',
      notes: 'Neues Mitglied, technische Unterstützung bei Veranstaltungen',
      status: 'active'
    }
  ];