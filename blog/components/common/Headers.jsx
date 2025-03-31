import React from 'react'
import CustomButton from '../UI/CustomButton';
import CustomInput from '../UI/CustomInput';
import CustomTag from '../UI/CustomTag';
import CustomLogo from '../UI/CustomLogo';
import Footers from './Footers.jsx';

//헤더 비즈니스 컴포넌트: 사이드 바로 들어갑니다.

const dummy_data = [
  
]
function Headers() {
  return (
    <div>
      <CustomLogo>paskal's blog</CustomLogo>
      <CustomTag />
      <CustomInput />
      <CustomButton />
      <Footers className="fixed top-0"/>
    </div>
  )
};

export default Headers;
