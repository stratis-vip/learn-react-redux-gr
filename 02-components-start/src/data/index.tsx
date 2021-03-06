import {MainStore} from "../intefaces";
import {Action} from "redux";
import { ORDER, SORT} from "../actions/filters";
import {MODE} from "../actions/mode"

const mData = (state: MainStore, action: Action) => {
  return {
    categories: [
      {"id": 1, "cc": 411, "description": "Ποιητικά", "max": 398},
      {"id": 2, "cc": 157, "description": "Λογοπλοκίες", "max": 127},
      {"id": 3, "cc": 2, "description": "Συνεργατικά", "max": 2 },
      {"id": 4, "cc": 2, "description": "Μεγάλες απορίες", "max": 2},
      {"id": 5, "cc": 23, "description": "Της ζωής τα δεδομένα", "max": 23}
    ],
    mode: MODE.NORMAL,
    query: {
      filters: {
        cat: 0,
        order: ORDER.NO_ORDER,
        sort: SORT.NO_SORT
      },
      type: 'SELECT',
      what: ['*'],
      from: ['keimena'],
      where: [],
      offset: 0,
      limit: 10
    },
    search: {
      text: null,
      number: null
    },
    data: [
      {
        id: 3,
        keimeno_id: 1,
        keimeno: "ΝΙΩΘΩ ΜΙΑ ΑΝΕΞΑΝΤΛΗΤΗ ΕΛΕΥΘΕΡΙΑ ΧΩΡΙΣ ΕΣΕΝΑ.\r\nΝΙΩΘΩ ΤΟΝ ΚΕΡΑΥΝΟ ΝΑ ΧΤΥΠΑΕΙ ΔΙΠΛΑ ΜΟΥ ΚΙ ΕΓΩ ΝΑ ΤΗ ΓΛΙΤΩΝΩ\r\nΤΗ ΒΡΟΧΗ ΝΑ ΜΗ ΜΕ ΒΡΕΧΕΙ ΠΙΑ.......\r\n\r\n\r\nΤα ποτάμια να ανοίγουν να περνώ!\r\nΣτα μάτια σαν σε βλέπω...\r\nτη δύναμη που αντλώ, πες μου πώς να την γιατρέψω!!!!",
        category: 3,
                imnia_auth: "2013-06-18",
                eksigisi: null
            },
            {
                id: 4,
                keimeno_id: 1,
                keimeno: "...και τι κόσμος είναι αυτός, που ο άντρας δεν υπερβάλλει την ομορφιά της γυναίκας;",
                category: 4,
                imnia_auth: "2013-11-02",
                eksigisi: null
            },
            {
                id: 22,
                keimeno_id: 18,
                keimeno: "Μαγεία: να μετατρέψεις τη θλίψη στο πρόσωπο σε χαμόγελο στα μάτια...",
                category: 5,
                imnia_auth: "2014-09-27",
                eksigisi: null
            }
        ],
    pagination: {
            page: 1,
            totalPages: 1,
            resultsPerPage: 10,
            results: 3
        },
    route: '/home',
    authorized: false
  }
}
export default mData