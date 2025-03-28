"use client";

import React, { useRef } from "react";

//input 프레젠트 컴포넌트
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


