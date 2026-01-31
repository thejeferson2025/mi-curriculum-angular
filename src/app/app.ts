import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importamos tus datos
import { CV_DATA } from './data/cv-data'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']  
})
export class App {
  
  cv = CV_DATA; 
}