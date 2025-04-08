import React from 'react'
import { style } from '@/components/literar/style/style';

//리스트 카드: 포스트의 간략한 내용 랜더링 ( 프리젠트 컴포넌트, 클라이언트 )


function ListCard({ item }) {
  const listCardStyle = style.pages.listPage.listCard
  return item ? (
    <div className={listCardStyle.div}>
      <p>{item.date}</p>
      <h1 className={listCardStyle.h1} >{item.title}</h1>
      <h4 className=''>{item.tags}</h4>
    </div>
  ) : <></>
}

export default ListCard;
