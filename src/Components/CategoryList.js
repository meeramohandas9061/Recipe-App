import react from 'react'
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native'


const CategoryList = ({category}) => {

    return <SafeAreaView style={styles.container}>
        <Image style = {styles.image}
        source={{uri: category.strCategoryThumb}}
        />
       
        <Text style={styles.title}>{category.strCategory}</Text>
       
        
    </SafeAreaView>
};

const styles = StyleSheet.create({

    container: {
        // backgroundColor: "#DBF0F9",
       
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 8,
        marginVertical: 5,
        borderColor: "#D3D3D3",
    },
    image: {
        height: 100,
        width: 120,
        borderRadius: 10,
        padding: 20,
        // borderWidth: 1
       
    },
    title: {
        fontSize: 16,
        fontWeight: "bold", 
        alignSelf: "center",
        color: "black",
        
    },
    
});

export default CategoryList;