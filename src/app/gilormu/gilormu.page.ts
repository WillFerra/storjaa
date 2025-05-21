import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonGrid, IonCol, IonRow, IonIcon } from '@ionic/angular/standalone';
import * as L from 'leaflet';

@Component({
  selector: 'app-gilormu',
  templateUrl: './gilormu.page.html',
  styleUrls: ['./gilormu.page.scss'],
  standalone: true,
  imports: [IonIcon, IonRow, IonCol, IonGrid, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GilormuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

openDirections() {
  const lat = 35.897316;
  const lng = 14.512363;
  const gmapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
  window.open(gmapUrl, '_blank');
}

openAeroProject() {
  const aeroLink = "https://adobeaero.app.link/PMV9cs3axTb";
  window.open(aeroLink, '_blank');
}
}
