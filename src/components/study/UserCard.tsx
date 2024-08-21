const UserCard = ({
  name,
  age,
  gender,
}: {name:string; age:number; gender:string;}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{gender}</p>
    </div>
  )
}

export default UserCard