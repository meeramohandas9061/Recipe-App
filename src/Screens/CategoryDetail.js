import axios from 'axios';
import react, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { withNavigation } from 'react-navigation';



const CategoryDetail = ({navigation}) => {
    let category = navigation.getParam('strCategory')
 let baseURL = "www.themealdb.com/api/json/v1/1/filter.php?c="
    const [categoryDetail, setCategoryDetail] = useState([])

    const getCategoryDetailList = () => {
        const apiURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+(`${category}`)
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) => {
            setCategoryDetail(responseJson.meals)
            console.log(".........",responseJson)
        })
        .catch((error) => {
            console.error(error);
        });
    }

    useEffect (() => {
        getCategoryDetailList()
        
    }, [])
    return <SafeAreaView>
        <FlatList
        keyExtractor={(res) => res.idMeal}
        data={categoryDetail}
        renderItem={({item}) => {
            console.log("item", item.strMeal)
            return (
                <TouchableOpacity onPress={() => navigation.navigate('RecipeDetailScreen', {id: item.idMeal}) }>
                    <View style={styles.conatiner}>
                      <View style={styles.viewStyle}>
                    <Image style={styles.image}
                    source={{uri: item.strMealThumb}}
                />
                <Text style={styles.title}>{item.strMeal}</Text>
                </View>
                </View>
           </TouchableOpacity>
            
              
                
            );
        }}
        />
    </SafeAreaView>
};

const styles = StyleSheet.create({
    conatiner: {
        // backgroundColor: "#DBF0F9",
        padding: 15
    },
    viewStyle: {
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#BEBEBE"
    },
    image: {
        height: 150,
        width: 350,
        borderRadius: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        alignSelf: "center", 
        paddingTop: 15
        
        
    }
});

export default withNavigation(CategoryDetail);