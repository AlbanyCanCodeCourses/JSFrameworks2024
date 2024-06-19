export default function AccordionSection() {
  return (
    <>
      <div className={props.isOpen ? "title active" : "title"}>
        <i className="dropdown icon"></i>
        {props.title}
      </div>
      <div className={props.isOpen ? "content active" : "content"}>
        <p className={props.isOpen ? "transition visible" : "transition hidden"}>
          {props.content}
        </p>
      </div>
    </>
  );
}