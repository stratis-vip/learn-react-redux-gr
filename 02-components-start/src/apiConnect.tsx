import {IapiPoemsResponse, Icategory, MainStore, Poem} from "./intefaces";
import axios from 'axios'
import {ORDER, resetFilters, SORT} from "./actions/filters";
import {setPagination} from "./actions/pagination";
import {addToQueryLimit, addToQueryOffset, resetQuery} from "./actions/query";
import {addDataArray, clearData} from "./actions/data";
import {addAllCategories} from "./actions/category";
import store from "./store";
import {resetSearch} from "./actions/search";


// const serverUrl = 'http://localhost:3010/'
const serverUrl = 'http://test.texnopraksis.com/'

/***
 * επιστρέφει από το σέρβερ πόσα ποιήματα υπάρχουνε με το query
 * @param url
 * @param query
 */
const getCountFromServer = (url: string, query?: string): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    const options = {
      params: {
        query: query
      }
    }
    axios
      .get(url, options)
      .then((response) => {
        resolve(response.data.data[0].cc);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  })
}

/***
 * επιστρέφει δεδομένα από το σέρβερ με ποιήματα
 * @param url
 * @param query
 */
export const getFromServer = (url: string, query?: string): Promise<IapiPoemsResponse> => {
  return new Promise<IapiPoemsResponse>((resolve, reject) => {
    const options = {
      params: {
        query: query
      }
    };
    axios
      .get(url, options)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  })
}


export function getPoemsFromServer() {
  getDataArray().then(dataResponse => {
    if (dataResponse.code === 200) {
      store.dispatch(addDataArray(dataResponse.data as unknown as Poem[]))
    }
  })
}

export const resetAllFiltersQueries = () => {
  store.dispatch(resetSearch())
  store.dispatch(resetFilters())
  store.dispatch(resetQuery())
  document.querySelectorAll('input').forEach(val => val.value = null)
  getPoemsFromServer()
}

export const refreshDataFromServer = () => {
  getInitialData(store).then((cc: number) => {
    if (cc !== 0) {
      setInitialPagination(cc, store)
      getPoemsFromServer()
    } else {
      store.dispatch(clearData())
      const resultsPerPage = store.getState().pagination.resultsPerPage
      store.dispatch(setPagination({page: 1, resultsPerPage: resultsPerPage, results: 0, totalPages: 0}))
    }
  })
}


export const getStatistics = () => {
  getFromServer(`${serverUrl}statistics`).then((data) => {
    store.dispatch(addAllCategories((data.data! as unknown as Icategory[])))
  })
}

export const getDataArray = async () => {
  let queries = constructQueryFromState(store.getState())
  console.log(queries.dataQuery)
  return await getFromServer(`${serverUrl}query`, queries.dataQuery)
}

const getOrderText = (val: string) => {
  console.log('ORDER.BY_DATE=', ORDER.BY_DATE, val, ORDER.BY_DATE === val)
  return val === ORDER.BY_DATE ? 'imnia_auth' : 'id'
}

const getSortText = (val: string) => {
  console.log('SORT.ASC=', SORT.ASC, val, SORT.ASC === val)
  return val === SORT.ASC ? ' ASC' : ' DESC'
}

/***
 * Δημιουργεί δυο queries, το data και το count (για αν μετρά πρώτα και μετά να ζητά τα δεδομένα)
 * @param state
 */
const constructQueryFromState = (state: MainStore): { dataQuery: string, countQuery: string } => {
  const {query, search} = state
  const queryArray = []
  const type: string = query.type || 'SELECT'
  const what: string = query.what.length === 0 ? '*' : query.what.join(' ')
  const from: string = query.from.length === 0 ? 'keimena' : query.from.join(' ')
  let where: string = query.where.length === 0 ? '' : 'WHERE ' + query.where.join(' ')
  const order: string = query.filters.order === ORDER.NO_ORDER ? '' : 'ORDER BY ' + getOrderText(query.filters.order)
  let sort: string = query.filters.sort === SORT.NO_SORT ? '' : getSortText(query.filters.sort)
  if (order === '') sort = ''
  queryArray.push(type)
  queryArray.push(what)
  queryArray.push(`FROM ${from}`)
  if (search.text !== null) {
    where += where.length > 0 ? ` AND keimeno LIKE '%${search.text}%'` : ` WHERE keimeno LIKE '%${search.text}%'`
  } else {
    if (search.number !== null) {
      where += where.length > 0 ? ` AND keimeno_id = ${search.number}` : ` WHERE keimeno_id = ${search.number}`
    }
  }

  queryArray.push(where)
  queryArray.push(order)
  queryArray.push(sort)
  queryArray.push(`LIMIT ${query.offset}, ${query.limit}`)
  let arStr = ''
  for (let ar of queryArray)
    if (ar.length > 0) arStr += ar + ' '
  let countQuery = [...queryArray]
  countQuery[1] = ` count(${queryArray[1]}) as cc `

  const ctStr = countQuery.map((que, index) => {
    if (index < 4) return que
  })
  console.log(arStr, '   ', ctStr.join(' '))
  return {dataQuery: arStr, countQuery: ctStr.join(' ')}
}

/**
 * Δημιουργεί την αρχική σελιδοποίηση μόλις πάρει το σύνολο των εγγραφών
 * @param cc οι συνολικές εγγραφές
 * @param store
 */
export function setInitialPagination(cc: number, store) {
  const pag = Object.assign({}, store.getState().pagination)
  const {resultsPerPage, totalPages, page} = pag

  pag.results = cc
  let rpp = resultsPerPage === 0 ? 10 : resultsPerPage

  pag.resultsPerPage = rpp
  let totPages = Math.ceil(cc / rpp)
  if (totPages !== totalPages) {
    pag.totalPages = totPages
  }
  if (page !== 1) {
    pag.page = 1
  }


  store.dispatch(setPagination(pag))
  store.dispatch(addToQueryLimit(rpp))
  store.dispatch(addToQueryOffset(0))
}

/***
 * Κατεβάζει από το σέρβερ τα αρχικά ποιήματα
 * @param store
 */
export const getInitialData = (store) => {
  return new Promise<number>((resolve) => {
    let queries = constructQueryFromState(store.getState())

    getCountFromServer(`${serverUrl}query`, queries.countQuery)
      .then(response => resolve(response))
      .catch(er => console.log(er))
  })
}