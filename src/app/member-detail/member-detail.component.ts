import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Member, MOCK_MEMBERS } from '../modals/member.class';
import { MatDividerModule } from '@angular/material/divider';
import { MemberService } from '../services/member.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.scss'
})
export class MemberDetailComponent implements OnInit {
  member?: Member;

  constructor(private route: ActivatedRoute, private memberService: MemberService, private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Hole die Mitglieder aus dem Service und subscribe darauf
      this.memberService.getMembers().subscribe(members => {
        // Suche das Mitglied mit der entsprechenden ID
        this.member = members.find(m => m.id === parseInt(id));
        if (!this.member) {
          console.error('Mitglied nicht gefunden:', id);
        }
      });
    }
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
