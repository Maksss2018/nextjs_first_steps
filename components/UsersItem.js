import Link from "next/link";

const UserItem = ({ name, username, id }) => (
  <section>
    <h2>
      {name} - <b>{username}</b>{" "}
    </h2>
    <Link href={`/client/${id}`}> more </Link>
  </section>
);
export default UserItem;
