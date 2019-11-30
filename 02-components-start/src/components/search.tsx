import React from "react"
import { MainStore } from "../intefaces"
import { bindActionCreators } from "redux"
import { connect } from 'react-redux'
import { addSearchByNumber, AddSearchByNumberAction, addSearchByText, AddSearchByTextAction } from "../actions/search"
import { Search } from '../intefaces'

const Search = (props: { search: Search, searchText: any, searchNum: any }) => {
  const { searchText, searchNum } = props
  // const getVal = (dataKeyval: string): string | null => {
  //   return (document.querySelector(`input[data-key="${dataKeyval}"]`) as HTMLInputElement).value
  // }
  // const addTextSearch = () => {
  //   const text = getVal('inText').trim()
  //   console.log(text)
  //   if (text && text.length > 3) {
  //     console.log(`DEBUG ${text}`)
  //     addSearchByText(text)
  //       (textBtn as unknown as HTMLButtonElement).disabled = false
  //   }
  // }

  // const searchTextKeyPress = (ev) => {
  //   const l = String(ev.target.value) as string
  //   if (l.length > 3) {
  //     (document.querySelector('input[data-key="inNum"]') as any).value = null as null
  //     (document.querySelector('button[data-key="text"]') as HTMLButtonElement).disabled = false as boolean
  //     (document.querySelector('button[data-key="num"]') as HTMLButtonElement).disabled = true as boolean
  //   } else {
  //     (document.querySelector('button[data-key="text"]') as HTMLButtonElement).disabled = true
  //   }
  // }
  // const searchNumKeyPress = (ev) => {
  //   const l = String(ev.target.value) as string
  //   if (l.length > 0) {
  //     (document.querySelector('input[data-key="inText"]') as any).value = null as null
  //     (document.querySelector('button[data-key="text"]') as HTMLButtonElement).disabled = true as boolean
  //     (document.querySelector('button[data-key="num"]') as HTMLButtonElement).disabled = false as boolean
  //   } else {
  //     (document.querySelector('button[data-key="num"]') as HTMLButtonElement).disabled = true
  //   }
  // }

  // const addNumberSearch = () => {
  //   const num = parseInt(getVal('inNum'))
  //   if (!isNaN(num)) {
  //     console.log(`DEBUG ${num}`)
  //     addSearchByNumber(num)
  //   }
  // }

  const onTextBtnPress = (ev) =>{
    console.log(ev.target)
    const text = (document.querySelector('input[data-key="inText"]') as HTMLInputElement).value
    if (text.trim().length > 3)
      searchText(text)
  }

  const onNumBtnPress = (ev) =>{
    //TODO να ψάχνει μόνο αν αλλάζει πραγματικά
    console.log(ev.target)
    const num = parseInt((document.querySelector('input[data-key="inNum"]') as HTMLInputElement).value)
    if (!isNaN(num)) {
      searchNum(num)
      console.log(num)
    }
  }

  const textBtn = <button data-key="text" className="btn btn-primary form-control"
  onClick={onTextBtnPress}>
    Αναζήτηση</button> as JSX.Element
  const numBtn = <button data-key="num" className="btn btn-primary form-control"
    onClick={onNumBtnPress}>Αναζήτηση</button>


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
    filters: state.search
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ searchText: addSearchByText, searchNum: addSearchByNumber }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Search)

