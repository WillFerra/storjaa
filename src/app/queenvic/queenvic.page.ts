import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonCol, IonRow, IonGrid, IonBackButton, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-queenvic',
  templateUrl: './queenvic.page.html',
  styleUrls: ['./queenvic.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonIcon, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class QueenvicPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openDirections() {
  const lat = 35.898451;
  const lng = 14.513312;
  const gmapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
  window.open(gmapUrl, '_blank');
}

openAeroProject() {
  const aeroLink = ""; 
  window.open(aeroLink, '_blank');
}

}
