'use strict'

import React, { Component } from 'react';
import {
  TextInput,
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ToastAndroid,
  AlertIOS
} from 'react-native';
import AV from 'leancloud-storage';


export default class Login extends Component {
  constructor(props){
    super(props);
    this.props = {
      username: 'guest',
      password: 'guest',
    };
  }

  componentDidMount() {
    AV.User.logOut().then(()=>console.log('user logged out.'));
  }

  login() {
    let user = new AV.User();
    user.set("username", this.props.username);
    user.set("password", this.props.password);
    user.logIn().then((user) => {
      console.log('User logged in:', user);
      this.props.actions.login();
    }).catch(function(error) {
      console.log("Login Error: ", error);
      if (Platform.OS === 'android') {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      } else {
        AlertIOS.alert(
          error.message,
          null,
          [
            {text: 'OK'},
          ]
        );
      }
    });
  }

  signup() {
    let user = new AV.User();
    user.set("username", this.props.username);
    user.set("password", this.props.password);
    user.signUp().then((user) => {
      console.log('User signed up:', user);
      this.props.actions.login();
    }).catch(function(error) {
      console.log("Signup Error: ", error);
      if (Platform.OS === 'android') {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      } else {
        AlertIOS.alert(
          error.message,
          null,
          [
            {text: 'OK'},
          ]
        );
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}></View>
        <Text style={styles.logo}>
          登录
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(username) => this.setState({username})}
          value={this.props.username}
          placeholder="Username"
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          onChangeText={(password) => this.setState({password})}
          value={this.props.password}
          placeholder="Password"
        />
        <View style={styles.btnsWrapper}>
          <TouchableOpacity
            style={[ButtonStyles.btn, styles.button, styles.loginButton]}
            onPress={this.login.bind(this)}>
            <Text style={[ButtonStyles.btnText, styles.buttonText, styles.loginButtonText]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[ButtonStyles.btn, styles.button, styles.registerButton]}
            onPress={this.signup.bind(this)}>
            <Text style={[ButtonStyles.btnText, styles.buttonText]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:3}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 4,
  },
  logo: {
    fontSize: 32,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60
  },
  textInput: {
    fontSize: 20,
    margin: 4,
    height: 36,
    borderBottomWidth: 0.5,
    borderBottomColor: '#666',
  },

  btnsWrapper: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    flex: 1,
    margin: 4,
    borderRadius: 4,
  },
  loginButton: {
    backgroundColor: 'green',
  },
  registerButton: {
    borderWidth: 0.5,
    borderColor: 'green'
  },
  buttonText: {
    flex: 1,
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  loginButtonText: {
    color: 'white'
  }
});
import ButtonStyles from './ButtonStyles';
