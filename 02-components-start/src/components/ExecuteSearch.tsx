import React from "react";
import {refreshDataFromServer, resetAllFiltersQueries} from "../apiConnect";
import ButtonFactory from "../btnFactory";


const ExecuteSearch = (): JSX.Element => (
  <div className="text-center">
    <ButtonFactory className={"btn-primary"} title='Αναζήτηση' url='/home' func={refreshDataFromServer}/>
    <ButtonFactory className={"btn-danger ml-2"} title={'Μηδενισμός φίλτρων'} url='/home' func={resetAllFiltersQueries}/>
  </div>)

export default ExecuteSearch