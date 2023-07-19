import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "blue",
    "red",
    "black",
    "green",
  ];

  const colorElements = colors.map((color) => {
    return <li key={color} style={{color: color}}>{color}</li>
  });

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
         {/* display the array of <li> elements here! */}
        {/* <li style={{ color: colors[0] }}>{colors[0]}</li>
        <li style={{ color: colors[1] }}>{colors[1]}</li>
        <li style={{ color: colors[2] }}>{colors[2]}</li>
        <li style={{ color: colors[3] }}>{colors[3]}</li>
        <li style={{ color: colors[4] }}>{colors[4]}</li>
        <li style={{ color: colors[5] }}>{colors[5]}</li> */}
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;

/*const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
*/

/*const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);

*/
