import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Member, MOCK_MEMBERS, PaymentInterval, PaymentMethod, Salutation } from '../modals/member.class';
import { MatDividerModule } from '@angular/material/divider';
import { MemberService } from '../services/member.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,       
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,  
    MatOptionModule,
    MatDatepicker,
    MatDatepickerModule,
  ],
  providers: [
    provideNativeDateAdapter() 
  ],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.scss'
})
export class MemberDetailComponent implements OnInit {
  member?: Member;
  editMode = false;
  memberForm?: FormGroup;
  Salutation = Salutation;
  PaymentInterval = PaymentInterval;
  PaymentMethod = PaymentMethod;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private memberService: MemberService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.memberService.getMembers().subscribe(members => {
        this.member = members.find(m => m.id === parseInt(id));
        if (this.member) {
          this.initForm();
        }
      });
    }
  }

  private initForm(): void {
    if (!this.member) return;

    this.memberForm = this.fb.group({
      membershipNumber: [{value: this.member.membershipNumber, disabled: true}],
      salutation: [this.member.salutation, Validators.required],
      firstName: [this.member.firstName, Validators.required],
      lastName: [this.member.lastName, Validators.required],
      street: [this.member.street, Validators.required],
      postalCode: [this.member.postalCode, Validators.required],
      city: [this.member.city, Validators.required],
      phone: [this.member.phone],
      email: [this.member.email, [Validators.email]],
      birthDate: [new Date(this.member.birthDate), Validators.required],
      birthPlace: [this.member.birthPlace],
      citizenship: [this.member.citizenship],
      occupation: [this.member.occupation],
      memberSince: [new Date(this.member.memberSince), Validators.required],
      paymentInterval: [this.member.paymentInterval, Validators.required],
      contributionAmount: [this.member.contributionAmount, [Validators.required, Validators.min(0)]],
      paymentMethod: [this.member.paymentMethod, Validators.required],
      bankName: [this.member.bankName],
      iban: [this.member.iban],
      notes: [this.member.notes],
      status: [this.member.status]
    });
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if (this.editMode && this.member) {
      this.initForm(); 
    }
  }

  onSubmit(): void {
    if (this.memberForm?.valid && this.member) {
      const formValue = this.memberForm.getRawValue(); // getRawValue() um auch disabled Felder zu bekommen
      
      const updatedMember: Member = {
        ...this.member,
        ...formValue,
        birthDate: formValue.birthDate.toISOString().split('T')[0],
        memberSince: formValue.memberSince.toISOString().split('T')[0]
      };

      this.memberService.updateMember(updatedMember);
      this.member = updatedMember;
      this.editMode = false;
    } else {
      // Markiere alle Felder als berührt, um Validierungsfehler anzuzeigen
      Object.keys(this.memberForm?.controls ?? {}).forEach(key => {
        const control = this.memberForm?.get(key);
        control?.markAsTouched();
      });
    }
  }

  onEdit(): void {
    this.toggleEditMode();
  }

  onDelete(): void {
    if (!this.member) return;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Mitglied löschen',
        message: `Möchten Sie das Mitglied "${this.member.firstName} ${this.member.lastName}" wirklich löschen?`,
        confirmText: 'Löschen',
        cancelText: 'Abbrechen'
      }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result && this.member) {
        this.memberService.deleteMember(this.member.id);
        this.router.navigate(['/members']);
      }
    });
  }
}
