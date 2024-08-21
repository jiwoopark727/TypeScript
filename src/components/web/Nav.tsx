import ListItem from './ListItem'

const Nav = () => {
  const arr1 = ["소개", "서비스", "연락처"];
  const arr2 = [1,2,3];
  return (
    <nav>
      <ul>
        <ListItem href={`#section${arr2[0]}`} title={`${arr1[0]}`}/>
        <ListItem href={`#section${arr2[1]}`} title={`${arr1[1]}`}/>
        <ListItem href={`#section${arr2[2]}`} title={`${arr1[2]}`}/>
      </ul>
    </nav>
  )
}
export default Nav