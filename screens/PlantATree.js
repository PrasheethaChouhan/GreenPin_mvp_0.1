import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  CheckBox,
} from 'react-native';
import firebase from 'firebase'
import db from '../config'
import { Header, Icon, Badge } from 'react-native-elements';
export default class PlantATree extends React.Component {
  constructor() {
    super();
    this.state = {
      username:firebase.auth().currentUser.email,
      event: '',
      occasion: '',
      isVisible: false,
      foundation: '',
      date: '',
    };
  }
  addPlant=()=>{
    db.collection('myPlants').add({
      event:this.state.event,
      date:this.state.date,
      occasion:this.state.occasion,
      foundation:this.state.foundation,
    })
    return  Alert.alert( 'Plant  Added Successfully')}

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header
          centerComponent={{
            text: 'GreenPin',
            style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
          }}
          rightComponent={
            <Icon
              name="paw"
              type="font-awesome"
              color="#696969"
              onPress={() => {
                this.props.navigation.navigate('NotificationScreen');
              }}
            />
          }
          backgroundColor="#eaf8fe"
        />

        <View style={styles.modalContainer}>
          <ScrollView style={{ width: '100%' }}>
            <KeyboardAvoidingView
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  fontSize: 30,
                  color: '#73FA79',
                  margin: 50,
                }}>
                Plant A Tree
              </Text>
              <TextInput
                style={styles.formTextInput}
                placeholder={'Event name'}
                placeholderTextColor="white"
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    event: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Occasion'}
                placeholderTextColor="white"
                maxLength={8}
                onChangeText={(text) => {
                  this.setState({
                    occasion: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'Foundation or NGO'}
                placeholderTextColor="white"
                maxLength={10}
                onChangeText={(text) => {
                  this.setState({
                    foundation: text,
                  });
                }}
              />
              <TextInput
                style={styles.formTextInput}
                placeholder={'DD/MM/YYYY'}
                placeholderTextColor="white"
                multiline={true}
                keyboardType={'numbers-and-punctuation'}
                onChangeText={(text) => {
                  this.setState({
                    date: text,
                  });
                }}
              />
                <TextInput
                style={styles.formTextInput}
                placeholder={'Gift it to someone'}
                placeholderTextColor="white"
                multiline={true}
                keyboardType={'default'}
              />
              

              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  //    onPress={()=>
                  //     this.userSignUp(this.state.username, this.state.password, this.state.confirmPassword)
                  //   }
                >
                  <Text style={styles.registerButtonText}>Plant</Text>
                </TouchableOpacity>
              </View>
              <View style={{ color: '#89814D' }}>
                <TouchableOpacity
                //   style={styles.cancelButton}
                //    onPress={()=>this.setState({"isVisible":false})}
                >
                  <Text style={{ color: '#73FA79', fontSize:15, marginTop:10  }}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
    borderColor: '#73FA79',
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
    backgroundColor: 'blue',
    elevation: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },

  modalContainer: {
    flex: 1,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B2E0F',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderColor: 'white',
    color: 'white',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  registerButton: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    borderColor: '#73FA79',
  },
  registerButtonText: {
    color: '#73FA79',
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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
    