import React from 'react'
import {CardProps} from '../intefaces'

const Card = (cardProps: CardProps) => {

  const headerRref = React.createRef()
  const toggleBody = () => {
    const next = ((headerRref.current as HTMLElement).nextSibling) as HTMLElement
    if (next.clientHeight) {
      next.style.height = '0';
      next.style.padding = '0';
    } else {
      next.style.height = "auto";
      next.style.padding = "1rem";
    }
  }

  return (
    <div className="card border-dark mt-2">
      <div className="card-header"
           ref={headerRref as React.LegacyRef<HTMLDivElement>}
           onClick={toggleBody}
      >{cardProps.headerText}</div>
      <div className="card-body">
        <div
          className="contentError text-center alert"
          hidden={cardProps.isInError ? false : true}>{cardProps.errorText}
        </div>
        <div className="content">
          {cardProps.mainText}
          {cardProps.child}
        </div>
      </div>
    </div>
  )
}

export default Card