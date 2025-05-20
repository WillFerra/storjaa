import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton } from '@ionic/angular/standalone';
import * as L from 'leaflet';

@Component({
  selector: 'app-stpaul',
  templateUrl: './stpaul.page.html',
  styleUrls: ['./stpaul.page.scss'],
  standalone: true,
  imports: [IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StpaulPage implements OnInit {

  private map!: L.Map;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
      this.loadMap();
    }
  
    loadMap() {
    const lat = 35.897148;
    const lng = 14.513833;
  
    this.map = L.map('map', {
      center: [lat, lng], // your target coords
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
  
    // Add a marker that opens Google Maps on click
    const marker = L.marker([35.897148, 14.513833]).addTo(this.map);
    marker.on('click', () => {
      const gmapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
      window.open(gmapUrl, '_blank');
    });
  }
  
  openDirections() {
    const lat = 35.897148;
    const lng = 14.513833;
    const gmapUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=walking`;
    window.open(gmapUrl, '_blank');
  }
  
  openAeroProject() {
    const aeroLink = "https://adobeaero.app.link/VGYFU6U7wTb"; // Replace with your actual Adobe Aero link
    window.open(aeroLink, '_blank');
  }
}
  
