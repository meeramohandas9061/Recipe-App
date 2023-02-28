import react, {useEffect, useState} from "react";
import { View, Text, ScrollView } from "react-native";
import RecipeTile from "../Components/RecipeTile";
import RecipeCategory from "../Components/RecipeCategory";
import SearchBar from "../Components/SearchBar";
// import AnimatedLoader from "react-native-animated-loader"

const HomeScreen = () => {
const [recipes, setRecipes] = useState([]);
const [mealCategory, setMealCategory] = useState([]);
const [searchTerm, setSearch] = useState("");
const [visible, setVisible] = useState(false);

    const getRecipieList = () => {
        const apiURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=American"
        setVisible(true)
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) => {
            setVisible(false)

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
    const getSearchFoodList = (searchTerm) => {
        const apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="+(`${searchTerm}`)
        console.log(searchTerm)
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson) => {
            setRecipes(responseJson.meals)
        })
        .catch((error) => {
            console.error("error", error);
        });
    }

    useEffect(() => {
        getRecipieList()
        getCategoryList()
    }, [])

    return <>
        <ScrollView>
        <SearchBar
        searchTerm = {searchTerm}
        onChangeText = {setSearch}
        ontermSubmit = {() => getSearchFoodList(searchTerm)}
         />
        <RecipeCategory categoryData={mealCategory}/>
        <RecipeTile data={recipes} />
        </ScrollView>
    </>

};

export default HomeScreen;