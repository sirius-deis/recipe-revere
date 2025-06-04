import { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import Profile from "../../components/profile/Profile";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../queries/queries";
import Loader from "../../components/loader/Loader";
import ErrorBox from "../../components/errorBox/ErrorBox";
import { UserContext } from "../../store/userContext";
import Panel from "../../components/panel/Panel";

const ProfilePage: FC = () => {
  let { userId } = useParams();
  const { user } = useContext(UserContext);
  if (!userId || user?._id === userId) {
    userId = user?._id
  }
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { userId },
    skip: !!user && user._id === userId
  });
  console.log(data, user)
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Panel centered withBorder withShadow><ErrorBox message={error.message} /></Panel>;
  }
  return <div><Profile user={data ? data.getUser.user : user} /></div>;
};

export default ProfilePage;
