import {
    BINARY_SEARCH,
    BINARY_TREE_SEARCH,
    FIBONACCI_SEARCH, GET_HASH_ARRAY,
    GET_PRIME_ARRAY,
    GET_PRIME_SOUGHT, HASH_SEARCH, HASH_SEARCH_NODE, HASH_SEARCH_RANDOM,
    INTERPOLATION_SEARCH, QUEEN_GET_ANSWER, QUEEN_SEARCH_ANSWER, QUEEN_SET_BOARD_SIZE, QUEEN_SET_QUEENS_QUANTITY
} from "./types.js";

export function getPrimeArray() {
    return {
        type: GET_PRIME_ARRAY
    }
}

export function getHashArray() {
    return {
        type: GET_HASH_ARRAY,
    }
}

export function binaryTreeSearch() {
    return {
        type: BINARY_TREE_SEARCH
    }
}

export function binarySearch() {
    return {
        type: BINARY_SEARCH
    }
}

export function fibonacciSearch() {
    return {
        type: FIBONACCI_SEARCH
    }
}

export function interpolationSearch() {
    return {
        type: INTERPOLATION_SEARCH,
    }
}

export function getPrimarySought() {
    return {
        type: GET_PRIME_SOUGHT,
    }
}

export function getHashSearch() {
    return {
        type: HASH_SEARCH,
    }
}

export function getHashSearchNode() {
    return {
        type: HASH_SEARCH_NODE,
    }
}

export function getHashSearchRandom() {
    return {
        type: HASH_SEARCH_RANDOM,
    }
}

export function queenGetAnswer() {
    return {
        type: QUEEN_GET_ANSWER,
    }
}
export function queenSearchAnswer() {
    return {
        type: QUEEN_SEARCH_ANSWER,
    }
}export function queenSetBoardSize(boardSize = 8) {
    return {
        type: QUEEN_SET_BOARD_SIZE,
        data: {
            boardSize
        }
    }
}export function queenSetQueensQuantity(queensQuantity = 8) {
    return {
        type: QUEEN_SET_QUEENS_QUANTITY,
        data:{
            queensQuantity
        }
    }
}