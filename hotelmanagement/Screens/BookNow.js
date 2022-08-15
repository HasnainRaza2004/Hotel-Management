import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import database from '@react-native-firebase/database';



export default function BookNow({ navigation ,route}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cnic, setCnic] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const [hotelName, sethotelName] = useState('')
    const [numberOfDays, setNumberOfDays] = useState('')
    const [numberOfPersons, setNumberOfPersons] = useState('')
    const [bankName, setbankName] = useState('')
    const [creditCardNumber, setCreditCardNumber] = useState('')
    const [creditCardCode, setcreditCardCode] = useState('')
    const [creditCardExpiryDate, setCreditCardExpiryDate] = useState('')


    let createUser = () => {
        let uid = route.key
        let obj = {
            name,
            email,
            cnic,
            address,
            contact,
            hotelName,
            numberOfDays,
            numberOfPersons,
            bankName,
            creditCardNumber,
            creditCardCode,
            creditCardExpiryDate,
        }
        console.log(obj)
        console.log(route)
        database().ref('/Bookings/' + uid)
            .set(obj).then(() => console.log('Data set'));
    }
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: "#dda15e" }}>

                <View style={{ flex: 0.3, marginTop: 5 }}>

                    <Text style={{ textAlign: "center", color: "#343a40", fontSize: 30, fontWeight: "bold", marginTop: 20 }}>BOOKING DETAILS</Text>
                </View>


                <View style={{ flex: 0.6, alignItems: "center", marginTop: 40 }}>
                    <TextInput value={name} onChangeText={(e) => setName(e)} placeholder='Enter Name' placeholderTextColor="black" style={Styles.inputs} />
                    <TextInput value={email} onChangeText={(e) => setEmail(e)} placeholder='Enter Email' placeholderTextColor="black" style={Styles.inputs} />
                    <TextInput value={cnic} onChangeText={(e) => setCnic(e)} placeholder='Enter Cnic' placeholderTextColor="black" style={Styles.inputs} />
                    <TextInput value={address} onChangeText={(e) => setAddress(e)} placeholder='Enter Address' placeholderTextColor="black" style={Styles.inputs} />
                    <TextInput value={contact} onChangeText={(e) => setContact(e)} placeholder='Enter Contact' placeholderTextColor="black" style={Styles.inputs} />
                    <TextInput value={hotelName} onChangeText={(e) => sethotelName(e)} placeholder='Enter Hotel Name' placeholderTextColor="black" style={Styles.inputs} />
                    <TextInput value={numberOfDays} onChangeText={(e) => setNumberOfDays(e)} placeholder='Enter No Of Days' placeholderTextColor="black" style={Styles.inputs} />
                    <TextInput value={numberOfPersons} onChangeText={(e) => setNumberOfPersons(e)} placeholder='Enter Number Of Persons' placeholderTextColor="black" style={Styles.inputs} />
                    <Text style={{ textAlign: "center", color: "#343a40", fontSize: 30, fontWeight: "bold", marginTop: 20,marginBottom: 40 }}>PAYMENT DETAILS</Text>
                    <TextInput value={bankName} onChangeText={(e) => setbankName(e)} placeholder='Enter Bank Name' placeholderTextColor="black" style={Styles.inputs} />
                    <TextInput value={creditCardNumber} onChangeText={(e) => setCreditCardNumber(e)} placeholder='Enter Credit Card Number' placeholderTextColor="black" style={Styles.inputs} />
                    <TextInput value={creditCardCode} onChangeText={(e) => setcreditCardCode(e)} placeholder='Enter Credit Card Code' placeholderTextColor="black" style={Styles.inputs} />
                    <TextInput value={creditCardExpiryDate} onChangeText={(e) => setCreditCardExpiryDate(e)} placeholder='Enter Expiry' placeholderTextColor="black" style={Styles.inputs} />
                
                </View>

                <View style={{ flex: 0.4, alignItems: "center" }}>

                    <TouchableOpacity onPress={createUser} style={Styles.button}>
                        <Text style={{ color: "black", fontSize: 18, padding: 15 }}>Book Now</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </ScrollView>
    )
}
const Styles = StyleSheet.create({
    button: {
        backgroundColor: "#ffd7ba",
        width: 150,
        height: 60,
        borderRadius: 20,
        marginBottom: 150,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15
    },
    inputs: {
        color: "black",
        width: 250,
        height: 50,
        marginBottom: 15,
        paddingLeft: 15,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        borderRadius: 30,
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,

    },
});