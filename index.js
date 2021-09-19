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

getUserPosts("test").then((posts) => console.log(posts));
