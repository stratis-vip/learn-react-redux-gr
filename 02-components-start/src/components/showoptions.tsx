import React from "react";
import Options from "./options";
import QueryDescription from "./query-description";
import ExecuteSearch from "./ExecuteSearch";
import Search from "./search";

const ShowOptions = (): JSX.Element => {
  return <div>
    <div id="container" className="container col-lg-6 offset-lg-3">
      <div className="epikefalida m-1 h4 alert text-center">Επιλογές</div>
      <div className="m-2">
        <Options/>
        <Search/>
        <QueryDescription/>
        <ExecuteSearch/>
      </div>
    </div>
  </div>
}

export default ShowOptions