import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
  const { query } = useRouter();
  return (
    <MainContainer keywords={user.name}>
      <div>
        <h1>User with id: {query.id}</h1>
        <div>Name: {user.name}</div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
