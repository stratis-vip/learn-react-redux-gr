import React from "react";
import {MainStore, Pagination} from "../intefaces";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {setPage} from "../actions/pagination";
import {getPoemsFromServer} from "../apiConnect";
import {addToQueryOffset} from "../actions/query";

const paginatorWidth = 6;

const Pagination = (props: { pagination: Pagination, setNewPage: any, setOffset: any }) => {

  const {totalPages, page} = props.pagination
  const {setNewPage, setOffset} = props

  const prevPages = (first: boolean) => {
    let id = page > 1 ? page - 1 : page
    let velos = `«`;
    let disableVal = 1
    if (!first) {
      id = page < totalPages ? page + 1 : totalPages
      velos = `»`;
      disableVal = totalPages
    }
    return (<li
      key={-disableVal}
      id={String(id)}
      className={page === disableVal ? "page-item disabled" : "page-item"}>
      {page === disableVal ?
        <span className="page-link">{velos}</span> :
        <a className="page-link" href="#/"
           onClick={getPage}
           data-key={id}>{velos}</a>}
    </li>)
  }
  const makePages = () => {
    let items = []
    for (let i = 1; i < totalPages + 1; i++)
      items.push(<li key={i} id="prev" className="page-item">
        <a className="page-link" href="#/"
           onClick={getPage}
           data-key={i}
        >{i}</a></li>)
    return items
  }

  const getPage = ev => {
    let newPage = parseInt(ev.target.dataset['key']);
    goToPage(newPage)
  };

  const goToPage = (newPage: number): void => {
    setNewPage(newPage)
    setOffset((newPage - 1) * props.pagination.resultsPerPage)
    getPoemsFromServer()
  }

  function createLi(num: number) {
    return <li key={num}
               className={page === num ? "page-item active" : "page-item"}>
      <a className="page-link" href="#/"
         onClick={getPage}
         data-key={num}>{num}</a></li>;
  }

  const renderPages = () => {
    if (totalPages > 1) {
      if (totalPages < 10) {
        return (makePages())
      } else {
        let items = []
        // items.push(makeFirst(true))
        items.push(prevPages(true))
        let left =
          totalPages - page > paginatorWidth
            ? page
            : totalPages - paginatorWidth;
        let topLeft = left + paginatorWidth / 2;
        topLeft = topLeft > totalPages ? totalPages : topLeft;
        let afterDotPage =
          totalPages - paginatorWidth / 2 > topLeft
            ? totalPages - paginatorWidth / 2 + 1
            : topLeft;
        for (let i = left; i != topLeft; ++i) {
          items.push(createLi(i))
        }
        if (afterDotPage !== topLeft)
          items.push(<li key={0} className="page-item disabled"><span className="page-link disabled">...</span></li>);
        for (let i = afterDotPage; i != totalPages + 1; ++i) {
          items.push(createLi(i))
        }
        if (totalPages > 1) {
          items.push(prevPages(false))
          //items.push(makeFirst(false))
        }
        return items
      }
    }
  }

  const clStart = page === 1 ? " disabled" : ''

  return (
    <div className="text-center">
      <nav>
        <ul className="pagination justify-content-center mt-2">
          {totalPages > 6 ?
            <li className={"page-item" + clStart} hidden={page > 1 ? false : true}>
              <a className="page-link" href="#/"
                 onClick={goToPage.bind(null, 1)}>1</a>
            </li> : null}
          {renderPages()}
        </ul>
      </nav>
    </div>
  )
}

const mapStateToProps = (state: MainStore) => {
  return {
    pagination: state.pagination
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({setNewPage: setPage, setOffset: addToQueryOffset}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Pagination)