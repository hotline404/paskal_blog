import React from "react";
import ListCard from "./ListCard";

//리스트 컴포넌트 ( 비즈니스 컴포넌트, 클라이언트 )

//더미 데이터 곧 지울 것

const dummy_data = [
  {
    date: "2320.12.12",
    title: "이건 제목1",
    tags: ["asdf", "aasdf", "asdf", "asdf"],
    id: "asdfasa1333212331444",
  },
  {
    date: "2320.12.12",
    title: "이건 제목2",
    tags: ["asdf", "aasdf", "asdf", "asdf"],
    id: "asdfasa1333212314444",
  },
  {
    date: "2320.12.12",
    title: "이건 제목3",
    tags: ["asdf", "aasdf", "asdf", "asdf"],
    id: "asdfasa1333212321444",
  },
  {
    date: "2320.12.12",
    title: "이건 제목4",
    tags: ["asdf", "aasdf", "asdf", "asdf"],
    id: "asdfasa13332128931444",
  },
];

function List() {
  const data = dummy_data;
  // li 태그 성분  w 고정 값으로 바꿔서 flex 테스트 하기

  return data ? (
    <ol className="w-full flex flex-wrap gap-4 space-y">
      {data.map((item) => {
        return (
          <li
            key={item.id}
            className="h-[20%] w-[calc(30%-10px)] min-w-[150px]"
          >
            <ListCard item={item} />
          </li>
        );
      })}
    </ol>
  ) : (
    <p>Not found</p>
  );
}

export default List;
