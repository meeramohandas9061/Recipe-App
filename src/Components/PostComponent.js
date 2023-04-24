import react, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";

const PostCommentComponent = () => {
  const [comments, setComments] = useState([]);

  const getComments = (id) => {
    let url =
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YDk6ZvYJ9bRgBt60cLN9/comments?item_id=" +
      `${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        if (!responseJson.error) {
          setComments(responseJson);
        }
        console.log("getComments response dataaaaa........", responseJson);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    getComments(id);
  }, []);

  return (
    <View style={styles.conatinerView}>
      <FlatList
        data={comments}
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
  );
};

const styles = StyleSheet.create({
  conatinerView: {
    width: 500,
  },
  commenterName: {
    fontWeight: "bold",
    fontSize: 20,
  },
  commentContainer: {
    padding: 10,
    alignItems: "center",
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
    alignItems: "center",
  },
});

export default PostCommentComponent;
