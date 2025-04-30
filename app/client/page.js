import UserItem from "../../components/UsersItem";
async function fetchUsers() {
  const result = await fetch("http://localhost:3000/api/data").then(
    (response) => response.json()
  );
  return result;
}
export default async function Client() {
  const users = await fetchUsers();
  return (
    <>
      <h1>Client page</h1>
      {users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          username={user.username}
          name={user.name}
        />
      ))}
    </>
  );
}
