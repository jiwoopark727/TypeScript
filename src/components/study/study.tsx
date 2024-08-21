// 리액트에서 props는 컴포넌트 간의 데이터를 전달하는 방법입니다.
// props는 부모 컴포넌트가 자식 컴포넌트에 전달하는 읽기 전용 데이터
// props 컴포넌트가 상위 컴포넌트로부터 받는 입력값,
// 컴포넌트는 이를 이용해 렌더링 결과를 동적으로 변경할 수 있다.

// 문법
// <Component 속성={값}/>

// 기본 사용법
// const Greeting = (props: {name: string}) => {
//   return <h1>Hello, {props.name}</h1>
// }

// export default Greeting;