"use client";
import React from "react";
import CustomTag from "../UI/CustomTag";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";

const dummy_data = [
  {
    tag: "afsdf",
    id: "1233",
  },
  {
    tag: "qwer",
    id: "12333",
  },
  {
    tag: "zxcv",
    id: "123333",
  },
  {
    tag: "dfgh",
    id: "12323",
  },
  {
    tag: "jhk",
    id: "123322",
  },
];

function TagBox() {
  return (
    <div className="mt-18">
      <CustomInput
        input={{
          name: "search",
          type: "search",
          id: "searchTag",
          placeholder: "태그 검색!!",
        }}
      />
      <CustomButton
        bgColor="bg-blue-900"
        margin="mt-2 mb-2"
        width="w-[100%]"
        buttonName="검색"
      />
      <CustomTag items={dummy_data} />
    </div>
  );
}

export default TagBox;
