import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
export default class Home extends Component {
    constructor(){
        super();
        this.state = { 
            data: 0
        }
    }
   change(x){ 
    //    this.setState({data: x * 5})  
    return x*10;
   }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home React</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
