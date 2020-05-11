import React from 'react'
import { IonHeader, IonToolbar, IonButtons, IonIcon } from '@ionic/react';
import { gridOutline } from 'ionicons/icons'

function Header() {
    return (
        <IonHeader >
        <IonToolbar color='dark'>
          <IonButtons className="ion-padding" slot="end">
            <IonIcon color='light' slot="icon-only" icon={gridOutline} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    )
}

export default Header
