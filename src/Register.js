import React, {Component} from 'react';
import { StyleSheet, TextInput, View} from 'react-native';
import Users from './User';
export default class Register extends Component {
    constructor(){
        super();
        this.state = { 
            data: 'test'
        }
    }
    componentDidMount(){
       Users.all().then((data)=>{
           console.warn('check api data',data);
       })
    }
   change(text){ 
   this.setState({data: text})  
   }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        testID={'username'}
        onChangeText={(text) => this.change(text)}
        style={{backgroundColor: 'gray',marginBottom:15}}
        placeholder="Enter Username" />
    
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
