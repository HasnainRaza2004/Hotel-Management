import React, { useEffect, useState } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'
import database from '@react-native-firebase/database';

const Profile = () => {
  const [array,setArray] = useState([])
  useEffect(() => {
    database()
    .ref('users')
    .once('value')
    .then(res => {
      let arr = Object.values(res.val())
      setArray(arr)
      console.log(res.val());
    });
  }, []);

  const editName =()=>{

  }
  return (
    <View style={styles.mainContainer}>
     {array.map((e,i) => (
    <>
    <View style={styles.userDetailcontainer} key={i}>
    <View style={styles.nameContainer} >
    <Text style={styles.name}>Name : {e.name}</Text>
    <TouchableOpacity
                style={styles.button}
                onPress={editName}
              >
                <Text style={{ fontSize: 16, }}>Edit</Text>
              </TouchableOpacity>
    </View>
    <View style={styles.emailContainer}>
    <Text style={styles.email}>Email : {e.email}</Text>
    <TouchableOpacity
                style={styles.button}
                onPress={editName}
              >
                <Text style={{ fontSize: 16, }}>Edit</Text>
              </TouchableOpacity>
    </View>
    <View style={styles.passwordContainer}>
    <Text style={styles.password}>Password : {e.password}</Text>
    <TouchableOpacity
                style={styles.button}
                onPress={editName}
              >
                <Text style={{ fontSize: 16, }}>Edit</Text>
              </TouchableOpacity>
    </View>
    </View>
    </>
    ))}
    </View>

  )
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    backgroundColor:"#caf0f8",
    alignItems:"center"
  },
name: {
    fontSize: 15,
    color: "#14213d",
    marginTop: 40,
  },
email: {
  fontSize: 15,
  color: "#14213d",
  marginTop: 40,

  },
password: {
  fontSize: 15,
  color: "#14213d",
  marginTop: 40,
  },
button: {
    width: 80,
    height: 25,
    marginTop:40,
    marginLeft:5,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.10,
    shadowRadius: 12.00,

    elevation: 17,
  },
  userDetailcontainer:{
    alignItems:"center"
  },
  nameContainer:{
    flexDirection:"row"
  },
  emailContainer:{
    flexDirection:"row"
  },
  passwordContainer:{
    flexDirection:"row"
  }
})
export default Profile
