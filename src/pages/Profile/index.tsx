import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import ProfileTop from "../../components/ProfileComponents/ProfileTop";
import OveralBalance from "../../components/ProfileComponents/OverallBalance";
import Statistics from "../../components/ProfileComponents/Statistics";
import ProfileBottom from "../../components/ProfileComponents/ProfileBottom";
import { IProfile } from "../../interfaces/serviceInterfaces";
import { getProfile } from "../../services/profileServices";
import Sidebar from "../../components/Sidebar";

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
      <Sidebar />
      <div className={styles.main}>
        <ProfileTop name={profile?.data.login || ""} />
        <OveralBalance balance={profile?.data.balance_usdt || 0} />
        <Statistics />
        <ProfileBottom />
      </div>
    </div>
  );
};

export default Profile;
