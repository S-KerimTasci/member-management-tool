import { Injectable } from '@angular/core';
import { Member, MOCK_MEMBERS } from '../modals/member.class';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private STORAGE_KEY = 'members';
  private membersSubject = new BehaviorSubject<Member[]>([]);

  constructor() {
    this.loadInitialData();
  }

  private loadInitialData(): void {
    // Prüfe ob bereits Daten im LocalStorage sind
    const storedMembers = localStorage.getItem(this.STORAGE_KEY);
    
    if (!storedMembers) {
      // Wenn keine Daten vorhanden, lade die Mock-Daten
      console.log('Keine Daten im LocalStorage gefunden. Lade Mock-Daten...');
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(MOCK_MEMBERS));
      this.membersSubject.next(MOCK_MEMBERS);
    } else {
      // Wenn Daten vorhanden, parse sie und setze sie in den Subject
      console.log('Daten aus LocalStorage geladen');
      const parsedMembers = JSON.parse(storedMembers);
      this.membersSubject.next(parsedMembers);
    }
  }

  // Getter für die Mitglieder als Observable
  getMembers(): Observable<Member[]> {
    return this.membersSubject.asObservable();
  }

  // Optional: Methode zum manuellen Neuladen der Mock-Daten
  reloadMockData(): void {
    console.log('Lade Mock-Daten neu...');
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(MOCK_MEMBERS));
    this.membersSubject.next(MOCK_MEMBERS);
  }

  addMember(memberData: Omit<Member, 'id' | 'membershipNumber'>): void {
    const currentMembers = this.membersSubject.value;
    
    // Generiere neue ID
    const newId = currentMembers.length > 0 
      ? Math.max(...currentMembers.map(m => m.id)) + 1 
      : 1;
    
    // Generiere Mitgliedsnummer (Format: M2024001, M2024002, etc.)
    const newMembershipNumber = `M${new Date().getFullYear()}${String(newId).padStart(3, '0')}`;
    
    // Erstelle neues Member-Objekt
    const newMember: Member = {
      id: newId,
      membershipNumber: newMembershipNumber,
      ...memberData
    };
    
    // Füge den neuen Member hinzu
    const updatedMembers = [...currentMembers, newMember];
    
    // Aktualisiere LocalStorage und Subject
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedMembers));
    this.membersSubject.next(updatedMembers);
  }

  deleteMember(id: number): void {
    const currentMembers = this.membersSubject.value;
    const updatedMembers = currentMembers.filter(member => member.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedMembers));
    this.membersSubject.next(updatedMembers);
  }

  updateMember(updatedMember: Member): void {
    const currentMembers = this.membersSubject.value;
    const updatedMembers = currentMembers.map(member => 
      member.id === updatedMember.id ? updatedMember : member
    );
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedMembers));
    this.membersSubject.next(updatedMembers);
  }
}
