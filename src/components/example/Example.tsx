import ProfileCard from './ProfileCard'

const Example = () => {
  const onClickFollow = (fc:string) => {
    alert(fc);
  }
  return (
    <>
      <ProfileCard
        backImg = {"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2171B75058AF95D128"}
        userImg = {"https://img.chuing.net/i/QuGNeJQ/thumb-1920-982246.jpg"}
        userName = {"Stephen Curry"}
        instaId = {"@stephencurry30"}
        onClickFollow = {onClickFollow}
      />
    </>
  )
}
export default Example