const data = require("./data-for-async");

async function getUserPosts(username) {
  const users = await data.users.getUsers();
  const user = users.find((user) => user.name === username);

  if (user) {
    return data.posts.getUserPost(user.id);
  } else {
    throw new Error(`User with username ${username} was not found`);
  }
}

async function getPostComments(post) {
  return Promise.all(
    post.comments.map((commentId) => data.comments.getComment(commentId))
  );
}

async function main(username = "test") {
  const posts = await getUserPosts(username);
  const comments = await Promise.all(
    posts.map((post) => getPostComments(post))
  );
  console.log(comments);
}

main();
