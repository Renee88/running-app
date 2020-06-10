import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header,Icon, Avatar} from 'react-native-elements';

const MainHeader = () => {
  return (
    <Header backgroundColor='#fff' containerStyle={{height: 80}}>
      <Icon name='menu' size={30} color='#222222'/>
      <Icon name="running" type="font-awesome-5" size={50} color='#4AEC8B' iconStyle={styles.icon}/>
      <Avatar size='medium' rounded icon={{name: 'user-circle', type: 'font-awesome', color: '#222222', size: 30}}></Avatar>
    </Header>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon:{
    marginBottom: 10
  }
});
