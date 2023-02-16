import react, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground } from "react-native";
import {withNavigation, SafeAreaView} from 'react-navigation'
import { Assets } from "react-navigation-stack";


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
console.log(".................................",email)
const stringMatched = false
const login = () => {
    if (password && email != "") {
        console.log("button enabled.......")
stringMatched = true
    } else {
        stringMatched = false
        console.log("button disabled.......")
    }
}
    return <View style={styles.container}>
      
            <ImageBackground style={styles.backgroundImage}
            source={require('../Images/foodImage.jpg')}
           
            >
            </ImageBackground>
        <Text style={styles.welcomeText}>LOGIN</Text>

    <View style={styles.TextViewStyle}>

    
        <View style={styles.viewEmailTextInput}>
        <TextInput 
        style={styles.emailTextInputStyle}
        onChangeText={setEmail}
        value={email}
        placeholder="email"
        placeholderTextColor="#B0B0B0"
        />
</View>
<View style={styles.viewPasswordTextInput}>
         <TextInput 
        style={styles.passwordTextInputStyle}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
        placeholderTextColor="#B0B0B0"
        />
        </View>
        </View>
   
        <View style={styles.loginButtonView}>
        <TouchableOpacity style={styles.buttonStyle}  

    //    disabled  = { stringMatched ? false : true }
        onPress={() => navigation.navigate('Home') }
        
        >
            <Text style={styles.buttonText}>LOGIN</Text>

        </TouchableOpacity>
        </View>
        
     
    </View>
};

const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.6

    },
    container: {
        flex: 1,
        // justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
        // backgroundColor: "#702963",
    },
    innerView: {
        alignItems: "center",
        

    },
    emailTextInputStyle: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        // color: "#ffff",
        borderColor: "#A0A0A0",
    },
    passwordTextInputStyle: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        // color: "#ffff",
        borderColor: "#A0A0A0"
    },
    buttonStyle: {
        width: 180,
        height: 40,
        backgroundColor: "#ffff",
        borderRadius: 20,
        paddingTop: 10,
       
    },
    buttonText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#702963",

    },
    welcomeText: {
        fontSize: 40,
        fontWeight: "bold",
         color: "#ffff",
         marginTop: 60,
         paddingBottom: 20
    },
    viewTextInput: {
        // padding: 15
    },
    viewEmailTextInput: {
        // paddingBottom: 15,
        // paddingTop: 18
        marginBottom: 15
    },
    viewPasswordTextInput: {
        // paddingBottom: 50
    },
    TextViewStyle: {
        backgroundColor: "#ffff",
        alignItems: "center",
        justifyContent: "center",
         width: 350,
         height: 200,
         borderRadius: 15,
    },
    loginButtonView: {
        marginTop: 90,
    }
});

export default withNavigation(LoginScreen);