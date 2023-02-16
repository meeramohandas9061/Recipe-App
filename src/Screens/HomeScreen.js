import react, {useEffect, useState} from "react";
import { View, Text } from "react-native";
import RecipeTile from "../Components/RecipeTile";
import RecipeCategory from "../Components/RecipeCategory";

const HomeScreen = () => {
const [recipes, setRecipes] = useState([]);
const [mealCategory, setMealCategory] = useState([]);

    const getRecipieList = () => {
        const apiURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=American"
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) => {
              setRecipes(responseJson.meals)
        })
        .catch((error) => {
            console.error(error);
        });
    }
    const getCategoryList = () => {
        const apiURL = "https://www.themealdb.com/api/json/v1/1/categories.php"
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) => {
            setMealCategory(responseJson.categories)
        })
        .catch((error) => {
            console.error("error", error);
        });
    }


    useEffect(() => {
        getRecipieList()
        getCategoryList()
    }, [])

    return <View>
        <RecipeCategory categoryData={mealCategory}/>
        <RecipeTile data={recipes} />
    </View>

};

export default HomeScreen;