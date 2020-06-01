import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Button } from 'react-native-elements';


const Footer = () => {
  return (
    <View style={styles.container}>
      <Button icon={<Icon name='play' size={30} style={styles.icon} />}/>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
      flex: 2
  },
  icon:{
      color: 'white',
      margin: 'auto'
  }
});
