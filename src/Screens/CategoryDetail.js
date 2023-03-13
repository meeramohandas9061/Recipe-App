import axios from "axios";
import react, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { withNavigation } from "react-navigation";
import { FlatGrid } from "react-native-super-grid";

const CategoryDetail = ({ navigation }) => {
  let category = navigation.getParam("strCategory");
  let baseURL = "www.themealdb.com/api/json/v1/1/filter.php?c=";
  const [categoryDetail, setCategoryDetail] = useState([]);

  const getCategoryDetailList = () => {
    const apiURL =
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + `${category}`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.meals != null) {
          setCategoryDetail(responseJson.meals);
        }
        console.log(".........", responseJson.meals);
       
      })
      .catch((error) => {
        console.error(error);
        alert(error)
      });
  };

  useEffect(() => {
    getCategoryDetailList();
   
  }, []);
  return (
    <>
    
        <Text style={styles.categoryType}>Choose your favourite {category} recipes!</Text> 
    <FlatGrid
      itemDimension={130}
      style={styles.gridView}
      spacing={10}
      data={categoryDetail}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, styles.shadowProp]}>
          <TouchableOpacity
            onPress={() => {
              
              navigation.navigate("RecipeDetailScreen", { id: item.idMeal }) 
            }
             
            
          
            }
          >
            
            <ImageBackground
              style={styles.image}
              source={{ uri: item.strMealThumb }}
            >
              <View style={styles.titleView}>
                <Text style={styles.titleName}>{item.strMeal}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      )}
    />
    </>
  
  );
};

const width = Dimensions.get("window").width - 40;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
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
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  titleName: {
    fontSize: 10,
    fontWeight: "bold",
    paddingTop: 5,
    color: "#ffff",
    alignSelf: "center",
    padding: 2,
  },
  categoryType: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    paddingLeft: 22,
    paddingTop: 20,
    paddingBottom: 15
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
});

export default withNavigation(CategoryDetail);
