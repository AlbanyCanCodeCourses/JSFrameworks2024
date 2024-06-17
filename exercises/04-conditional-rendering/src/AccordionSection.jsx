import React, {useState} from "react";

function AccordionSection ({title, content}) {
    const [isOpen, setIsOpen] = useState(false);

    const titleClasses = isOpen ? ["title active"] : ["title"];
    const transitionClasses = isOpen ? ["transition visible"] : ["transition hidden"];
    return (
        <>
            <div onClick={()=> setIsOpen(true)} class={titleClasses}>
                <i class="dropdown icon"></i>
                    {title}
            </div>
            <div class="content active">
            <p class={transitionClasses}>
                {content}
            </p>
            </div>
        </>
    );
}


export default AccordionSection;