import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonRow, IonCol, IonIcon, IonGrid } from '@ionic/angular/standalone';
import * as L from 'leaflet';

@Component({
  selector: 'app-stpaul',
  templateUrl: './stpaul.page.html',
  styleUrls: ['./stpaul.page.scss'],
  standalone: true,
  imports: [IonGrid, IonIcon, IonCol, IonRow, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StpaulPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  
  openDirections() {
    const lat = 35.897148;
    const lng = 14.513833;
    const gmapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
    window.open(gmapUrl, '_blank');
  }
  
  openAeroProject() {
    const aeroLink = "https://adobeaero.app.link/VGYFU6U7wTb";
    window.open(aeroLink, '_blank');
  }
}
  
