import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer.js";
import {
    binaryTreeSearch,
    fibonacciSearch,
    interpolationSearch,
    binarySearch,
    getPrimeArray,
    getPrimarySought,
    getHashSearch,
    getHashArray,
    getHashSearchNode,
    getHashSearchRandom, queenSetBoardSize, queenSetQueensQuantity, queenSearchAnswer, queenGetAnswer
} from "./redux/actions.js";



const store = createStore(rootReducer);

store.dispatch(getPrimeArray())
store.dispatch(getHashArray())

store.dispatch(getPrimarySought())
store.dispatch(binaryTreeSearch())
store.dispatch(binarySearch())
store.dispatch(fibonacciSearch())
store.dispatch(interpolationSearch())

store.dispatch(getHashSearch())
store.dispatch(getHashSearchRandom())
store.dispatch(getHashSearchNode())

store.dispatch(queenSetBoardSize(8))
store.dispatch(queenSetQueensQuantity(1))
store.dispatch(queenSearchAnswer())
store.dispatch(queenGetAnswer())





