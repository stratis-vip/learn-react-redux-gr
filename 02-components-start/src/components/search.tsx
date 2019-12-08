import React from "react"
import {MainStore, Search} from "../intefaces"
import {bindActionCreators} from "redux"
import {connect} from 'react-redux'
import {addSearchByNumber, addSearchByText} from "../actions/search"

const Search = (props: { search: Search, searchText: any, searchNum: any }) => {
  const {searchText, searchNum} = props
  const onTextBtnPress = () => {

    const text = (document.querySelector('input[data-key="inText"]') as HTMLInputElement).value
    if (text.trim().length > 3) {
      (document.querySelector('input[data-key="inNum"]') as HTMLInputElement).value = null
      searchText(text)
    } else {
      alert('Το κείμενο αναζήτησης πρέπει να είναι μεγαλύτερο από 3 χαρακτήρες!')
    }
  }

  const onNumBtnPress = () => {
    //TODO να ψάχνει μόνο αν αλλάζει πραγματικά
    const num = parseInt((document.querySelector('input[data-key="inNum"]') as HTMLInputElement).value)
    if (!isNaN(num) && num !== 0) {
      (document.querySelector('input[data-key="inText"]') as HTMLInputElement).value = null
      searchNum(num)
    } else {
      alert('Πρέπει να είναι αριθμός (διάφορος του 0)!')
    }
  }

  const textBtn = <button data-key="text" className="btn btn-primary form-control"
                          onClick={onTextBtnPress}>
    Καταχώρηση</button> as JSX.Element
  const numBtn = <button data-key="num" className="btn btn-primary form-control"
                         onClick={onNumBtnPress}>Καταχώρηση</button>


  return (
    <form action="#/">
      <div className="form-group row">
        <input data-key="inText" className="ml-2 col form-control" type="text"
               placeholder="Κείμενο προς αναζήτηση"
        />
        <div className="col-sm-4">
          {textBtn}
        </div>
      </div>
      <div className="form-group row">
        <input data-key="inNum" className="ml-2 col form-control" type="number"
               placeholder="Αριθμός καταχώρησης προς αναζήτηση"
        />
        <div className="col-sm-4">
          {numBtn}
        </div>
      </div>
    </form>
  )
}

const mapStateToProps = (state: MainStore) => {
  return {
    search: state.search
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({searchText: addSearchByText, searchNum: addSearchByNumber}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Search)

