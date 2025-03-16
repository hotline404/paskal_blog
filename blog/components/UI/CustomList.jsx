import React from "react";

//포스트 리스트 프레젠트 컴포넌트
function CustomList(props, { items }) {
  
  //이후에 map으로 만들어야 합니다.
  return (
    <div>
      <ol>
        {items.map((item) => {
          return (
            <li id={item.id} onClick={props.onClick}>
              {props.children}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default CustomList;