import React from 'react'
import List from './components/List';

//리스트 페이지 ( 랜더링 컴포넌트, 서버 컴포넌트 )
function page () {
  return (
    <div className='w-[87%] h-full flex bg-[#252525]'>
      <List />
    </div>
  )
}
  
export default page;
