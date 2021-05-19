export const binarySearch = (data,target,start=0, end=data.length,) => {

    if(end < 1) return data[0].index;
    const middle = Math.floor((start + (end - start)/2));

    if (target === data[middle].value)
        return data[middle].index;

    if (end - 1 === start)
        return Math.abs(data[start].value - target) > Math.abs(data[end].value - target)
            ? data[end].index : data[start].index;

    if (target > data[middle].value)
        return binarySearch(data,target,middle,end);

    if (target < data[middle].value)
        return binarySearch(data,target,start,middle);
}