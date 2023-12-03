# ✨ 쉽게 접근 가능한 중고마켓 가지마켓
<br/>


<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/b4ae484e-5696-4083-a1b0-f5f7a6873361" width="800" height="800"/>

## 프로젝트 소개
* 가지마켓은 사용자들이 자유롭게 소통할 수 있는 자유게시판과 쉽게 구매하고 판매 할 수 있는 중고마켓으로 구성되어있습니다.
* 각각의 상품마다 상세페이지가 있으며 "상품정보"와 "카카오 지도를 통한 위치" , "댓글" , "대댓글"을 확인 가능합니다.
* 상세페이지에서 결제하기 버튼을 누르면 결제가 가능합니다
  * 카카오페이
  * 포인트결제
* 마음에 드는 게시글 , 상품에 좋아요 기능 , 찜 기능을 사용하고 목록에서 확인 할 수 있습니다.
* 검색을 통해 쉽게 게시글과 상품을 찾을 수 있습니다.
* 마이페이지에서 내 상품, 찜 목록, 구매 목록, 판매 목록을 확인 할 수 있습니다.
* 마이페이지에서 포인트 충전이 가능합니다.
* 성능최적화
  * Image 및 Link 태그 사용으로 SEO 향상
  * 이미지 성능 최적화
    * 이미지 미리보기(임시 URL생성)
    * 다중 이미지 업로드에 Promise.all()을 사용
  * Reflow , Repaint 최소화
<br/>
<br/>

## 개발 환경

* Front : TypeScript, React, Next.js, GraphQL , Apollo , Recoil , Emotion
* Back-end : 제공된 API 활용
<br/>
<br/>



## 채택한 개발 기술
  TypeScript, React , Next.js, GraphQL , Emotion
  * TypeScript
    * TypeScript을 사용하여 코드 작성 중 타입 에러를 미리 감지하여 코드의 안정성을 향상시킬 수 있습니다.
    * TypeScript로 인해 변수나 함수에 대한 자동 완성 기능을 활용하여 빠르게 개발할 수 있습니다.
    * 안정적이고 유지보수가 쉬운 코드를 작성할 수 있습니다.
  * React
    * 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
    * 상품 등록 및 수정, 헤더 와 배너 부분이 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.
  * Next.js
    * Next.js를 채택한 것은 React기반의 웹 애플리케이션을 개발하는데 많은 이점을 주기 때문입니다.
    * Next.js는 페이지 레벨에서 SSR을 지원하여 초기 로딩 성능이 개선되고 SEO에 도움을 줍니다.
    * 코드 분할(Code Splitting)자동화를 통해 성능 최적화에 도움을 줍니다.
  * GraphQL
    * GraphQL은 Rest API와 달리 원하는 데이터 필드만 클라이언트에서 주도적으로 요청 할 수 있으며, 이로 인해 HTTP 요청횟수와 사이즈를 줄일 수 있습니다.
  * Emotion
     * SSR에서 다른 설정 없이 동작이 가능합니다.
     * props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
     * 고유한 클래스 이름을 부여하여 네이밍 컨벤션을 정하는 비용을 절약 할 수 있습니다.
   * Recoil
     * Recoil을 사용하여 Props Drilling을 해결 할 수 있습니다.
     * 사용법이 useState와 비슷하고 기존의 Redux보다 적은 코드로 작동 가능합니다.
     * Recoil을 사용하여 페이지 별 로그인 권한 체크를 하였습니다.
<br/>
<br/>

## 페이지별 기능
### 초기화면
* 초기화면으로 자유게시판이 보입니다.
* 우상단에 로그인 / 회원가입 버튼을 눌러 진행 가능합니다.
* 배너로는 react-slick을 사용하였고 커스텀하였습니다.
* 네비게이션바의 자유게시판 , 중고마켓 , 마이페이지를 눌러 이동할 수 있습니다.
* 베스트게시글 확인
* 디바운싱을 활용한 검색기능 , 해당 텍스트를 빨간색으로 출력하였습니다.
* 구현한 페이지네이션 및 게시긇 등록 버튼이 있습니다.
* 상세페이지에서 게시글 확인 및 댓글작성 가능합니다.
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/ec0edfc8-6aaa-4945-9e6e-5ebf9e33394b" height="700"/> 
<br/>
<br/>

### 로그인화면
* 이메일로 로그인 할 수 있습니다.
* 렌더링 이슈를 해결하기 위해 react-hook-form을 사용하였습니다.
* 유효성 검사 라이브러리인 yup을 사용하여 오류를 검증하였습니다.
* 모두 입력시 버튼이 활성화됩니다.
* 비밀번호 찾기는 구현되어있지 않습니다.
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/7b084055-f87b-4889-aebe-989d87664f48" width="600" height="300"/> 

<br/>
<br/>

