function getSubstringCount(s) {

    let prev = 0; 
    let curr = 1; 
    let ans = 0;  

    for (let i = 1; i < s.length; i++) {
        const prevBit = s[i - 1]; 
        const currBit = s[i];     

        if (prevBit != currBit) { 
            ans += Math.min(curr, prev); 
            prev = curr;
            curr = 0;
        }
        curr++;
    }

    return ans + Math.min(curr, prev);
}