import React from "react";
import {refreshDataFromServer, resetAllFiltersQueries} from "../apiConnect";
import {Route} from "react-router-dom";

const ButtonFactory = (props: { title: string, func: () => void, className?: string }) => {
  return (
    <Route render={({history}) => (
      <button className={"btn mt-2 " + props.className} onClick={() => {
        props.func()
        history.push('/home')
      }}>{props.title}</button>
    )}>
    </Route>
  )
}

const ExecuteSearch = (): JSX.Element => (
  <div className="text-center">
    <ButtonFactory className={"btn-primary"} title='Αναζήτηση' func={refreshDataFromServer}/>
    <ButtonFactory className={"btn-danger ml-2"} title={'Μηδενισμός φίλτρων'} func={resetAllFiltersQueries}/>
  </div>)

export default ExecuteSearch