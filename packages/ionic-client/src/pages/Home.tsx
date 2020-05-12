import React from 'react';
import dotenv from 'dotenv'
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MapContainer from '../components/MapContainer/MapContainer';
import './Home.css';
dotenv.config()


const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <MapContainer />
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Home;


