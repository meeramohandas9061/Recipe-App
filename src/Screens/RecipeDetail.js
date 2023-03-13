import react, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { WebView } from "react-native-webview";
import { withNavigation } from "react-navigation";

const RecipeDetail = ({ navigation }) => {
  let id = navigation.getParam("id");
  const [singleRecipeDetail, setsingleRecipeDetail] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [isDisabled, setDisable] = useState(true);

  const getRecipeDetail = () => {
    const apiURL =
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + `${id}`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setsingleRecipeDetail(responseJson.meals[0]);
        console.log(responseJson.meals[0])
      })
      .catch((error) => {
        // console.log("....................................",error);
        alert(error)
      });
  };

  function saveRecipes() {}

  useEffect(() => {
    getRecipeDetail();
  }, []);
  console.log(singleRecipeDetail);
  return (
    <SafeAreaView style={{ backgroundColor: "#ffff" }}>
      <ScrollView>
        <Text style={styles.recipeName}> {singleRecipeDetail.strMeal}</Text>
        <Image
          style={styles.image}
          source={{ uri: singleRecipeDetail.strMealThumb }}
        />
        <Text style={styles.ingredientTitle}>Ingredients: </Text>
        <Text style={styles.ingredents}>
          {singleRecipeDetail.strIngredient1}
          {"\n"}
          {singleRecipeDetail.strIngredient2}
          {"\n"}
          {singleRecipeDetail.strIngredient3}
          {"\n"}
          {singleRecipeDetail.strIngredient4}
          {"\n"}
          {singleRecipeDetail.strIngredient5}
          {"\n"}
          {singleRecipeDetail.strIngredient6}
          {"\n"}
          {singleRecipeDetail.strIngredient7}
          {"\n"}
          {singleRecipeDetail.strIngredient8}
          {"\n"}
          {singleRecipeDetail.strIngredient9}
          {"\n"}
          {singleRecipeDetail.strIngredient10}
        </Text>
        <Text style={styles.ingredientTitle}>Instruction:</Text>
        <Text style={styles.recipeInstructionText}>
          {singleRecipeDetail.strInstructions}
        </Text>
        <View style={styles.bottomItems}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              if (isDisabled == true) {
                setDisable(false);
              } else {
                setDisable(true);
              }
            }}
          >
            {isDisabled ? (
              <Image
                style={styles.saveImage}
                source={require("../Images/save.png")}
              />
            ) : (
              <Image
                style={styles.saveImage}
                source={require("../Images/saved.png")}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.startCook}
            onPress={() =>
              navigation.navigate("WebViewScreen", {
                urlLink: singleRecipeDetail.strYoutube,
              })
            }
            disabled={singleRecipeDetail.strYoutube ? false : true}
            // activeOpacity={singleRecipeDetail.strYoutube ? 1 : 0.5}
          >
            <Text style={styles.StartCookText}>Start Cook!</Text>
            {/* {singleRecipeDetail.strYoutube ?  <Text style={styles.youtubeLink}> Youtube link: {singleRecipeDetail.strYoutube}</Text> : null} */}
            {/* {singleRecipeDetail.strYoutube ?  setDisable(false) : setDisable(true)} */}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  recipeName: {
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
    paddingBottom: 15,
    color: "black",
  },
  recipeInstructionText: {
    padding: 15,
    textAlign: "justify",
    fontSize: 15,
  },
  youtubeLink: {
    fontSize: 16,
    color: "blue",
    padding: 15,
  },
  ingredientTitle: {
    fontSize: 17,
    fontWeight: "bold",
    padding: 10,
    color: "black",
  },
  image: {
    height: 250,
    width: 350,
    alignSelf: "center",
    borderRadius: 10,
  },
  ingredents: {
    fontSize: 15,
    padding: 15,
  },
  startCook: {
    width: 250,
    height: 50,
    backgroundColor: "black",
    borderRadius: 16,
    alignSelf: "center",
    justifyContent: "center",
  },
  StartCookText: {
    color: "#ffff",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  saveImage: {
    width: 50,
    height: 50,
    backgroundColor: "#ffff",
  },
  saveButton: {
    padding: 30,
  },
  bottomItems: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "center",
  },
});

export default withNavigation(RecipeDetail);
