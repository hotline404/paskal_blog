import React, { useRef } from "react";

export default function CustomInput(props, ref) {
  const inputRef = useRef();

  return (
    <div>
      <input
        ref={ref}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}


