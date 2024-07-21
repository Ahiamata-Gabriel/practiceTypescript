type User = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

type UpdatedUser = Partial<User>;
let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "jane_smith", role: "contributor" },
];

function updateUSer(id: number, updates: UpdatedUser) {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.error("found no user");
    return;
  }
  Object.assign(foundUser, updates);
}

// updateUSer(1, { username: "new_john_doe" });
// updateUSer(4, { role: "contributor" });

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = { id: nextUserId++, ...newUser };
  users.push(user);
  return user;
}

addNewUser({ username: "joe_schmoe", role: "member" });
