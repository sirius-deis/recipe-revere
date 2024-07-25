import { FC } from "react";
import { useParams } from "react-router-dom";
import Profile from "../../components/profile/Profile";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../queries/queries";
import Loader from "../../components/loader/Loader";
import ErrorBox from "../../components/errorBox/ErrorBox";

const ProfilePage: FC = () => {
  const { userId } = useParams();
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { id: userId },
  });
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorBox message={error.message} />;
  }
  return <Profile user={data.user} />;
};

export default ProfilePage;
