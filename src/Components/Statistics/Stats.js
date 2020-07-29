import React from "react";

const Stats = ({ good, neutral, bad, total }) => {
  return (
    <div>
      <ul>
        <li>Good : {good}</li>
        <li>Neutral : {neutral}</li>
        <li>Bad : {bad}</li>
      </ul>
      <p>Positive feedback :{Math.round((good / total) * 100)}%</p>
    </div>
  );
};

// const countTotal = (data, searchValue) => {
//   const countTotal = Object.values(data).reduce((a, b) => a + b);
//   return Math.round((searchValue / countTotal) * 100);
// };

// const Stats = ({ objects, searhValue }) => {
//   return (
//     <div>
//       <ul>
//         {Object.entries(objects).map(([key, values]) => (
//           <li key={key}>
//             {key} : {values}
//           </li>
//         ))}
//       </ul>

//       <p>Positive feedback :{countTotal(objects, searhValue)}%</p>
//     </div>
//   );
// };

export default Stats;
