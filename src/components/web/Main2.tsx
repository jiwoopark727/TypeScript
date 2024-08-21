import SectionItem from './SectionItem'

const Main2 = () => {
  const arr1 = ["소개", "서비스", "연락처"];
  const arr2 = ["여기에 소개 내용을 작성하세요.", 
    "여기에 제공하는 서비스 내용을 작성하세요.",
    "여기에 연락처 정보를 작성하세요."
  ]
  const onClickHandler = (type: string) => {
    alert(type);
  }
  return (
    <>
      <main>
        <SectionItem id='section1' name={`${arr1[0]}`} content={`${arr2[0]}`} onClickHandler={onClickHandler}></SectionItem>
        <SectionItem id='section2' name={`${arr1[1]}`} content={`${arr2[1]}`} onClickHandler={onClickHandler}></SectionItem>
        <SectionItem id='section3' name={`${arr1[2]}`} content={`${arr2[0]}`} onClickHandler={onClickHandler}></SectionItem>      
      </main>
    </>
  )
}
export default Main2