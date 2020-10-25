
// function to partition the data based on a pivot
function partition(arr,l,h) {
    let i = l, j = h;
    var pivot = arr[l];
    while(i < j) {
        while(arr[i] <= pivot) {
            i++;
        }
        while(arr[j] > pivot) {
            j--;
        }
        if(i < j)
        swap(arr,i,j);
    }
    swap(arr,l,j);
    return j;
}

// swapping two elements of an array
function swap(arr,i , j) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}


//algorithm for quick sorting an array, quick sort is based on divide and concur technique where the problem is divided into subproblems to finally solve it.
function quickSort(arr, l , h) {
    let j = 0;
    if(l < h) {
        j = partition(arr, l, h);
        quickSort(arr,l,j);
        quickSort(arr, j+1 , h)
    }
}

const arr = [ 55 , 44, 33, 22, 11];

const modifiedArr = [...arr, Number.MAX_SAFE_INTEGER];

quickSort(modifiedArr, 0 , modifiedArr.length - 1)
const final = modifiedArr.slice(0, arr.length)
console.log(final);