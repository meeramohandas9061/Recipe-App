const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TVh1v8c5aHUNyfocTFww/likes";

const getLikes = async () => {
  const responseData = await fetch(url);
  const responseJSON = await responseData.json();
  console.log("get comment response data********************", responseJSON);
  return responseJSON;
};

const postComment = async (itemId, name, message, setPosted) => {
  const response = await fetch(
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YDk6ZvYJ9bRgBt60cLN9/comments",
    {
      method: "POST",
      body: JSON.stringify({
        item_id: itemId,
        username: name,
        comment: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const responseText = await response.text();
  console.log("Post comment response data********************", responseText);
  setPosted(true);
  return responseText;
};

const postLike = async (itemId) => {
  const response = await fetch(
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YDk6ZvYJ9bRgBt60cLN9/likes",
    {
      method: "POST",
      body: JSON.stringify({
        item_id: itemId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const responseText = await response.text();
  console.log("Like recipe response data********************", responseText);
  console.log("itemId", itemId);
  return responseText;
};

export { getLikes, postComment, postLike };
