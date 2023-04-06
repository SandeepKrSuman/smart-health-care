import { Fragment, useEffect, useState } from "react";
import DashBar from "../DashBar/DashBar";
import HealthForm from "../HealthForm/HealthForm";

import "./DashBoard.css";
import { findThreshold } from "../Threshold/threshold";

export default function DashBoard() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userGender, setUserGender] = useState("");
  useEffect(() => {
    const uname = sessionStorage.getItem("username");
    const uage = sessionStorage.getItem("age");
    const ugender = sessionStorage.getItem("gender");

    const heartThreshold = sessionStorage.getItem("heart");
    const sugarThreshold = sessionStorage.getItem("sugar");
    const pressureThreshold = sessionStorage.getItem("pressure");

    if (!heartThreshold || !sugarThreshold || !pressureThreshold) {
      findThreshold();
    }

    setUserName(uname);
    setUserAge(uage);
    setUserGender(ugender);
  }, []);

  return (
    <Fragment>
      <DashBar userName={userName} />
      <HealthForm
        userName={userName}
        userAge={userAge}
        userGender={userGender}
      />
    </Fragment>
  );
}
