import { Fragment, useEffect, useState } from "react";
import DashBar from "../DashBar/DashBar";
import HealthForm from "../HealthForm/HealthForm";

import "./DashBoard.css";

export default function DashBoard() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userGender, setUserGender] = useState("");
  useEffect(() => {
    const uname = sessionStorage.getItem("username");
    const uage = sessionStorage.getItem("age");
    const ugender = sessionStorage.getItem("gender");
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
