import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonRow, IonCol, IonGrid, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-madonna',
  templateUrl: './madonna.page.html',
  styleUrls: ['./madonna.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonGrid, IonCol, IonRow, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MadonnaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openDirections() {
  const lat = 35.900111;
  const lng = 14.512050;
  const gmapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
  window.open(gmapUrl, '_blank');
}

openAeroProject() {
  const aeroLink = ""; 
  window.open(aeroLink, '_blank');
}
}
