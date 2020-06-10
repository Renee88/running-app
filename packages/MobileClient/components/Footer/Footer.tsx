import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient'

const Footer = () => {
  return (
    <View style={styles.container}>
      <Button
      ViewComponent={LinearGradient}
      linearGradientProps={{colors:['#4AEC8B','#51F8D4']}}
        icon={
          <Icon
            name="play"
            type="font-awesome-5"
            size={30}
            color='white'
          />
        }
        buttonStyle={styles.button}></Button>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button:{
    height: 100,
    width: 100,
    borderRadius: 50
  }
});
