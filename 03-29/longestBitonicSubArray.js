function longestBitonicSubarray(arr) {
    // Write your code here
    let increasing = new Array(arr.length); //[1,1,2,3,1,1,2]
    let decreasing = new Array(arr.length); //[1,0,0,2,1,0,0]
    //[null,null,null,null,null,0,0]

    increasing[0] = 1;
    decreasing[arr.length - 1] = 0;

    for (let i = 1; i < arr.length; i++) {
        increasing[i] = arr[i] >= arr[i - 1] ? increasing[i - 1] + 1 : 1;
    }

    for (let i = arr.length - 2; i >= 0; i--) {
        decreasing[i] = arr[i] >= arr[i + 1] ? decreasing[i + 1] + 1 : 0;
    }

    debugger
    let max = increasing[0] + decreasing[0];
    for (let i = 1; i < arr.length; i++) {
        max = Math.max(max, decreasing[i] + increasing[i])
    }
    return max;


}