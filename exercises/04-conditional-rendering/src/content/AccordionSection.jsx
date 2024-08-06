git import {content} from "./accordion"

// console.log(content)
const AccordionSection = ({isOpen, title, content})=>{
return(

    <>
        {console.log(props)} 
        <div className = "title active">
        <i className = "dropdown icon"></i>

        {title}

        </div>

        <div className = "content active">
        <p className = "transition visible">
        {content}
        </p>
        </div>
    </>
    )
}


export default AccordionSection
