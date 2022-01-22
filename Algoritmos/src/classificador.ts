interface UserProps {
  name: string;
  isMe: boolean;
  isAdmin: boolean;
}

function sortUsers(users: UserProps[]) {
  const usernames = users.map(user => user.name);

  const sortedUsers = usernames.sort((a, b) => {
    const firstName = a.toLowerCase();
    const secondName = b.toLowerCase();

    if (firstName < secondName) return -1;
    if (firstName > secondName) return 1;
    return 0;
  });

  return sortedUsers;
}

function classifyUsers(users: UserProps[]) {
  const me = users.find(user => user.isMe);
  const adminUsers = users.filter(user => user.isAdmin);
  const nonAdminUsers = users.filter(user => !user.isAdmin);

  const classifiedUsers = {
    you: me?.name ? `${me.name} (me)` : "We couldn't find you ;(",
    admin: sortUsers(adminUsers),
    nonAdmin: sortUsers(nonAdminUsers),
  };

  const { you, admin, nonAdmin } = classifiedUsers;

  return { object: classifiedUsers, array: [you, ...admin, ...nonAdmin] };
}

const users = [
  { name: 'Jonatham', isMe: true, isAdmin: true },
  { name: 'Mary', isMe: false, isAdmin: false },
  { name: 'Daniel', isMe: false, isAdmin: false },
  { name: 'Nail', isMe: false, isAdmin: true },
  { name: 'Raul', isMe: false, isAdmin: true },
  { name: 'Ana', isMe: false, isAdmin: false },
];

const classifiedUsers = () => {
  const newUsers = classifyUsers(users);

  console.log(newUsers);
  return newUsers;
};

export default classifiedUsers;
