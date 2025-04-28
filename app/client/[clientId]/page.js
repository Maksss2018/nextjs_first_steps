async function getUserByID(userID) {
  return fetch("https://jsonplaceholder.typicode.com/users/" + userID).then(
    (response) => response.json()
  );
}

export default async function ClientId(props) {
  const params = await props.params;
  const userData = await getUserByID(params.clientId);
  return (
    <>
      <h1>
        {" "}
        {userData.name} - <strong>{userData.username}</strong>
      </h1>
      <h2>{userData.email}</h2>
      <h2>{userData.website}</h2>
      <h2>{userData.phone}</h2>
    </>
  );
}
