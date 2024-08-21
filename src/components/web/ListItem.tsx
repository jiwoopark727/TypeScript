type ListItemProps = {
  title: string;
  href: string;
}

const ListItem = ({href, title}: ListItemProps) => {
  return (
    <>
        <li>
          <a href={href}>{title}</a>
        </li>
    </>
  )
}
export default ListItem