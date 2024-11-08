import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Member, Salutation, PaymentInterval, PaymentMethod } from '../modals/member.class';
import { MemberService } from '../services/member.service';
@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './add-member.component.html',
  styleUrl: './add-member.component.scss'
})
export class AddMemberComponent {
  memberForm: FormGroup;
  Salutation = Salutation;
  PaymentInterval = PaymentInterval;
  PaymentMethod = PaymentMethod;

  constructor(private fb: FormBuilder, private memberService: MemberService, private router: Router) {
    this.memberForm = this.fb.group({
      membershipNumber: ['', Validators.required],
      salutation: [Salutation.HERR, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.email]],
      birthDate: ['', Validators.required],
      birthPlace: [''],
      citizenship: [''],
      occupation: [''],
      memberSince: [new Date(), Validators.required],
      paymentInterval: [PaymentInterval.MONATLICH, Validators.required],
      contributionAmount: [0, [Validators.required, Validators.min(0)]],
      paymentMethod: [PaymentMethod.LASTSCHRIFT, Validators.required],
      bankName: [''],
      iban: [''],
      notes: ['']
    });
  }

  onSubmit() {
    if (this.memberForm.valid) {
      const formValue = this.memberForm.value;
      
      // Formatiere Datumswerte
      const memberData = {
        ...formValue,
        birthDate: formValue.birthDate.toISOString().split('T')[0],
        memberSince: formValue.memberSince.toISOString().split('T')[0]
      };

      try {
        this.memberService.addMember(memberData);
        this.router.navigate(['/members']);
      } catch (error) {
        console.error('Fehler beim Speichern des Mitglieds:', error);
        // Hier könnte man einen Fehler-Dialog oder eine Benachrichtigung anzeigen
      }
    } else {
      // Markiere alle Felder als berührt, um Validierungsfehler anzuzeigen
      Object.keys(this.memberForm.controls).forEach(key => {
        const control = this.memberForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  onReset() {
    this.memberForm.reset({
      salutation: Salutation.HERR,
      paymentInterval: PaymentInterval.MONATLICH,
      paymentMethod: PaymentMethod.LASTSCHRIFT,
      memberSince: new Date(),
      contributionAmount: 0
    });
  }
}
