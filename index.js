function arrEvenOdd(arr, status){
    let isEven = arr.every((currVal) => currVal % 2 === 0)
    let isOdd = arr.every((currVal) => currVal % 2 !== 0)

    // Guarding
    if(!(status === "Even") && !(status === "Odd")){
        return 'Status tidak valid'
    }

    if(status === 'Even'){
        return isEven
    } else if(status === 'Odd') {
        return isOdd
    } 
    
    return false
    
}

console.log(arrEvenOdd([1, 1, 1], 'Odd'))