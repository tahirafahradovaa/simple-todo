import React, { useState } from "react";
import "./Todo.css";
function ToDo() {
  const [list, setlist] = useState([]);
  const [value, setValue] = useState("");

  const get = (e) => {
    setValue(e.target.value);
  };
  const add = () => {
    setlist([...list, value]);
    setValue("");
  };

  return (
    <div className="container">
      <label>Enter todo</label>
      <input onChange={get} value={value} />
      <button onClick={add}>Save</button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default ToDo;

//doesnt work
// return (
//   <div>
//     <label>Type todo</label>
//     <input value={value} onChange={get} />
//     <button onClick={add}>Add</button>
//     <ul>
//       {list.map((item) => {
//         <li>{item}</li>;
//       })}
//     </ul>
//   </div>
// );
// }
