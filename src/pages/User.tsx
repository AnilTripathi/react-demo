import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams<{ id: string }>();
  return <h2>User ID: {id}</h2>;
};

export default User;