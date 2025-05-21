import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/angular/standalone';
import * as L from 'leaflet';

@Component({
  selector: 'app-vilhena',
  templateUrl: './vilhena.page.html',
  styleUrls: ['./vilhena.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCol, IonRow, IonGrid, IonButton, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class VilhenaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
openDirections() {
  const lat = 35.899697;
  const lng = 14.512426;
  const gmapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
  window.open(gmapUrl, '_blank');
}

openAeroProject() {
  const aeroLink = "https://adobeaero.app.link/cuUm5sTbxTb";
  window.open(aeroLink, '_blank');
}
}

