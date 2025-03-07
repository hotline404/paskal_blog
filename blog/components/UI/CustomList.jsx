import React from "react";

function CustomList(props) {

  //이후에 map으로 만들어야 합니다.
  return (
    <div>
      <ol>
        <li id={props.id} onClick={props.onClick}>
          {props.children}
        </li>
      </ol>
    </div>
  );
}

export default CustomList;
