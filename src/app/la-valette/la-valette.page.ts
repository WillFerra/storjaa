import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonGrid, IonRow, IonCol, IonList, IonItem, IonLabel, IonText, IonButton,
  IonIcon, IonImg 
} from '@ionic/angular/standalone';
import * as L from 'leaflet';

@Component({
  selector: 'app-la-valette',
  templateUrl: './la-valette.page.html',
  styleUrls: ['./la-valette.page.scss'],
  standalone: true,
  imports: [
    IonImg, IonIcon, IonButton, IonText, IonLabel, IonItem, IonList,
    IonCol, IonRow, IonGrid, IonBackButton, IonButtons,
    IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule
  ]
})
export class LaValettePage implements OnInit {

  // Leaflet map instance
  private map!: L.Map;

  constructor() {}

  ngOnInit() {
    // Not used for now – can be used later for data fetching or setup
  }

  // Runs when the view is fully entered
  ionViewDidEnter() {
    this.loadMap();
  }

  // Loads a static Leaflet map with a clickable marker
  loadMap() {
    const lat = 35.895961;
    const lng = 14.508617;

    this.map = L.map('map', {
      center: [lat, lng],
      zoom: 16,
      dragging: false,
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      touchZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    const marker = L.marker([lat, lng]).addTo(this.map);
    marker.on('click', () => {
      const gmapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
      window.open(gmapUrl, '_blank');
    });
  }

  // Opens external Google Maps walking directions
  openDirections() {
    const lat = 35.895961;
    const lng = 14.508617;
    const gmapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
    window.open(gmapUrl, '_blank');
  }

  // Opens Adobe Aero AR experience link
  openAeroProject() {
    const aeroLink = "https://adobeaero.app.link/RZu7MIGsrTb"; // Replace with your actual link if needed
    window.open(aeroLink, '_blank');
  }
}
