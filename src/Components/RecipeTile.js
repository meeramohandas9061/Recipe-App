import react from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SingleRecipeTile from "./SingleRecipeTile";
import { withNavigation } from "react-navigation";
import { shadowProp, theamColor } from "../Utils/Global";
import { Dimensions } from "react-native";

const RecipeTile = ({ data, navigation }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>Popular Recipes</Text>
      {data ? (
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={(results) => results.idMeal}
          // numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RecipeDetailScreen", { id: item.idMeal })
                }
              >
                <SingleRecipeTile recipieData={item} />
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <View style={[styles.containerNoDataView, shadowProp]}>
          <View style={[styles.noDataView]}>
            <Text style={styles.oopSDataText}>Oops! </Text>
            <Text style={styles.noDataText}>
              no recipes matches your search!
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    // backgroundColor: "#DBF0F9",
    fontSize: 21,
    color: "black",
    fontWeight: "bold",
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 5,
  },
  noDataView: {
    width: Dimensions.get("window").width - 35,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    // borderWidth: 1,
    borderColor: theamColor,
    borderRadius: 18,
    flexDirection: "row",
    // opacity: 0.8,
  },
  oopSDataText: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
  noDataText: {
    fontSize: 18,
    color: "black",
  },
  containerNoDataView: {
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 5,
  },
});
export default withNavigation(RecipeTile);
