
interface ProfileProps {
  params: {
    id: string;
  };
}

const Profile = ({ params }: ProfileProps) => {
  const { id } = params;

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Profile ID: {id}</p>
    </div>
  );
};

export default Profile;
