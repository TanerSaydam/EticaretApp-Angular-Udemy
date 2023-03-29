import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent {
  @Input() title: string = "";
  @Input() sectionTitle: string = ""; 
}
