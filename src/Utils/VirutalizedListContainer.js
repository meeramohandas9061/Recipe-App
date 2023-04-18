import React from "react";
import { FlatList } from "react-native";

export default function VirtualizedView() {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => "dummy"}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
}

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
      <Text style={styles.commentsTitle}>Comments({comments.length})</Text>
    ) : (
      <Text style={styles.commentsTitle}>Comments(0)</Text>
    )}

    {/* <FlatList
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
  /> */}
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
</ScrollView>;
