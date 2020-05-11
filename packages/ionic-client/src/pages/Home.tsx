import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <ExploreContainer />
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Home;


