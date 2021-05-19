export const interpolationSearch =  (array,sought,l,r) =>{

    const indexSought =
        Math.round((sought-array[l].value)
        *(l-r)/(array[l].value-array[r].value) + l)

    if(array[indexSought].value === sought) return array[indexSought].index

    if(array[indexSought].value > sought){
        r = indexSought -1
        return interpolationSearch(array,sought,l,r)
    }

    if(array[indexSought].value < sought){
        l = indexSought +1
        return interpolationSearch(array,sought,l,r)
    }

}
