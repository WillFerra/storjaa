import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/angular/standalone';
import * as L from 'leaflet';

@Component({
  selector: 'app-dominic',
  templateUrl: './dominic.page.html',
  styleUrls: ['./dominic.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCol, IonRow, IonGrid, IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DominicPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

openDirections() {
  const lat = 35.899386;
  const lng = 14.516273;
  const gmapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
  window.open(gmapUrl, '_blank');
}

openAeroProject() {
  const aeroLink = "https://adobeaero.app.link/FaY5fxw5wTb"; 
  window.open(aeroLink, '_blank');
}
}
