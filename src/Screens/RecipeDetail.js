import react, {useState, useEffect} from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView} from "react-native";
import {WebView} from 'react-native-webview';
import {withNavigation} from 'react-navigation'
// import BackButton from "../Components/BackButton";


const RecipeDetail = ({navigation}) => {
    let id = navigation.getParam('id')
    const [singleRecipeDetail, setsingleRecipeDetail] = useState([]);
    const [ingredients, setIngredients] = useState([])

    const getRecipeDetail = () => {
        const apiURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+(`${id}`)
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) => {
            setsingleRecipeDetail(responseJson.meals[0])
        })
        .catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        getRecipeDetail()
    }, [])
  console.log(singleRecipeDetail.idMeal)
    return <SafeAreaView>
        {/* <BackButton/> */}
        <ScrollView>
        <Text style={styles.recipeName}> {singleRecipeDetail.strMeal}</Text>
        <Image style={styles.image}
        source={{uri: singleRecipeDetail.strMealThumb}}
        />
        <Text style={styles.ingredientTitle}>Ingredients: </Text>
        <Text style={styles.ingredents}>{singleRecipeDetail.strIngredient1}{'\n'}{singleRecipeDetail.strIngredient2}{'\n'}{singleRecipeDetail.strIngredient3}{'\n'}{singleRecipeDetail.strIngredient4}{'\n'}{singleRecipeDetail.strIngredient5}{'\n'}{singleRecipeDetail.strIngredient6}{'\n'}{singleRecipeDetail.strIngredient7}{'\n'}{singleRecipeDetail.strIngredient8}{'\n'}{singleRecipeDetail.strIngredient9}{'\n'}{singleRecipeDetail.strIngredient10}</Text>
        <Text style={styles.ingredientTitle}>Instruction:</Text>
        <Text style={styles.recipeInstructionText}>{singleRecipeDetail.strInstructions}</Text>
        <TouchableOpacity 
        onPress={() => navigation.navigate('WebViewScreen', {urlLink: singleRecipeDetail.strYoutube})}>
        <Text style={styles.youtubeLink}> Youtube link: {singleRecipeDetail.strYoutube}</Text>

        </TouchableOpacity>
        
        </ScrollView>
    </SafeAreaView>
};

const styles = StyleSheet.create({
    recipeName: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingTop: 20,
        paddingBottom: 15,
        color: '#722F37',
        
    },
    recipeInstructionText: {
        padding: 15,
        textAlign: "justify",
        fontSize: 15

    },
    youtubeLink: {
        fontSize: 16,
        color: 'blue',
        padding: 15
    },
    ingredientTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        padding:10,
        color: '#722F37',
    },
    image: {
        height: 250,
    width: 350,
    alignSelf: "center",
    borderRadius: 10
},
ingredents: {
    fontSize: 15,
    padding: 15
}
});

export default withNavigation(RecipeDetail);