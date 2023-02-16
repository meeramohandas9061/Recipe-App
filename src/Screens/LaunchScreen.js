import react from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text, ImageBackground, SafeAreaView } from "react-native";
import { withNavigation } from "react-navigation"; 

const LaunchScreen = ({navigation}) => {

    return <View style={styles.container}>
          <ImageBackground style={styles.backgroundImage}
            source={require('../Images/food1.jpg')}
           
            >
            </ImageBackground>
            <Text style={styles.name}>Zest!</Text>
        <Text style={styles.titleLine}>Get delicious recipes around the world!</Text>
        <View style={styles.loginButtonView}>
        <TouchableOpacity style={styles.buttonStyle}  

    //    disabled  = { stringMatched ? false : true }
        onPress={() => navigation.navigate('LoginScreen') }
        
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
        opacity: 0.3

    },
    container: {
        flex: 1,
        // justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
        backgroundColor: "black",
    },
    titleLine: {
        color: "#ffff",
        fontSize: 16,
        // marginTop: 500
    },
    buttonStyle: {
        width: 300,
        height: 50,
        backgroundColor: "#FFAC1C",
        borderRadius: 10,
        // paddingTop: 10,
        justifyContent: "center"
       
    },
    loginButtonView: {
        marginTop: 20,
    },
    buttonText: {
        // textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffff",
        
        alignSelf: "center",
    },
    name: {
        color: "#ffff",
        fontSize: 40,
        marginTop: 400,
        marginBottom: 20
    }
});

export default withNavigation(LaunchScreen);
