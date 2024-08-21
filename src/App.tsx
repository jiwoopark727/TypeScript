import UserCard from './components/study/UserCard'

const App = () => {
  const onClickHandler = (name:string, age:number, gender: string) => {
    alert(`${name}, ${age}, ${gender === "male" ? "남자" : "여자"}`);
  }
  return (
    <div>
      <UserCard 
        name='철수'
        age={19}
        gender={"male"}
        onClickHandler = {onClickHandler}/>
      <UserCard
        name='영희'
        age={19}
        gender={"female"}
        onClickHandler = {onClickHandler}/>
      <UserCard
        name='바둑이'
        age={10}
        gender={"male"}
        onClickHandler = {onClickHandler}/>
      {/* 아래처럼 표현식을 써도 무방
      <Greeting name={"철수"}/>
      <Greeting name={"영희"}/>
      <Greeting name={"바둑이"}/> */}
    </div>
  )
}
export default App

// 구조 분해 할당 사용 -> 비구조화 할당 이라고도 한다고 함!
// 컴포넌트에서 props를 받을 때 아래처럼 구조 분해 할당을 사용해도 된다
// 구조 분해 할당 props를 분해해서! 하나하나 구체적으로 할당 하는 것!
// const Greeting = ({name} : {name:string}) => {
//   return <h1>Hello, {name}</h1>;
// }
// export default Greeting;


//UserCard.tsx에서 여러 개의 props 전달하는 거 해봄

//이벤트 전달
//props로 이벤트(함수)도 전달 가능