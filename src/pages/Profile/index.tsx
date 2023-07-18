import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import ProfileTop from "../../components/ProfileComponents/ProfileTop";
import OveralBalance from "../../components/ProfileComponents/OverallBalance";
import Statistics from "../../components/ProfileComponents/Statistics";
import ProfileBottom from "../../components/ProfileComponents/ProfileBottom";
import { IProfile } from "../../interfaces/serviceInterfaces";
import { getProfile } from "../../services/profileServices";
import Sidebar from "../../components/Sidebar";
import PaymentMethod from "../../components/ProfileComponents/PaymentMethod";
import Container from "../../components/UI/Container";

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
    <Container>
      <div className={styles.root}>
        <Sidebar className={styles.sidebar} />
        <div className={styles.main}>
          <ProfileTop name={profile?.data.login || ""} />
          <OveralBalance balance={profile?.data.balance_usdt || 0} />
          <Statistics />
          <PaymentMethod />
          {/* <ProfileBottom /> */}
        </div>
      </div>
    </Container>
  );
};

export default Profile;
