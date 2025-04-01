import React from 'react'
import ListCard from './ListCard'

//리스트 컴포넌트 ( 비즈니스 컴포넌트, 클라이언트 ) 

//더미 데이터 곧 지울 것

const dummy_data = [
  {
    date: "2320.12.12",
    title: "이건 제목1",
    tag: ["asdf", "aasdf", "asdf", "asdf"],
    id: "asdfasa1333212331444"
  },
  {
    date: "2320.12.12",
    title: "이건 제목2",
    tag: ["asdf", "aasdf", "asdf", "asdf"],
    id: "asdfasa1333212314444"
  },
  {
    date: "2320.12.12",
    title: "이건 제목3",
    tag: ["asdf", "aasdf", "asdf", "asdf"],
    id: "asdfasa1333212321444"
  },
  {
    date: "2320.12.12",
    title: "이건 제목4",
    tag: ["asdf", "aasdf", "asdf", "asdf"],
    id: "asdfasa13332128931444"
  },
  
  {
    date: "2320.12.12",
    title: "이건 제목4",
    tag: ["asdf", "aasdf", "asdf", "asdf"],
    id: "asdfasa13332128931444"
  },
]

function List() {

  const data = dummy_data;

  return data ? (
    <ol className='h-[100%] w-[100%] flex'>
      {data.map(item => {
        return (
          <li key={item.id} className='h-[20%] w-[100%]'>
            <ListCard item={item} />
          </li>
        )
      })}
    </ol>
  ) : <p>Not found</p>
}

export default List
