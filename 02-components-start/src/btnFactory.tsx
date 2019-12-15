import {Route} from "react-router-dom";
import React from 'react'

const ButtonFactory = (props: { title: string, func: () => void, url:string, className?: string }) => {
  return (
    <Route render={({history}) => (
      <button className={"btn mt-2 " + props.className} onClick={() => {
        props.func()
        history.push(props.url)
      }}>{props.title}</button>
    )}>
    </Route>
  )
}

export default ButtonFactory