import react from "react";
import { View, StyleSheet, Text, Image, Dimensions, ImageBackground } from "react-native";

const { width, fontScale } = Dimensions.get("window");

const SingleRecipeTile = ({recipieData}) => {
  

   
    return <View style={styles.conatiner}>
        <View style={[styles.tileStyle, styles.shadowProp]}>
        <ImageBackground style={styles.image}
        source={{uri: recipieData.strMealThumb}}
        >
        <View style={styles.titleView}>
        <Text style={styles.titleName}>{recipieData.strMeal}</Text>
        </View>
        </ImageBackground>


        </View>

        </View>
};

const styles = StyleSheet.create({
    conatiner: {
        
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        padding: 10,
        alignItems: 'center',
        // backgroundColor: '#b4f4ff',
       
       
    },
    tileStyle: {
       
        alignItems: "center",
        // borderWidth: 1,
        borderRadius: 20,
        // borderColor: "#D3D3D3",
       
    }, 
    image: {
        height: 350,
        width: 300,
        borderRadius: 20,
      flexDirection: "column-reverse",
      alignItems: "center",
      padding: 10,
      overflow: "hidden"
      

    },
    titleName: {
        fontSize: 15 ,
        fontWeight: 'bold',
        paddingTop: 5,
        color: "#ffff",
        alignSelf: "center",
    
        
        
    },
    titleView: {
        height: 80,
        width: 280,
        backgroundColor: "black",
        opacity: 0.8,
        borderRadius: 10,
        justifyContent: "center",
    },
    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 3,
      },

});

export default SingleRecipeTile;