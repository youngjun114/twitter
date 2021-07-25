// dummy tweets
let tweets = [
  {
    id: '1',
    text: 'Please Hire Me',
    createdAt: Date.now().toString(),
    name: 'Youngjun',
    username: 'youngjun',
    url: 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png',
  },
  {
    id: '2',
    text: 'Hello world',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
    url: 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png',
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((tweet) => username === tweet.username);
}

export async function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    createdAt: new Date(),
    text,
    name,
    username,
  };
  tweets = [tweet, ...tweets];
}

export async function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
