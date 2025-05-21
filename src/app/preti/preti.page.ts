import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/angular/standalone';
import * as L from 'leaflet';

@Component({
  selector: 'app-preti',
  templateUrl: './preti.page.html',
  styleUrls: ['./preti.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCol, IonRow, IonGrid, IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PretiPage implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
  
  openDirections() {
    const lat = 35.897577;
    const lng = 14.512098;
    const gmapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
    window.open(gmapUrl, '_blank');
  }
  
  openAeroProject() {
    const aeroLink = "https://adobeaero.app.link/0N95JlgbxTb";
    window.open(aeroLink, '_blank');
  }
  }
  
