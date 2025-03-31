# paskal_blog

### 만들게 된 이유  
개발자가 자기가 만든 블로그 하나쯤은 있어야지 좀 멋지지 않을까라는 생각을 하고 만들었다.  
  
블로그의 이름은 paskal 내가 좋아하는 애니매이션 씬듀얼리티 느와르의 파스칼이라는 캐릭터의 이름을 이용했다.   
  
원래 만들던 블로그 프로젝트가 있었는데 브라우저의 오류로 인해 새롭게 만들었다.  
만들면서 우선 배포를 하면 쓸모가 없어질 것 같은 프록시 서버를 분리를 해줬다.  
  
  
### 프로젝트 stack  
node.js  
next.js  
zustand  
  
[next.js]  
  next.js를 사용하는 이유  
  1. 검색 엔진 최적화(SEO)  
  2. pre-rendering을 통한 ssg, ssr  
  3. 페이지 기반 라우팅 시스템  
  4. react 기반으로 쉬운 코딩  
  
[zustand]  
  zustand를 사용하는 이유  
  1. 직관적인 전역 상태관리  
  2. 코드 복잡성 해소  
  
아직 스타일에 관련된 스택은 정하지 않았으나 테일 윈드를 사용해 볼 것 같다.  

### version
[node js]  
  node js 22.^
  기존에 쓰던 노드의 버전이 엄청 옛날 버전이라서 next js가 run하지 않았다. 그래서 업그레이드를 해줬다.

# 트러블 슈팅
### 2025.03.27

[ node js version issue ] 
 
node js 버전이 18. 이하라서 20.으로 업그레이드 시켜줬다. 
 
다음 번에는 좀 더 편하게 버전 관리를 할 수 있게 docker를 사용할 예정이다. 
 
[server components, client components 구성 문제] 
 
![image.png](attachment:6fc380da-7da6-439d-b848-8974d6a3c87f:image.png) 
 
server/ client components 는 next 13 버전부터 나오는 개념이다. 
 
위 개념은 클라이언트로 보내는 js의 양을 줄일 수 있어서 랜더링을 더 빠르게 해줄 수 있다고 한다. 
 
기본적으로 app 디렉토리 내의 모든 컴포넌트는 server components로 랜더링 된다고 한다. 
 
그래서 위 표를 보자면 useRef도 server components로 랜더링이 불가능하다고 하는데 

[해결 방법] 
 
검색을 해보니 js 파일 상단에 클라이언트로 쓸 것이라 명시를 해주면 끝이었다. 
 
```jsx
"use client";
import ... from ...;
...
``` 

### 2025.03.28
 
[ 트러블 ] 
 
app router를 보고 next를 시작을 했지만 app router를 사용하는데 방법을 몰랐다. 
 
[ 해결 방법 ] 
 
몇가지 인사이트를 더 읽고나니 폴더 이름에서 문제인 것을 알았다. 
 
기존에는 
 
pages 
 
ㄴ article  (app/pages/article) 
 
ㄴ listpage  (app/pages/listpage) 
 
이렇게 했다 하지만 이렇게 하면 next가 인식을 못한다. 
 
찾아보니 폴더 이름이 곧 url이 되는데 여기서 page.js가 있으면 그것이 렌더링 컴포넌트가 되는 것이 었다. 
 
그래서 이렇게 바꿔서 해결할 수 있었다. 
 
pages 
 
ㄴ articlePage 
 
ㄴ page.js 
 
ㄴ listPage 
 
ㄴ page,js 
 
[ 기대 효과 ] 
 
이렇게 해보니 폴더를 구조적으로 좀 더 안정적이게 나눌 수 있겠다는 생각이 들었다. 
 
그래서 page별로 쓰이는 폴더는 page 폴더 안에 넣을 예정이고 공통으로 쓰이는 common 파일은 아래 src 폴더에 전부 정리를 할 생각이다. 
 
![image.png](attachment:3a3dfd83-0daa-49c6-8c3f-c0a012869228:image.png) 
 

### 2025.03.28

[ layout components ] 
 
레이아웃 파일을 가지고 놀 던 중에 알아낸 사실이 있다. 
 
layout 파일을 따로 만들어서 이걸 하이라키 구조에 넣으면 적용이 된다는 것을 알았다. 
 
그래서 공통 컴포넌트로 만들고 싶으면 하이라키 구조의 상위 단에 넣으면 그 아래 랜더링 컴포넌트에는 전부 적용이 된다는 것을 알았다. 
 
[ lazy loading ] 
 
사용자가 아직 보지 않은 컨텐츠를 나중에 랜더링하여 리소스를 적게 잡아먹게 하는 방식 
 
[ hydrate ] 
 
next 는 hydrate를 없애고 네이티브 lazy loading을 통해 이미지 최적화를 하였다. 
 
hydrate는 javascript와 html을 랜더링 페이지에서 한번 더 매칭을 하는 과정을 hydrate라고 한다. 
 
[ next/Image ] 
 
```jsx
import Image from './next/Image'

...

<Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
``` 
 
- 기존의 Image 컴포넌트에 좀 더 강력한 기능들을 부가해서, layout 변경 없이 간단히 이미지를 표시하고 파일을 최적화하여 성능을 향상
- 클라이언트 측에서 더 적은 양의 Javascript 코드를 가짐
- 더 쉽게 스타일링과 설정이 가능
- alt 속성을 필수로 제한하여 웹 접근성 향상
- 웹 플랫폼에 맞게 조정 (사이즈와 화질 등) - 이미지 로드가 느리면 기존 레이아웃이 밀리는 Layout Shift를 방지 (width, height 필수)
- hydration을 필요로 하지 않는 네이티브 lazy-loading 으로 속도 향상
- (참고) 기존 이미지 컴포넌트는 next/legacy/image로 변경됨 
 
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
🟨⬛⬜🟨🟨🟨🟨🟨⬛⬜🟨
🟨⬛⬛🟨🟨🟨🟨🟨⬛⬛🟨
🟨⬛⬛🟨🟨⬛🟨🟨⬛⬛🟨
🟥🟨🟨🟨🟨🟨🟨🟨🟨🟨🟥
🟥🟥🟨🟨🟨⬛🟨🟨🟨🟥🟥
🟥🟥🟨🟨⬛🟨⬛🟨🟨🟥🟥
🟥🟨🟨🟨🟨🟨🟨🟨🟨🟨🟥
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨 
 
  
   

