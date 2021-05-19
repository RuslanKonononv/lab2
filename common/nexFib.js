export default (number) =>{
    let array = []
    array.push(1)
    array.push(1)
    while (array[array.length-1] <= number){
        array.push(array[array.length-1]
            +array[array.length-2])
    }
    return array
}