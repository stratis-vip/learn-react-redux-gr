import React, {SyntheticEvent} from "react";
import {connect} from 'react-redux'
import {Icategory, MainStore, Pagination, Poem} from "../intefaces";

const showMore = (ev: SyntheticEvent): void => {
  const num = (ev.target as HTMLElement).id.split('moreLink')[1]
  const dots = document.getElementById("dots" + String(num));
  const moreText = document.getElementById("more" + String(num));
  const btnText = document.getElementById("moreLink" + String(num));
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "περισσότερα";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "λιγότερα";
    moreText.style.display = "inline";
  }
}

const makeLessMoreKeimeno = (t: Poem): JSX.Element => {
  const {keimeno, id} = t
  let oneThird = Math.floor(keimeno.length / 3)

  if (oneThird > 120) {
    if (oneThird > 300) {
      oneThird = 300
    }
    return (<div>
        {keimeno.substring(0, oneThird)}
        <span id={"dots" + id}>...</span>
        <span id={"more" + id} className="more">{keimeno.substr(oneThird)}</span>
        <a id={"moreLink" + id} onClick={showMore} href={'#poem' + id}>περισσότερα</a>
      </div>
    )
  } else {
    return <div>{keimeno}</div>
  }
};

const Poem = (props: { poems: Poem[], cats: Icategory[], page: Pagination }) => {
  const {poems, cats, page} = props

  const renderPoems = () => {
    if (poems.length === 0) return (<div/>)
    return poems.map((poem, index) => {
      const dat = new Date(Date.parse(poem.imnia_auth.replace(/-/g, "\/")));
      return (
        <div key={index} className="poem container-fluid mt-1 rounded p-3">
          <div className="text-center rel">
            <div className="num">{(page.page - 1) * page.resultsPerPage + index + 1}</div>
            <div>ΑΚ {poem.id} [{cats.length > 0 ? cats[poem.category].description : ''} #{poem.keimeno_id} ({
              dat.toLocaleDateString("el-EL", {
                year: "numeric",
                month: "short",
                day: "numeric"
              })
            })]
            </div>
            <div className="poem container-fluid bg-light rounded p-3 text-left">{makeLessMoreKeimeno(poem)}</div>
          </div>
        </div>)
    })
  }

  return renderPoems()

}

const mapStateToProps = (state: MainStore) => {
  return {
    poems: state.data,
    cats: state.categories,
    page: state.pagination
  }
}


export default connect(mapStateToProps)(Poem)