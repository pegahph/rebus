import { FunctionComponent } from "react";
import { ProfileIcon } from "../icons";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  return (
    <div>
      <ProfileIcon />
    </div>
  );
};

export default Profile;
