import React from 'react'
import genRandomNum from '@/util/genRandomNum'

//태그 리스트 프레젠트 컴포넌트
function CustomTag({ items }) {
  return items ? (
    <div>
      {items.map((item) => {
        return (
          <li onClick={item.onClick} id={genRandomNum()}>{item.tagName}</li>
        )
      })}
    </div>
  ) : <></>
}

export default CustomTag