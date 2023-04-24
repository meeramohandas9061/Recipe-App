import react from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";

import { theamColor } from "../Utils/Global";

const CategoryList = ({ category }) => {
  return (
    <SafeAreaView style={[styles.container, styles.shadowProp]}>
      <ImageBackground
        style={styles.image}
        source={{ uri: category.strCategoryThumb }}
      ></ImageBackground>

      <Text style={styles.title}>{category.strCategory}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theamColor,
    opacity: 0.9,
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 10,
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
    color: "#000000",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
});

export default CategoryList;
