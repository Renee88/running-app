import React from 'react'
import { IonIcon, IonGrid, IonRow, IonCol, IonLabel, IonItem, IonCard, IonCardContent, IonChip } from '@ionic/react';
import { checkmarkOutline, waterSharp } from 'ionicons/icons'
import './StatusBar.css'

const StatusBar = () => {
    const input = {
        startPoint: true,
        kms: 5,
        difficulty: 'Hard'
    }

    return (
        <div className="chips">
            {input.startPoint ?
                <IonChip color="warning" outline={true} id="track" className="chip">
                    <IonIcon size="large" icon={checkmarkOutline} />
                    <IonLabel>Ready</IonLabel>
                </IonChip>
                : null}
            {input.kms ?
                <IonChip outline={true} id="kilometers" className="chip">
                    <IonLabel className="user-choise" >{input.kms} </IonLabel>
                    <IonLabel className="user-choise-label">Kms</IonLabel>
                </IonChip>
                : null}
            {input.difficulty ?
                <IonChip outline={true} id="difficulty" className="chip">

                    {input.difficulty === 'Hard' ?
                        <div>
                            <IonIcon className="drop" icon={waterSharp} />
                            <IonIcon className="drop" icon={waterSharp} />
                            <IonIcon className="drop" icon={waterSharp} />
                        </div> :
                        input.difficulty === 'Medium' ?
                            <div>
                                <IonIcon className="drop" icon={waterSharp} />
                                <IonIcon className="drop" icon={waterSharp} />
                            </div> :
                            input.difficulty === 'Easy' ? <IonIcon className="drop" icon={waterSharp} />
                                :
                                <IonLabel className="user-choise">--</IonLabel>}
                    <IonLabel className="user-choise-label">{input.difficulty}</IonLabel>
                </IonChip>
                : null}
        </div>
    )
}

export default StatusBar
