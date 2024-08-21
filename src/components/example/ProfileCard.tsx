type ProfileCardProps = {
  backImg: string;
  userImg: string;
  userName: string;
  instaId: string;
  onClickFollow: (type: string) => void;
}


const ProfileCard = ({backImg, userImg, userName, instaId, onClickFollow}: ProfileCardProps) => {
  return (
    <>
      <article className="card">
        <div>
          <img
            className="card-img"
            src={backImg}
            alt="background-pic"
          />
        </div>
        <div className="profile">
          <img
            className="prof-img"
            src={userImg}
            alt="profile-pic"
          />
          <h3 className="alias">{userName}</h3>
          <p className="username">{instaId}</p>
          <button onClick={()=>{onClickFollow("팔로우 완료")}}>
            <a href='https://www.instagram.com/stephencurry30/' target='_blank' title='스테판 커리 인스타그램'
            style={{textDecoration:"none", color:"white"}}
            >Follow</a>
            </button>
        </div>
      </article>
    </>
  )
}
export default ProfileCard