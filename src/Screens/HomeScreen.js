import react, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import RecipeTile from "../Components/RecipeTile";
import RecipeCategory from "../Components/RecipeCategory";
import SearchBar from "../Components/SearchBar";
import { auth } from "../Services/Firebase";
import AreaList from "../Components/AreaList";
import IngredientsList from "../Components/Ingredients List";

const HomeScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [mealCategory, setMealCategory] = useState([]);
  const [searchTerm, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState({ email: "" });
  const [areas, setAreas] = useState([]);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  const signOut = () => {
    auth.signOut().then(() => navigation.navigate("LoginScreen"));
  };

  const getRecipieList = () => {
    const apiURL =
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=American";
    setVisible(true);
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setVisible(false);

        setRecipes(responseJson.meals);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getCategoryList = () => {
    const apiURL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setMealCategory(responseJson.categories);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  const getSearchFoodList = (searchTerm) => {
    const apiURL =
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + `${searchTerm}`;
    console.log(searchTerm);
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setRecipes(responseJson.meals);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const getAreaList = () => {
    const apiURL = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setAreas(responseJson.meals);
        console.log(responseJson.meals);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  useEffect(() => {
    getRecipieList();
    getCategoryList();
    getAreaList();
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    console.log(user.email);
  }, []);

  return (
    <>
      <ScrollView>
        <TouchableOpacity style={styles.logoutButton} onPress={() => signOut()}>
          <Image
            style={styles.logoutImage}
            source={require("../../assets/Images/logout.png")}
          />
        </TouchableOpacity>
        <Text style={styles.username}>Hi!</Text>
        <Text style={styles.titleStyle}>What food do you want to cook?</Text>
        <SearchBar
          searchTerm={searchTerm}
          onChangeText={setSearch}
          ontermSubmit={() => getSearchFoodList(searchTerm)}
        />
        <RecipeCategory categoryData={mealCategory} />
        <RecipeTile data={recipes} />

        <View style={[styles.ingredientsView, styles.shadowProp]}>
          <TouchableOpacity
            onPress={() => navigation.navigate("IngredientScreen")}
          >
            <ImageBackground
              style={styles.IngredientImage}
              imageStyle={{ borderRadius: 20 }}
              source={require("../../assets/Images/food1.jpg")}
            >
              <Text style={styles.ingredientsText}>Popular Ingredients</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <AreaList areaData={areas} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  IngredientImage: {
    height: 160,
    width: Dimensions.get("window").width - 40,
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor: "black",
  },
  titleStyle: {
    fontSize: 14,
    paddingLeft: 20,
    paddingBottom: 10,
    color: "#808080",
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: -40,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  logoutImage: {
    height: 30,
    width: 30,
    borderRadius: 25,
    marginRight: 10,
  },
  logoutButton: {
    marginTop: 70,
    flexDirection: "row-reverse",
    padding: 5,
  },
  container: {
    flex: 0.5,
    backgroundColor: "red",
  },
  ingredientsButton: {
    // width: 250,
    // height: 150,
    backgroundColor: "black",
    borderRadius: 16,
  },
  ingredientsText: {
    color: "#ffff",
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  ingredientsView: {
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
});

export default HomeScreen;
