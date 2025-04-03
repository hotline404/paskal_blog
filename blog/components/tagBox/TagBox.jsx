"use client"
import React from 'react'
import CustomTag from '../UI/CustomTag';
import CustomInput from '../UI/CustomInput';
import CustomButton from '../UI/CustomButton';

const dummy_data = [
 {
  tag : "afsdf",
  id : "1233"
 },
 {
  tag : "qwer",
  id : "12333"
 },
 {
  tag : "zxcv",
  id : "123333"
 },
 {
  tag : "dfgh",
  id : "12323"
 },
 {
  tag : "jhk",
  id : "123322"
 },
]

function TagBox() {
  
  return (
    <div>
      <CustomInput /> 
      <CustomButton />
      <CustomTag items={dummy_data}/>
    </div>
  )
}

export default TagBox
