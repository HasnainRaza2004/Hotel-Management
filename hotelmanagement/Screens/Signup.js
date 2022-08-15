import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View ,StyleSheet} from "react-native";
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';



export default function SignUp({navigation}) {
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')

    let createUser = () =>{
let obj = {
name,
email,
password
}
auth()
  .createUserWithEmailAndPassword(email, password)
  .then((res) => {
    console.log('User account created & signed in!');
    console.log(obj)
    database().ref('/users/' + res.user.uid)
    .set(obj)
  .then(() => console.log('Data set.'),navigation.navigate('MainScreen'));
})
.catch(error => {
  if (error.code === 'auth/email-already-in-use') {
    console.log('That email address is already in use!');
  }
  
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#fefae0" }}>

            <View style={{ flex: 0.3, marginTop: 22 }}>

                <Text style={{ fontSize: 25, textAlign: "center", color: "black", fontSize: 45, fontWeight: "bold", marginTop: 18 }}>Sign Up</Text>
            </View>

            <View style={{ flex: 0.6, alignItems: "center", marginTop: 36 }}>
                <TextInput placeholder='Enter Name' value={name} onChangeText={(e)=>setName(e)} placeholderTextColor="black" style={Styles.inputs} />
                {/* <Text><Icon name='delete' size={30} color="black" /></Text> */}


                <TextInput value={email} onChangeText={(e)=>setEmail(e)} placeholder='Enter Email' placeholderTextColor="black" style={Styles.inputs} />
                <TextInput value={password} onChangeText={(e)=>setPassword(e)} placeholder='Enter Password' secureTextEntry={true} placeholderTextColor="black" style={Styles.inputs} />
            </View>


            <View style={{ flex: 0.4, alignItems: "center" }}>

                <TouchableOpacity onPress={createUser} style={Styles.button}>
                    <Text style={{ color: "black", fontSize: 18, padding: 15 }}>Sign Up</Text>
                </TouchableOpacity>

            </View>

        </View>


    )
}
const Styles = StyleSheet.create({
  button:{
  backgroundColor:"#06d6a0",
  width:150,
  height:60,
  borderRadius:20,
  marginBottom:150,
  alignItems:"center",
  justifyContent:"center",
  marginTop:60
  },
  inputs:{
    color:"black",
    width:250,
    height:60,
    marginBottom:20,
    paddingLeft:15,
    backgroundColor:"white",
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  borderRadius:30,
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  
  elevation: 11,
    
  },
  });