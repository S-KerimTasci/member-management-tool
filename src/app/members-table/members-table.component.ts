import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Member, MOCK_MEMBERS, PaymentInterval, PaymentMethod, Salutation } from '../modals/member.class';
import { MemberService } from '../services/member.service';
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
  members: Member[] = [];
  dataSource: MatTableDataSource<Member>;

  constructor(private memberService: MemberService) {
    this.dataSource = new MatTableDataSource<Member>([]);
  }

  
  //members: Member[] = MOCK_MEMBERS;

  displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'actions'];

  ngOnInit() {
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
      this.dataSource.data = members;
      console.log('Geladene Mitglieder:', members);
    });
  }
}