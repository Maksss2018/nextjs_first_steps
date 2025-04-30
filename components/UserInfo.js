const UserInfo = ({ name, username, email, website, phone }) => (
  <>
    <h1>
      {" "}
      {name} - <strong>{username}</strong>
    </h1>
    <h2>{email}</h2>
    <h2>{website}</h2>
    <h2>{phone}</h2>
  </>
);

export default UserInfo;
