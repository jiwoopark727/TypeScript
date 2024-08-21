type SectionItemProps = {
  id: string;
  name: string;
  content: string;
  onClickHandler: (type: string) => void;
}

const SectionItem = ({id, name, content, onClickHandler}: SectionItemProps) => {
  return (
    <section id={id}>
      <h2>{name}</h2>
      <p>{content}</p>
      <button onClick={()=>onClickHandler(name)}>클릭</button>
    </section>
  )
}
export default SectionItem