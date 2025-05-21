import { Component } from '@angular/core';
import { AlertController, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})

export class Tab1Page {
  constructor(
    private alertController: AlertController, private router: Router) {}

    async showLaValetteAlert() {
      const alert = await this.alertController.create({
        header: 'Jean La Valette',
        message: 'Near City Gate, Valletta',
        buttons: [
        {
          text: 'Go to Character',
          handler: () => {
            // This navigates to tab 2 — adjust as needed
            this.router.navigate(['/la-valette'], {
              queryParams: { character: 'La Valette' }
            });
          }
        },
      ]
    });

    await alert.present();
  }

  async showStDominicAlert() {
      const alert = await this.alertController.create({
        header: 'Saint Dominic',
        message: 'Near the Church of St. Dominic, Valletta',
        buttons: [
        {
          text: 'Go to Character',
          handler: () => {
            // This navigates to tab 2 — adjust as needed
            this.router.navigate(['/dominic'], {
              queryParams: { character: 'St Dominic' }
            });
          }
        },
      ]
    });

    await alert.present();
  }

  async showDragutAlert() {
      const alert = await this.alertController.create({
        header: 'Dragut',
        message: 'Near Fort St. Elmo, Valletta',
        buttons: [
        {
          text: 'Go to Character',
          handler: () => {
            // This navigates to tab 2 — adjust as needed
            this.router.navigate(['/dragut'], {
              queryParams: { character: 'Dragut' }
            });
          }
        },
      ]
    });

    await alert.present();
  }

  async showPintoAlert() {
      const alert = await this.alertController.create({
        header: 'Manuel Pinto de Fonseca',
        message: 'Near Auberge de Castille, Valletta',
        buttons: [
        {
          text: 'Go to Character',
          handler: () => {
            // This navigates to tab 2 — adjust as needed
            this.router.navigate(['/pinto'], {
              queryParams: { character: 'Pinto' }
            });
          }
        },
      ]
    });

    await alert.present();
  }

  async showLaparelliAlert() {
      const alert = await this.alertController.create({
        header: 'Francesco Laparelli',
        message: 'Behind the Maltese Parliament, Valletta',
        buttons: [
        {
          text: 'Go to Character',
          handler: () => {
            // This navigates to tab 2 — adjust as needed
            this.router.navigate(['/laparelli'], {
              queryParams: { character: 'Laparelli' }
            });
          }
        },
      ]
    });

    await alert.present();
  }

  async showStAugAlert() {
      const alert = await this.alertController.create({
        header: 'Saint Augustine',
        message: 'Near St. Augustine\'s Church, Valletta',
        buttons: [
        {
          text: 'Go to Character',
          handler: () => {
            // This navigates to tab 2 — adjust as needed
            this.router.navigate(['/staug'], {
              queryParams: { character: 'Saint Augustine' }
            });
          }
        },
      ]
    });

    await alert.present();
  }

  async showPretiAlert() {
      const alert = await this.alertController.create({
        header: 'Mattia Preti',
        message: 'Near St. John\'s Co-Cathedral, Valletta',
        buttons: [
        {
          text: 'Go to Character',
          handler: () => {
            // This navigates to tab 2 — adjust as needed
            this.router.navigate(['/preti'], {
              queryParams: { character: 'Mattia Preti' }
            });
          }
        },
      ]
    });

    await alert.present();
  }

  async showGilormuAlert() {
      const alert = await this.alertController.create({
        header: 'Ġilormu Cassar',
        message: 'Near St. John\'s Co-Cathedral, Valletta',
        buttons: [
        {
          text: 'Go to Character',
          handler: () => {
            // This navigates to tab 2 — adjust as needed
            this.router.navigate(['/gilormu'], {
              queryParams: { character: 'Gilormu Cassar' }
            });
          }
        },
      ]
    });

    await alert.present();
  }

  async showVilhenaAlert() {
      const alert = await this.alertController.create({
        header: 'António Manoel de Vilhena',
        message: 'Near the Manoel Theatre, Valletta',
        buttons: [
        {
          text: 'Go to Character',
          handler: () => {
            // This navigates to tab 2 — adjust as needed
            this.router.navigate(['/vilhena'], {
              queryParams: { character: 'Vilhena' }
            });
          }
        },
      ]
    });

    await alert.present();
  }

  async showStPaulAlert() {
      const alert = await this.alertController.create({
        header: 'Saint Paul, the Apostle',
        message: 'Near St. Paul\'s Shipwreck Church, Valletta',
        buttons: [
        {
          text: 'Go to Character',
          handler: () => {
            // This navigates to tab 2 — adjust as needed
            this.router.navigate(['/stpaul'], {
              queryParams: { character: 'Saint Paul' }
            });
          }
        },
      ]
    });

    await alert.present();
  }

}

