import react from 'react'
import {View, Text, StyleSheet, Image, SafeAreaView, ImageBackground} from 'react-native'


const SingleAreaTile = ({area}) => {

    return <SafeAreaView style={[styles.container, styles.shadowProp]}>
        <View style = {[styles.image]}>
        <Text style={styles.title}>{area.strArea}</Text>
        </View>
       
       
       
        
    </SafeAreaView>
};

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 5 },
        shadowOpacity: 0.7,
        shadowRadius: 3,
      },
    container: {
        backgroundColor: "black",
       opacity: 0.9,
        borderRadius: 10,
        marginHorizontal: 8,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    image: {
        height: 100,
        width: 120,
        borderRadius: 10,
        padding: 20,
        alignSelf: "center",
        alignContent: "center"
        // borderWidth: 1
       
    },
    title: {
        fontSize: 16,
        fontWeight: "bold", 
        alignSelf: "center",
        color: "#ffff",alignSelf: "center",
        alignContent: "center"
        
    },
    
});

export default SingleAreaTile;