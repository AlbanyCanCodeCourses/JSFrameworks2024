function AccordionSection({ isOpen, title, content }) {

    const titleClass = isOpen ? "title active" : "title";
    const transitionClass = isOpen ? "transition visible" : "transition hidden";
    const contentClass = isOpen ? "content active" : "content";

    return (
        <>
            <div className={titleClass}>
                <i className="dropdown icon"></i>
                {title}
            </div>
            <div className={contentClass}>
                <p className={transitionClass}>
                    {content}
                </p>
            </div>
        </>
    );
};
  
export default AccordionSection;