import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import ProfileTop from "../../components/Profile/ProfileTop";
import OveralBalance from "../../components/Profile/OverallBalance";
import Statistics from "../../components/Profile/Statistics";
import ProfileBottom from "../../components/Profile/ProfileBottom";
import { IProfile } from "../../interfaces/serviceInterfaces";
import { getProfile } from "../../services/profileServices";

const Profile = () => {
  const [profile, setProfile] = useState<IProfile | null>();

  const token = localStorage.getItem("token") || "";

  const getProfileData = async () => {
    const { data } = await getProfile(token.replace(/"/g, ""));
    setProfile(data);
  };
  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className={styles.root}>
      <ProfileTop name={profile?.data.login || ""} />
      <OveralBalance balance={profile?.data.balance_usdt || 0} />
      <Statistics />
      <ProfileBottom />
    </div>
  );
};

export default Profile;
