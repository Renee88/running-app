/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MainHeader from './components/MainHeader/MainHeader';
import Footer from './components/Footer/Footer';
import MapContainer from './components/MapContainer/MapContainer';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <View style={styles.mainPage}>
      <MainHeader />
      <MapContainer />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  mainPage: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
