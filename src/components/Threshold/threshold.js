import Papa from "papaparse";
import heartData from "./heart.csv";

const age = sessionStorage.getItem("age");
const gender = sessionStorage.getItem("gender");

// Calculation of heart rate threshold
const calcHeartThreshold = (data) => {
  const filteredData = data.filter(
    (row) => row.Age === age && row.Sex === gender
  );

  if (filteredData.length === 0) return 220 - parseInt(age);

  const count = filteredData.length;
  const sum = filteredData.reduce((acc, row) => acc + parseInt(row.MaxHR), 0);
  const mean = sum / count;

  const variance =
    filteredData.reduce((acc, row) => {
      const hr = parseInt(row.MaxHR);
      return acc + (hr - mean) ** 2;
    }, 0) / count;

  const stdDeviation = Math.sqrt(variance);
  const factor = 1;
  const threshold = mean + factor * stdDeviation;

  return Math.round(threshold);
};

// Calculation of sugar level threshold
const calcSugarThreshold = (data) => {
  // const filteredData = data.filter(
  //   (row) => row.Age === age && row.Sex === gender
  // );

  // if (filteredData.length === 0) return 126;

  // const count = filteredData.length;
  // const sum = filteredData.reduce((acc, row) => acc + parseInt(row.Cholesterol), 0);
  // const mean = sum / count;

  // const variance =
  //   filteredData.reduce((acc, row) => {
  //     const sug = parseInt(row.Cholesterol);
  //     return acc + (sug - mean) ** 2;
  //   }, 0) / count;

  // const stdDeviation = Math.sqrt(variance);
  // const factor = 1;
  // const threshold = mean + factor * stdDeviation;

  // return Math.round(threshold);

  return 126;
};

// calculation of pressure threshold
const calcPressureThreshold = (data) => {
  const filteredData = data.filter(
    (row) => row.Age === age && row.Sex === gender
  );

  if (filteredData.length === 0) return 100;

  const count = filteredData.length;
  const sum = filteredData.reduce(
    (acc, row) => acc + parseInt(row.RestingBP),
    0
  );
  const mean = sum / count;

  const variance =
    filteredData.reduce((acc, row) => {
      const bp = parseInt(row.RestingBP);
      return acc + (bp - mean) ** 2;
    }, 0) / count;

  const stdDeviation = Math.sqrt(variance);
  const factor = 1;
  const threshold = mean + factor * stdDeviation;

  return Math.round(threshold);
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
