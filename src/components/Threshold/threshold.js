import Papa from "papaparse";
import heartData from "./heart.csv";

const age = sessionStorage.getItem("age");
const gender = sessionStorage.getItem("gender");

const calcHeartThreshold = (data) => {
  const filteredData = data.filter(
    (row) => row.Age === age && row.Sex === gender
  );

  if (filteredData.length === 0) return 120;

  const sum = filteredData.reduce((acc, row) => acc + parseInt(row.MaxHR), 0);
  const mean = sum / filteredData.length;

  return Math.round(mean);
};

const calcSugarThreshold = (data) => {
  //   const filteredData = data.filter(
  //     (row) => row.Age === age && row.Sex === gender
  //   );
  //   const sum = filteredData.reduce(
  //     (acc, row) => acc + parseInt(row.Cholesterol),
  //     0
  //   );
  //   const mean = sum / filteredData.length;

  //   return Math.round(mean);

  return 126;
};

const calcPressureThreshold = (data) => {
  const filteredData = data.filter(
    (row) => row.Age === age && row.Sex === gender
  );

  if (filteredData.length === 0) return 100;

  const sum = filteredData.reduce(
    (acc, row) => acc + parseInt(row.RestingBP),
    0
  );
  const mean = sum / filteredData.length;

  return Math.round(mean);
};

const findThreshold = () => {
  Papa.parse(heartData, {
    download: true,
    delimiter: "",
    header: true,
    skipEmptyLines: "greedy",
    complete: (result) => {
      const heartThreshold = calcHeartThreshold(result.data);
      const sugarThreshold = calcSugarThreshold(result.data);
      const pressureThreshold = calcPressureThreshold(result.data);

      sessionStorage.setItem("heart", heartThreshold);
      sessionStorage.setItem("sugar", sugarThreshold);
      sessionStorage.setItem("pressure", pressureThreshold);
    },
    error: (err) => console.log(err),
  });
};

export { findThreshold };
