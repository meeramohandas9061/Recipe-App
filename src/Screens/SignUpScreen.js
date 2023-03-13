import react, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ImageBackground, KeyboardAvoidingView } from "react-native";
import {withNavigation, SafeAreaView} from 'react-navigation'
import { Assets } from "react-navigation-stack";
import {auth} from "../Screens/Firebase"



const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const handleSignup = () => {
  auth
  .createUserWithEmailAndPassword(email, password)
  .then(userCredentials => {
    const user = userCredentials.user;
    console.log(user.email);
    if (user) {
        navigation.navigate('Home') 
    } else {
        alert("something went wrong")
    }
  })
  .catch(error => alert(error.message));
}

// useEffect(() => {
//  const unSubscribe =  auth.onAuthStateChanged(user => {
//         if (user) {
//             navigation.navigate('Home') 
//         } else {
//             alert()
//         }
//     })
//     return unSubscribe;
// }, [])


return (
    
    <View style={styles.container}>
      
            {/* <ImageBackground style={styles.backgroundImage}
            source={require('../Images/foodImage.jpg')}
           
            >
            </ImageBackground> */}
        

    <View style={[styles.TextViewStyle, styles.shadowProp]}>
        <View>
        <Text style={styles.createAccountText}>Create your Account!</Text>
        </View>
    
    
        <View style={styles.viewEmailTextInput}>
        <TextInput 
        style={styles.emailTextInputStyle}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="email"
        placeholderTextColor="#B0B0B0"
        clearButtonMode="always"
        />
</View>
<View style={styles.viewPasswordTextInput}>
         <TextInput 
        style={styles.passwordTextInputStyle}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="password"
        placeholderTextColor="#B0B0B0"
        secureTextEntry
        clearButtonMode="always"
        />
        </View>
        <View style={[styles.registerButtonView, styles.shadowProp]}>
        <TouchableOpacity style={styles.buttonStyle}  

    //    disabled  = { stringMatched ? false : true }
        onPress={handleSignup}
        
        >
            <Text style={styles.buttonText}>Register</Text>

        </TouchableOpacity>
        </View>
        <View style={styles.registerView}>
            <Text style={styles.accountView}>Already have an account?</Text>
        <TouchableOpacity 
    onPress={() => navigation.navigate('LoginScreen') }
    
    >
        <Text style={styles.loginButtonText}>Login</Text>

    </TouchableOpacity>
        </View>
      
        </View>
   
       
        
     
    </View>
    )
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
        justifyContent: 'center',
    alignItems: 'center',
    // padding: 50,
        backgroundColor: "#FFAC1C",
    },
    innerView: {
        alignItems: "center",
        

    },
    emailTextInputStyle: {
        width: 300,
        height: 50,
        borderWidth: 1.5,
        borderRadius: 25,
        padding: 10,
        // color: "#ffff",
        borderColor: "#FFAC1C",
    },
    passwordTextInputStyle: {
        width: 300,
        height: 50,
        borderWidth: 1.5,
        borderRadius: 25,
        padding: 10,
        // color: "#ffff",
        borderColor: "#FFAC1C"
    },
    buttonStyle: {
        width: 250,
        height: 50,
        backgroundColor: "#FFAC1C",
        borderRadius: 25,
        paddingTop: 10,
       
    },
    buttonText: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
        color: "#ffff",

    },
    createAccountText: {
        fontSize: 32,
        fontWeight: "bold",
         color: "#FFAC1C",
        
         paddingBottom: 20,
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
        //  height: 530,
         borderRadius: 15,
       flex: 0.7,

    },
    registerButtonView: {
        marginTop: 50,
    },
    loginButtonText: {
        color: "#FFAC1C",
        paddingLeft: 5,
        fontSize: 18
    },
    registerView: {
        flexDirection: "row",
        padding: 20,
    },
    accountView: {
        fontSize: 18
    },
    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
      },
});

export default withNavigation(SignUpScreen);