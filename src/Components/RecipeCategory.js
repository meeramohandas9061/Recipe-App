import react from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import CategoryList from "./CategoryList";
import { withNavigation } from "react-navigation";

const RecipeCategory = ({ categoryData, navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.titleStyle}>Explore by Category</Text>
      <FlatList
        horizontal={true}
        data={categoryData}
        keyExtractor={(item) => item.idCategory}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CategoryDetail", {
                  strCategory: item.strCategory,
                })
              }
            >
              <CategoryList category={item} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    // backgroundColor: "#DBF0F9",
    fontSize: 21,
    color: "black",
    fontWeight: "bold",
    paddingLeft: 15,
    paddingTop: 10,
  },
});

export default withNavigation(RecipeCategory);
