import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonGrid, IonCol, IonRow, IonIcon } from '@ionic/angular/standalone';
import * as L from 'leaflet';

@Component({
  selector: 'app-dragut',
  templateUrl: './dragut.page.html',
  styleUrls: ['./dragut.page.scss'],
  standalone: true,
  imports: [IonIcon, IonRow, IonCol, IonGrid, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DragutPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  openDirections() {
    const lat = 35.901252;
    const lng = 14.518351;
    const gmapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
    window.open(gmapUrl, '_blank');
  }
  
  openAeroProject() {
    const aeroLink = "https://adobeaero.app.link/EDTfRGFkmTb";
    window.open(aeroLink, '_blank');
  }
}
