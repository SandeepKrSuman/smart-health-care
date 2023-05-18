const audio = new Audio("/assets/siren.mp3");

function getInstruction(data) {
  const { hrate, bsugar, sbp, dbp } = data;

  const heartThreshold = sessionStorage.getItem("heart");
  const sugarThreshold = sessionStorage.getItem("sugar");
  const pressureThreshold = sessionStorage.getItem("pressure");

  let smp = 0;
  let shrm = 0;
  let sbsm = 0;

  if (sbp >= 130 || dbp >= pressureThreshold) {
    smp = 1;
  }

  if (hrate >= heartThreshold || hrate <= 68) {
    shrm = 1;
  }

  if (bsugar > sugarThreshold || bsugar < 80) {
    sbsm = 1;
  }

  const str = smp + "" + shrm + "" + sbsm;
  let msg = "";

  switch (str) {
    case "000":
      msg = "Normal: Take regular medicines.";
      break;

    case "001":
      msg = "Please take blood sugar regulation medicine";
      break;

    case "011":
      msg = "⚠ Calling Ambulance...";
      break;

    case "100":
      msg = "Remider: Take regular medicines.";
      break;

    case "101":
      audio.play();
      msg = "⚠ Calling Hospital.. ... Medical Support arriving";
      break;

    case "110":
      audio.play();
      msg = "⚠ Calling Hospital.. ... Medical Support arriving";
      break;

    case "111":
      audio.play();
      msg = "⚠ Calling Hospital.. ... Medical Support arriving";
      break;

    default:
      msg = "Remider: Take regular medicines";
  }

  return { str, msg };
}

export default getInstruction;
