function arrEvenOdd(arr, status){
    let isEven = true
    let isOdd = true

    // Guarding
    if(!(status === "Even") && !(status === "Odd")){
        return 'Status tidak valid'
    }

    if(status === "Even") {
        for( let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0) {
                isEven = true
            } else {
                return false
            }
        
        }
        return isEven
            
    }

    if(status === "Odd") {
        for( let i = 0; i < arr.length; i++){
            if(arr[i] % 2 !== 0) {
                isOdd = true
            } else {
                return false
            }
        }
        return isOdd
            
    }
    
    return false
    
}

console.log(arrEvenOdd([2, 4, 8, 10], 'Even'))