import { Fragment } from "react";
import DashBar from "../DashBar/DashBar";
import HealthForm from "../HealthForm/HealthForm";

import "./DashBoard.css";

export default function DashBoard() {
  return (
    <Fragment>
      <DashBar />
      <HealthForm />
    </Fragment>
  );
}
