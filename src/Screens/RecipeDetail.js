import react, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
} from "react-native";
import { WebView } from "react-native-webview";
import { withNavigation } from "react-navigation";
import { Dimensions } from "react-native";
import { postComment, postLike } from "../Services/LikesAndCommentsAPI";

const RecipeDetail = ({ navigation }) => {
  let id = navigation.getParam("id");
  const [singleRecipeDetail, setsingleRecipeDetail] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [isDisabled, setDisable] = useState(true);
  const [comments, setComments] = useState([]);
  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");

  const getRecipeDetail = () => {
    const apiURL =
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + `${id}`;
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        setsingleRecipeDetail(responseJson.meals[0]);
        console.log(responseJson.meals[0]);
      })
      .catch((error) => {
        // console.log("....................................",error);
        alert(error);
      });
  };

  const getComments = (id) => {
    let url =
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YDk6ZvYJ9bRgBt60cLN9/comments?item_id=" +
      `${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        setComments(responseJson);
        console.log("error dataaaaa", responseJson);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getRecipeDetail();
    getComments(id);
  }, []);

  console.log(singleRecipeDetail);
  return (
    <SafeAreaView style={{ backgroundColor: "#ffff", flex: 1 }}>
      <ScrollView>
        <Text style={styles.recipeName}> {singleRecipeDetail.strMeal}</Text>
        <Image
          style={styles.image}
          source={{ uri: singleRecipeDetail.strMealThumb }}
        />
        <Text style={styles.ingredientTitle}>Main Ingredients: </Text>
        <Text style={styles.ingredents}>
          {"\u2022"} {singleRecipeDetail.strIngredient1}:{" "}
          {singleRecipeDetail.strMeasure1}
          {"\n"}
          {"\u2022"} {singleRecipeDetail.strIngredient2}:{" "}
          {singleRecipeDetail.strMeasure2}
          {"\n"}
          {"\u2022"} {singleRecipeDetail.strIngredient3}:{" "}
          {singleRecipeDetail.strMeasure3}
          {"\n"}
          {"\u2022"} {singleRecipeDetail.strIngredient4}:{" "}
          {singleRecipeDetail.strMeasure4}
          {"\n"}
          {"\u2022"} {singleRecipeDetail.strIngredient5}:{" "}
          {singleRecipeDetail.strMeasure5}
          {"\n"}
          {"\u2022"} {singleRecipeDetail.strIngredient6}:{" "}
          {singleRecipeDetail.strMeasure6}
          {"\n"}
          {"\u2022"} {singleRecipeDetail.strIngredient7}:{" "}
          {singleRecipeDetail.strMeasure7}
          {"\n"}
          {"\u2022"} {singleRecipeDetail.strIngredient8}:{" "}
          {singleRecipeDetail.strMeasure8}
          {"\n"}
          {"\u2022"} {singleRecipeDetail.strIngredient9}:{" "}
          {singleRecipeDetail.strMeasure9}
          {"\n"}
          {"\u2022"} {singleRecipeDetail.strIngredient10}:
          {singleRecipeDetail.strMeasure10}
        </Text>
        <Text style={styles.ingredientTitle}>Steps to follow:</Text>
        <Text style={styles.recipeInstructionText}>
          {singleRecipeDetail.strInstructions}
        </Text>
        {singleRecipeDetail.strTags ? (
          <View>
            <Text style={styles.ingredientTitle}>Tags: </Text>
            {/* put sapce in between commas */}
            <Text style={styles.ingredents}>
              {singleRecipeDetail.strTags.split(",").join(", ")}{" "}
            </Text>
          </View>
        ) : null}
        <View style={styles.bottomItems}>
          {/* <TouchableOpacity
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
          </TouchableOpacity> */}
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
            <Text style={styles.StartCookText}>View Cooking Video</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.commentView}>
          {comments && comments.length ? (
            <Text style={styles.commentsTitle}>
              Comments({comments.length})
            </Text>
          ) : (
            <Text style={styles.commentsTitle}>Comments(0)</Text>
          )}

          <FlatList
            data={comments}
            // horizontal={true}
            keyExtractor={(results) => results.comment}
            renderItem={({ item }) => {
              return (
                <View style={styles.commentContainer}>
                  <View style={styles.commentsList}>
                    <Text style={styles.commentUser}>{item.username}:</Text>
                    <Text style={styles.CommentContent}>{item.comment}</Text>
                    <Text style={styles.CommnetCreationDate}>
                      {item.creation_date}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.addCommentsConatiner}>
          <Text style={styles.AddNewCommentTitle}>Add New Comment</Text>
          <TextInput
            style={styles.commenterName}
            placeholder="Your Name"
            value={commenterName}
            onChangeText={setCommenterName}
          />
          <TextInput
            style={styles.enterComment}
            placeholder="Your Insights"
            value={comment}
            onChangeText={setComment}
          />
          <TouchableOpacity
            style={styles.startCook}
            onPress={() => postComment(id, commenterName, comment)}
          >
            <Text style={styles.StartCookText}>Submit</Text>
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
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
    borderRadius: 20,
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
  commentsTitle: {
    fontSize: 28,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  commentView: {
    alignItems: "center",
    padding: 10,
  },
  commentsList: {
    borderColor: 1,
    width: Dimensions.get("window").width - 80,
    borderColor: "black",
    padding: 10,
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 10,
  },
  commentUser: {
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "bold",
    padding: 2,
  },
  CommentContent: {
    fontSize: 17,
    padding: 2,
  },
  CommnetCreationDate: {
    fontSize: 16,
    padding: 2,
  },
  commentContainer: {
    padding: 10,
  },
  AddNewCommentTitle: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 28,
    fontWeight: "bold",
    padding: 10,
  },
  commenterName: {
    height: 50,
    width: Dimensions.get("window").width - 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  enterComment: {
    height: 100,
    width: Dimensions.get("window").width - 50,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  addCommentsConatiner: {
    alignItems: "center",
    margin: 20,
  },
});

export default withNavigation(RecipeDetail);
