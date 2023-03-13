import react, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import { withNavigation } from "react-navigation";
import { FlatGrid } from "react-native-super-grid";

const AreaRecipeList = ({ navigation }) => {
  let area = navigation.getParam("area");
  console.log(area);
  const [areaRecipes, setAreaRecipes] = useState([]);

  const getRecipeWithAreas = () => {
    const apiURL =
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + `${area}`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setAreaRecipes(responseJson.meals);
        console.log(".........", responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getRecipeWithAreas();
  }, []);

  return (
    <FlatGrid
      itemDimension={130}
      style={styles.gridView}
      spacing={10}
      data={areaRecipes}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, styles.shadowProp]}>
          <ImageBackground
            style={styles.image}
            source={{ uri: item.strMealThumb }}
          >
            <View style={styles.titleView}>
              <Text style={styles.titleName}>{item.strMeal}</Text>
            </View>
          </ImageBackground>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 140,
    width: 140,
    flexDirection: "column-reverse",
    alignItems: "center",
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  titleView: {
    height: 50,
    width: 120,
    backgroundColor: "black",
    opacity: 0.8,
    borderRadius: 10,
    justifyContent: "center",
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
    alignItems: "center",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  titleName: {
    fontSize: 11,
    fontWeight: "bold",
    paddingTop: 5,
    color: "#ffff",
    alignSelf: "center",
    padding: 2,
  },
});

export default AreaRecipeList;
