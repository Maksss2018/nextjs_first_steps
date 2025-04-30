import UserInfo from "../../../components/UserInfo";
async function getUserByID(userID) {
  return fetch("https://jsonplaceholder.typicode.com/users/" + userID).then(
    (response) => response.json()
  );
}

export async function generateMetadata({ params, searchParams }) {
  const prms = await params;
  const user = await getUserByID(prms.clientId);
  return {
    title: `${user.name} - ${user.username}`,
    description: "some description",
  };
}

export default async function ClientId(props) {
  const params = await props.params;
  const userData = await getUserByID(params.clientId);
  return (
    <UserInfo
      name={userData.name}
      username={userData.username}
      email={userData.email}
      website={userData.website}
      phone={userData.phone}
    />
  );
}
