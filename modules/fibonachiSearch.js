import nextFib from "../common/nexFib.js";

export default (array,sought) =>{
    let fibArray = nextFib(array.length+1)
    let k =  fibArray.length-1
    let m =  fibArray[fibArray.length-1] - array.length - 1
    let i = fibArray[k] - m
    let p = fibArray[k-1]
    let q = fibArray[k-2]
    return fibSearchLoop(array,sought,i,p,q)
}
const fibSearchLoop = (array,sought,i,p,q) => {
    if(i < 0){
        if(p===1){
            return -1
        }
        i = i + q
        p -= q
        q -=p
        return fibSearchLoop(array,sought,i,p,q)
    }
    if(i >= array.length){
        if(q === 0){
            return -1
        }
        i -=q
        const t = p
        p=q
        q=t-q
        return fibSearchLoop(array,sought,i,p,q)
    }
    if(sought < array[i].value){
        if(q === 0){
            return -1
        }
        i -=q
        const t = p
        p=q
        q=t-q
        return fibSearchLoop(array,sought,i,p,q)
    }
    if(sought > array[i].value){
        if(p===1){
            return -1
        }
        i = i + q
        p -= q
        q -=p
        return fibSearchLoop(array,sought,i,p,q)
    }
    return array[i].index
}