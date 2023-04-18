const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TVh1v8c5aHUNyfocTFww/likes";
const getLikes = async () => {
  const responseData = await fetch(url);
  const responseJSON = await responseData.json();
  return responseJSON;
};

const postComment = async (itemId, name, message) => {
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
  console.log("response of comment********************", responseText);
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
  return responseText;
};

export { getLikes, postComment, postLike };
