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
        header: 'La Valette',
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
}

