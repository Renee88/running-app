import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react'
import dotenv from 'dotenv'
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MapContainer from '../components/MapContainer/MapContainer';
import './Home.css';
dotenv.config()


export const Home: React.FC = (props) => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <MapContainer {...props}/>
      </IonContent>
      <Footer />
    </IonPage>
  );
};


export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_MAP}`,
  language: 'he'
})(Home)


