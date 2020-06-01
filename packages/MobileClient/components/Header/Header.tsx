import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'


const Header = () => {
  return (
    <View style={styles.container}>
        <Icon name='running' size={55} color="white"/>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center' 
  },
  text:{
      color: 'white'
  }
});
