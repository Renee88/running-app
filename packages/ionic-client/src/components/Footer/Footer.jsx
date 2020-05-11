import React from 'react'
import { IonButton, IonToolbar, IonButtons, IonFooter, IonTabBar, IonIcon, IonLabel, IonTabButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { pinOutline, trailSign, heartOutline, peopleOutline, podiumOutline, checkmarkOutline, waterSharp } from 'ionicons/icons'
import './Footer.css'

function Footer() {

    const input = {
        startPoint: true,
        kms: 5,
        difficulty: 'Easy'
    }
    return (
        <IonFooter>
            <IonToolbar color='dark' >
                <IonGrid color='dark'>
                    <IonRow>
                        <IonCol>
                            <IonRow className="ion-justify-content-center">
                                {input.startPoint ? <IonIcon size="large" icon={checkmarkOutline} /> : <IonLabel className="user-option">--</IonLabel>}
                            </IonRow>
                            <IonRow className="ion-justify-content-center">
                                {input.startPoint ? <IonLabel className="user-choise-label" color="light">Done</IonLabel> : <IonLabel className="empty-input-label">Where do you want to start?</IonLabel>}
                            </IonRow>
                        </IonCol>
                        <IonCol>
                            <IonRow className="ion-justify-content-center">
                                <IonLabel color="light" className="user-option">{input.kms ? input.kms : '--'}</IonLabel>
                            </IonRow>
                            <IonRow className="user-choise ion-justify-content-center">
                                <IonLabel color="light" className="user-choise-label" >{input.kms ? 'Kms' : null}</IonLabel>
                            </IonRow>
                        </IonCol>
                        <IonCol>
                            <IonRow className="ion-justify-content-center">
                                {input.difficulty === 'Hard' ?
                                    <div>
                                        <IonIcon className="drop" icon={waterSharp} size="large" />
                                        <IonIcon className="drop" icon={waterSharp} size="large" />
                                        <IonIcon className="drop" icon={waterSharp} size="large" />
                                    </div> :
                                    input.difficulty === 'Medium' ?
                                        <div>
                                            <IonIcon className="drop" size="large" icon={waterSharp} />
                                            <IonIcon className="drop" size="large" icon={waterSharp} />
                                        </div> :
                                        input.difficulty === 'Easy' ? <IonIcon className="drop" size="large" icon={waterSharp} />
                                            :
                                            <IonLabel className="user-option">--</IonLabel>}
                            </IonRow>
                            <IonRow className="ion-justify-content-center">
                                {input.difficulty ? <IonLabel color="light" className="user-choise-label">{input.difficulty}</IonLabel> 
                                : <IonLabel className="empty-input-label">Choose your level</IonLabel>}
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonGrid>
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
                    <IonButton id="start-button" className="fab-button">
                        <DirectionsRunIcon />
                    </IonButton>
                    <IonButton className="footer-button-right">
                        <IonIcon slot="end" icon={heartOutline} />
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonFooter>
    )
}

export default Footer
