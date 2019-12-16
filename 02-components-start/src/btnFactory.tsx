import { Route } from "react-router-dom";
import React from 'react'
/**
 * Εκτελεί την func και μεταβαίνει στην url
 * @param props 
 * @param props title το όνομα πάνω στο πλήκτρο 
 */
const ButtonFactory = (props: { title: string, func: () => void, url: string, className?: string }) => {
  return (
    <Route render={({ history }) => (
      <button className={"btn mt-2 " + props.className} onClick={() => {
        props.func()
        history.push(props.url)
      }}>{props.title}</button>
    )}>
    </Route>
  )
}
/**
 * Αν η func: () => Promise<boolean> γυρίσει true, τότε και μόνο τότε πηγαίνει στο url
 * @param props 
 */
export const ButtonIfFactory = (props: { title: string, func: () => Promise<boolean>, url: string, className?: string }) => {
  return (
    <Route render={({ history }) => (
      <button className={"btn mt-2 " + props.className} onClick={() => {
        props.func().then(bVal => {
          if (bVal === true)
            history.push(props.url)
        }).catch(er => console.log(er))

      }}>{props.title}</button>
    )}>
    </Route>
  )
}


export default ButtonFactory