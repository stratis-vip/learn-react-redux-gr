import {IapiPoemsResponse, Icategory, Poem, Query} from "./intefaces";
import axios from 'axios'
import {ORDER, SORT} from "./actions/filters";
import {setPagination} from "./actions/pagination";
import {addToQueryLimit, addToQueryOffset} from "./actions/query";
import {addDataArray} from "./actions/data";
import {addAllCategories} from "./actions/category";
import store from "./store";


const serverUrl = 'http://localhost:3010/'

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


export const get = async () => {
  const cc = await getInitialData(store)
  setInitialPagination(cc, store);
  getDataArray().then(dataResponse => {
    if (dataResponse.code === 200) {
      store.dispatch(addDataArray(dataResponse.data as unknown as Poem[]))
    }
  })
}

export const getStatistics = () => {
  getFromServer(`${serverUrl}statistics`).then((data) => {
    store.dispatch(addAllCategories((data.data! as unknown as Icategory[])))
  })
}

const getDataArray = async () => {
  let queries = constructQueryFromState(store.getState().query)
  return await getFromServer(`${serverUrl}query`, queries.dataQuery)
}
/***
 * Δημιουργεί δυο queries, το data και το count (για αν μετρά πρώτα και μετά να ζητά τα δεδομένα)
 * @param query
 */
const constructQueryFromState = (query: Query): { dataQuery: string, countQuery: string } => {
  const queryArray = []
  const type: string = query.type || 'SELECT'
  const what: string = query.what.length === 0 ? '*' : query.what.join(' ')
  const from: string = query.from.length === 0 ? 'keimena' : query.from.join(' ')
  const where: string = query.where.length === 0 ? '' : 'WHERE ' + query.where.join(' ')
  const order: string = query.order === ORDER.NO_ORDER ? '' : 'ORDER BY ' + query.order
  let sort: string = query.sort === SORT.NO_SORT ? '' : query.sort

  queryArray.push(type)
  queryArray.push(what)
  queryArray.push(`FROM ${from}`)
  queryArray.push(where)
  queryArray.push(order)
  if (order.length > 0) {
    if (sort !== '') {
      sort = sort === SORT.ASC ? `ASC` : `DESC`
    }
  }
  queryArray.push(sort)
  queryArray.push(`LIMIT ${query.offset}, ${query.limit}`)
  let arStr = ''
  for (let ar of queryArray)
    if (ar.length > 0) arStr += ar + ' '
  const countQuery = queryArray[0] + ` count(${queryArray[1]}) as cc ` + queryArray[2]
  return {dataQuery: arStr, countQuery: countQuery}
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
  if (rpp !== resultsPerPage) {
    pag.resultsPerPage = rpp
    let totPages = Math.ceil(cc / rpp)
    if (totPages !== totalPages) {
      pag.totalPages = totPages
    }
    if (page !== 1) {
      pag.page = 1
    }
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
  return new Promise<number>(async (resolve) => {
    let queries = constructQueryFromState(store.getState().query)

    let count = await getCountFromServer(`${serverUrl}query`, queries.countQuery)
      //.then(response => console.log(response))
      .catch(er => console.log(er))
    // const {data} = count
    resolve(count ? count : 0)
  })
}