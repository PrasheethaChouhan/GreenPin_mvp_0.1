
import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput,KeyboardAvoidingView,TouchableOpacity,Alert, ToastAndroid } from 'react-native';
import * as SMS from 'expo-sms';


import db from '../config';
import firebase from 'firebase';

export default class CardScreen extends Component{
    constructor()
    {
        super();
        this.state=
        {
            number:[]
        }
    }

    oncallSms=async  () => {
         var em=firebase.auth().currentUser.email;
         console.log(em);
        db.collection('saviours').where('friend_email','==',em).get()
    .then(snapshot=>{
      snapshot.forEach(doc=>{
        this.setState({
          number   : doc.data().mobile_number,
         
        })
      })
    });
    if(this.state.number.length>0)
     this.oncallSms2();
      
      }

    oncallSms2=async()=>
    {
        const { result } = await SMS.sendSMSAsync(
            [ this.state.number],
            'Your Plant XYZ requires more attention,he is about die and is lack manure by 25'
           
        
           
          );
    }
    
    render()
{
    

    return(
      <View>
           <TouchableOpacity
        style={{
          backgroundColor: "#CC5500",
          marginLeft: 75,
          marginTop: 100,
          borderWidth: 2,
          borderColor: 'cyan',
          alignItems: 'center',
          justifyContent: 'center',
          width: 250,
          height: 40,
          borderRadius: 50,
        }}
        onPress={() => {this.oncallSms()  }}>
        <Text
          style={{
            fontSize: 20,
          }}>
        SOS
        </Text>
      </TouchableOpacity>
      </View>
    )
}
}