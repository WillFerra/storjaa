import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonGrid, IonRow, IonCol, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

  constructor(private router: Router) {}

  goToLaValette() {
    this.router.navigate(['../la-valette']);
  }

  goToDominic() {
    this.router.navigate(['../dominic']);
  }

  goToPinto() {
    this.router.navigate(['../pinto']);
  }

  goToStPaul() {
    this.router.navigate(['../stpaul']);
  }

  goToDragut() {
    this.router.navigate(['../dragut']);
  }

  goToLaparelli() {
    this.router.navigate(['../laparelli']);
  }

  goToGilormu() {
    this.router.navigate(['../gilormu']);
  }

  goToPreti() {
    this.router.navigate(['../preti']);
  }

  goToStAug() {
    this.router.navigate(['../staug']);
  }

  goToVilhena() {
    this.router.navigate(['../vilhena']);
  }
}
