import react from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const { width, fontScale } = Dimensions.get("window");

const SingleRecipeTile = ({recipieData}) => {
  

   
    return <View style={styles.conatiner}>
        <View style={styles.tileStyle}>
        <Image style={styles.image}
        source={{uri: recipieData.strMealThumb}}
        />
        <Text style={styles.titleName}>{recipieData.strMeal}</Text>
        </View>
        
    </View>
};

const styles = StyleSheet.create({
    conatiner: {
        
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        padding: 15,
        alignItems: 'center',
        // backgroundColor: '#b4f4ff',
       
       
    },
    tileStyle: {
       
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#D3D3D3"
       
    }, 
    image: {
        height: 150,
        width: 350,
        borderRadius: 10,
      

    },
    titleName: {
        fontSize: 15 ,
        fontWeight: 'bold',
        paddingTop: 5,
    
        
        
    }

});

export default SingleRecipeTile;