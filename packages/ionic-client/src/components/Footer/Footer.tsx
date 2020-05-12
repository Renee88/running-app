import React from 'react'
import { IonButton, IonFabButton, IonToolbar, IonButtons, IonFooter, IonTabBar, IonIcon, IonLabel, IonTabButton} from '@ionic/react';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { pinOutline, trailSign, heartOutline, peopleOutline, podiumOutline, checkmarkOutline, waterSharp } from 'ionicons/icons'
import './Footer.css'

function Footer() {

    return (
        <IonFooter>
            <IonToolbar color='dark' >
                <IonTabBar id="tabs-container" color='dark'>
                    <IonTabButton className="tabs ion-justify-content-end" tab="start">
                        <IonIcon icon={pinOutline} />
                        <IonLabel color="light">Start</IonLabel>
                    </IonTabButton>
                    <IonTabButton className="tabs ion-justify-content-end" tab="kms">
                        <IonIcon icon={trailSign} />
                        <IonLabel color="light">Kilometers</IonLabel>
                    </IonTabButton>
                    <IonTabButton className="tabs ion-justify-content-end" tab="difficulty">
                        <IonIcon icon={podiumOutline} />
                        <IonLabel color="light">Difficulty</IonLabel>
                    </IonTabButton>
                </IonTabBar>
                <IonButtons className="ion-justify-content-center">
                    <IonButton className="footer-button-left">
                        <IonIcon slot="start" icon={peopleOutline} />
                    </IonButton>
                    <IonFabButton id="start-button" className="fab-button">
                        <DirectionsRunIcon fontSize="large"/>
                    </IonFabButton>
                    <IonButton className="footer-button-right">
                        <IonIcon slot="end" icon={heartOutline} />
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonFooter>
    )
}

export default Footer
