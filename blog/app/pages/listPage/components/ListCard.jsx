import React from 'react'


//리스트 카드: 포스트의 간략한 내용 랜더링 ( 프리젠트 컴포넌트, 클라이언트 )
function ListCard({ item }) {

  return item ? (
    <div className='rounded-2xl border-white border-1 m-6 w-[70%] h-[50%]'>
      <p>{item.date}</p>
      <h3>{item.title}</h3>
      <h4>{item.tags}</h4>
    </div>
  ) : <></>
}

export default ListCard;