### 회원가입 화면
* 로그인 페이지에서 '회원가입'을 누르거나 메인화면 우상단 회원가입 버튼을 누르면 회원가입 화면이 나타납니다.
* 렌더링 이슈를 해결하기 위해 react-hook-form을 사용하였습니다.
* 유효성 검사 라이브러리인 yup을 사용하여 오류를 검증하였습니다.
* 모두 입력시 버튼이 활성화됩니다.
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/c1fcc4a9-fc7a-4021-8592-175b29e4b816" width="500" height="600"/>

<br/>
<br/>


### 자유게시판 검색기능
* 입력시 자동으로 검색 결과가 표시
* 해당 텍스트는 빨간색으로 표시
* 검색 성능 최적화를 위해 Debouncing 사용
* 검색에 해당되는 게시글 수에 따라 페이지 숫자 변경
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/44669bd0-dc0a-437f-85bf-20266ea2d35d" width="800" height="500"/>

<br/>
<br/>

### 게시글 등록 및 수정 , 상세페이지, 댓글기능
* 중고마켓에 동일한 기능이 있기 때문에 중고마켓 부분에서 실행

<br/>
<br/>

### 중고마켓 메인화면
* 베스트 상품확인
* 무한스크롤로 상품 목록 표시
* 이미지 없을 경우 대체 이미지 사용
* 새로고침 시 상품 로딩중 구현
  * react-spinners 사용
* 상품 클릭시 상세페이지로 이동
* 우측 하단 +버튼을 눌러 상품 등록 가능
* 우측에 오늘 본 상품 구현
* 검색에 해당되는 상품 수에 따라 페이지 숫자 변경
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/a34bc55c-6572-4bfd-b10e-da4764ffd98a" height="700"/>

<br/>
<br/>

### 중고마켓 검색기능 및 무한스크롤
* 자유게시판과 동일
* 검색 성능 최적화를 위해 Debouncing 사용
* 무한스크롤에 성능최적화를 위해 Throttling적용
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/a26f2b85-b6dc-4c5b-bc53-d1f3968849be" height="700"/>

### 중고마켓 상품등록
* 등록버튼 누를때 입력값이 없으면 에러메세지 출력됩니다,
* 등록중 진행중일때 로딩중 모달 구현 및 등록완료 모달 구현했습니다.
* react-quill을 사용한 웹 애디터 구현했습니다.
* react-daum-postcode으로 주소 찾은 후 카카오지도로 위치 보여주도록 구현했습니다.
* 이미지 성능최적화
  * 임시 미리보기 url로 이미지 등록 속도 향상
  * Promise.all()을 사용하여 다중 이미지 처리
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/02e93476-699e-4e3f-9a07-a72bc6072e7e" width="45%" height="450"/>
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/3c9ab93c-1c71-4afc-b8c6-ef7036560a36" width="45%" height="450"/>
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/bad15576-69da-4023-b5a8-9b02883edbd2" width="45%" height="450"/>
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/7988c67e-6905-4259-84fa-c2da6bb30c2b" width="45%" height="450"/>

### 중고마켓 상세페이지
* 상품정보 및 위치를 확인 할 수 있습니다.
* 하트아이콘을 눌러 찜 추가 및 삭제를 할 수 있습니다.
* 구매허기 버튼을 누르면 결제하기 모달이 나옵니다.
   * 포트원을 사용하여 결제를 구현했습니다.
   * 결제 모달에 이름 , 주소 , 연락처 , 이메일을 입력합니다.
   * 카카오페이 , 가지페이(포인트결제)중 선택할 수 있습니다.
   * 가지페이는 포인트 부족시 에러메세지 출력 및 버튼 비활성화됩니다.
* 댓글 및 대댓글 기능이 있습니다.
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/68a6a60d-96d2-4810-ab25-b8bcb46bfa89" width="45%"/>
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/571f19ef-f4f9-472c-a998-987213ea6cb9" width="45%"/>
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/6826c1a2-24e6-4e8c-a6f5-68ec3dfaee79" width="30%"/>
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/b5427156-6a9a-4dd5-a08a-352acaf4404f" width="30%"/>
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/5b4736e5-484c-46db-8445-69a0b53bf63d" width="30%"/>

### 마이페이지
* 내 상품 , 찜목록 , 구매 및 판매 목록 , 프로필 변경 페이지가 있습니다.
* 상품 수정 및 삭제는 마이페이지 안에서 가능합니다.
* 중고마켓과 같은 원리의 검색기능이 있습니다.
* 가지페이는 마이페이지에서 충전 가능합니다.
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/b4aea4e7-e50e-433f-972a-d3f788a1e82e" width="45%"/>
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/d4951d6f-b47b-4a55-b6c1-845dbde23acd" width="45%"/>
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/918b8a13-1e30-47cb-b63c-97baba66e472" width="45%"/>
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/b8853c8d-7d5d-40c8-85a1-a8307e5936d6" width="45%"/>
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/20406bfb-9e4c-46d6-b4c1-9303e42a0d7a" width="45%"/>
<img src="https://github.com/JaeIn1/frontend-portfolio/assets/97165077/3e0be671-fdc7-455e-a885-ab8c66cb88b4" width="45%"/>




     
