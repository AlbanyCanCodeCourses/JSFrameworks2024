import { ReactNode } from "react";

type HeadingProps = {
  children :ReactNode;
}

const Heading = (props: HeadingProps) => {
    return <h1>{props.children}</h1>
   
  };
export default Heading;