import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react'
import dotenv from 'dotenv'
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MapContainer from '../components/MapContainer/MapContainer';
import './Home.css';
import { attachProps } from '@ionic/react/dist/types/components/utils';
dotenv.config()


export const Home: React.FC = (props) => {
  console.log(props)
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


