import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
//import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      isVisible: false,
      name: '',
      displayName: '',
      confirmPassword: '',
    };
  }

  userLogin = (username, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        this.props.navigation.navigate('Home');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  userSignUp = (username, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("Password doesn't match.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(username, password)
        .then((response) => {
          db.collection('users').add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            mobile_number: this.state.mobileNumber,
            username: this.state.username,
            address: this.state.address,
          });
          return Alert.alert('User Added Successfully', '', [
            { text: 'OK', onPress: () => this.setState({ isVisible: false }) },
          ]);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

  showModal = () => (
    <Modal
      animationType="fade"
      transparent={true}
      visible={this.state.isVisible}>
      <View style={styles.modalContainer}>
        <ScrollView style={{ width: '100%' }}>
          <KeyboardAvoidingView
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                fontSize: 30,
                color: 'white',
                margin: 50,
              }}>
              Registration
            </Text>
            <TextInput
              style={styles.formTextInput}
              placeholder={'Name'}
              placeholderTextColor={'#d1da3f'}
              onChangeText={(text) => {
                this.setState({
                  name: text,
                });
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder={'Display Name'}
              placeholderTextColor={'#d1da3f'}
              maxLength={8}
              onChangeText={(text) => {
                this.setState({
                  displayName: text,
                });
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder={'EmailId'}
              placeholderTextColor={'#d1da3f'}
              keyboardType={'email-address'}
              onChangeText={(text) => {
                this.setState({
                  emailId: text,
                });
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder={'Password'}
              placeholderTextColor={'#d1da3f'}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder={'Confrim Password'}
              placeholderTextColor={'#d1da3f'}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  confirmPassword: text,
                });
              }}
            />
            <View style={styles.modalBackButton}>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() =>
                  this.userSignUp(
                    this.state.username,
                    this.state.password,
                    this.state.confirmPassword
                  )
                }>
                <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalBackButton}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => this.setState({ isVisible: false })}>
                <Text style={{ color: 'white' }}>Cancel</Text>
              </TouchableOpacity>
                </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Modal>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {this.showModal()}
        </View>
        <ScrollView>
        <View style={{marginTop:50, alignSelf:'flex-end'}}>
              <Text style={{ fontSize:25, marginRight:15, marginTop:10, color:'#4ca455' }} onPress={() => {this.props.navigation.navigate('Home')}}>
                Skip
              </Text> 
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={{ width: 200, height: 300, marginLeft: 10, marginTop: 10 }}
          />
          </View>
        <View style={styles.buttonContainer}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 55,
            }}>
            USERNAME
          </Text>
          <View style={{ alignItems: 'center' }}>
            <TextInput
              style={styles.loginBox}
              keyboardType={'email-address'}
              color="white"
              onChangeText={(text) => {
                this.setState({
                  username: text,
                });
              }}
            />
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 55,
            }}>
            PASSWORD
          </Text>
          <View style={{ alignItems: 'center' }}>
            <TextInput
              style={styles.loginBox}
              secureTextEntry={true}
              color="white"
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={[styles.button, { marginBottom: 10 }]}
              onPress={() => {
                this.userLogin(this.state.username, this.state.password);
              }}>
              <Text
                style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState({ isVisible: true });
              }}>
              <Text
                style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                SIGN UP
              </Text>
            </TouchableOpacity>
            <View style={styles.modalBackButton}>
              <View style={{ marginRight:150, marginTop:10}}>
              <Image
                source={require('../assets/google2.png')}
                  fadeDuration={0}
                  style={{ width: 50, height: 50, marginRight:0, marginTop:10 }}
              />
              </View>
              <View style={{ marginRight:-20, marginTop:-60, justifyContent:'center', alignItems:'center'}}> 
              <Image
                source={require('../assets/facebook.png')} 
                  fadeDuration={0}
                  style={{ width: 50, height: 50, marginRight:20, marginTop:10 }}
              />
              </View>
              <View style={{ marginRight:-50, marginTop:-65, justifyContent:'flex-end', alignItems:'flex-end'}}>
              <Image 
                source={require('../assets/apple.png')}
                  fadeDuration={0}
                  style={{ width: 62, height: 62, marginRight:40, marginTop:10 }}
              />
              </View>
              </View>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#092f1c',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 60,
    fontWeight: '300',
    // fontFamily:'AvenirNext-Heavy',
    color: 'green',
  },
  loginBox: {
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor: 'green',
    fontSize: 20,
    marginBottom: 20,
    marginTop: 5,
  },
  button: {
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: 'green',
    elevation: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d9345',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
  },
  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderColor: 'black',
    color: '#d1da3f',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  registerButton: {
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
