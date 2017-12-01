function solution(N) {
    var binary = (N >>> 0).toString(2);
    
    var gaps = []
    var closedGaps = []
    for(i=0;i<binary.length;i++){
        if (binary[i] == 0){
        	if(binary[i-1] == 1){
        		gaps.push(1)
        	} else {
        		gaps[gaps.length-1] += 1	
        	}
        } else {
            if(binary[i-1] == 0) {
                closedGaps.push(gaps[gaps.length-1])    
            }
        }
    }
    
    max = 0
    for(j=0; j < closedGaps.length; j++){
        max = max > closedGaps[j] ? max : closedGaps[j]
    }
    
    return max
}
