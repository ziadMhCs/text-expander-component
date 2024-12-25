import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div >
      <TextExpander className="box">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622" className="box"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  expanded=false,
  expandButtonText="expand",
  collapseButtonText="collapse",
  buttonColor="blue",
  collapsedNumWords=5,
  className
}) {
  const [isExpanded,setIsExpanded]=useState(expanded);
  const wholeText=children.toString();//text to display when is expanded
// console.log(wholeText)
  const partOfText= wholeText.split(' ').slice(0,collapsedNumWords).join(' ')+"...";//text to display when is collapsed
  // console.log(partOfText);
  const buttonStyle={
    background:"none",
    color:buttonColor,
    font:"inherit",
    marginLeft:"6px",
    cursor: "pointer",
    border:"none"
  }
  return (
    <div className={className}>
      {isExpanded?wholeText:partOfText}
      <button
      style= {buttonStyle}
      onClick={()=>setIsExpanded(s=>!s)}
      >{isExpanded?collapseButtonText:expandButtonText} </button>
    </div>
  );
}
