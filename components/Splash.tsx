import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

import splash from '../images/splash.png';

interface Iprops {
  navigation?: any;
}

export class Splash extends Component<Iprops> {
  componentDidMount(): void {
    setTimeout(() => {
      this.props.navigation.navigate('BottomTab');
    }, 1000);
  }
  render() {
    return (
      <View style={style.container}>
        <Image source={splash} />
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Splash;
