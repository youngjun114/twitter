let users = [
  {
    id: '1',
    username: 'youngjun',
    password: '$2b$12$tlOee/pN9vKu1v4MMPuKceXVPr5fUOXrlku4SLMN5/dul485z1y6e',
    name: 'Youngjun Woo',
    email: 'youngjun_92@hotmail.com',
    url: '',
  },
  {
    id: '2',
    username: 'bob',
    password: '$2b$12$o4ZsPfR1s2AHFCGupfSghOenkDAbajtr8fnsCxAnVzO8woWNW1Wsm',
    name: 'Bob Kim',
    email: 'bobk@gmail.com',
    url: '',
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
