import React from "react";

function SumDemo2() {
  const [no1, setNo1] = React.useState(0);
  const [no2, setNo2] = React.useState(0);
  const [choice, setChoice] = React.useState("");
  const [ans, setAns] = React.useState("");

  const doProcess = () => {
    if (choice === "add") {
      var c = parseInt(no1) + parseInt(no2);
      setAns("Sum is: " + c);
    } else if (choice === "sub") {
      var c = parseInt(no1) - parseInt(no2);
      setAns("Sub is: " + c);
    } else {
      setAns("Select Choice");
    }
  };

  return (
    <div>
      No1 <input type="text" onChange={(e) => setNo1(e.target.value)} />
      <br />
      No2 <input type="text" onChange={(e) => setNo2(e.target.value)} />
      <br />
      Choice <br />
      <input
        type="radio"
        onChange={() => setChoice("add")}
        name="txt1"
        value="add"
      />
      Add
      <input
        type="radio"
        onChange={() => setChoice("sub")}
        name="txt1"
        value="sub"
      />
      Sub
      <br />
      Choice
      <select onChange={(e) => setChoice(e.target.value)}>
        <option value="add">Add</option>
        <option value="sub">Sub</option>
      </select>
      <br />
      <input type="button" onClick={doProcess} value="Click" />
      <br />
      {ans}
    </div>
  );
}

export default SumDemo2;