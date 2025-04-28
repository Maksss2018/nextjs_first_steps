import Link from "next/link";
async function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );
}
export default async function Client() {
  const users = await fetchUsers();
  return (
    <>
      <h1>Client page</h1>
      {users.map((user) => (
        <section key={user.id}>
          <h2>
            {user.name} - <b>{user.username}</b>{" "}
          </h2>
          <Link href={`/client/${user.id}`}> more </Link>
        </section>
      ))}
    </>
  );
}
