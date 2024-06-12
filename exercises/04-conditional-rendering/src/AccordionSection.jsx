function AccordionSection ({title, content, isOpen}) {
    const titleClasses = isOpen ? "title active" : "title";
    const transitionClasses = isOpen ? "transition visible" : "transition hidden";
    return (
        <>
            {/* update. remove active when collapsed */}
            <div class={titleClasses}>
                <i class="dropdown icon"></i>
                    {title}
            </div>
            {/* update. should toggle */}
            <div class="content active">
            <p class={transitionClasses}>
                {content}
            </p>
            </div>
        </>
    );
}


export default AccordionSection;