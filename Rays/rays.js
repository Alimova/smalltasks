//1. sort array from nearest to most far points
//2. hit ray to nearest point and then delete all array elements that are on its way
//3. Continue until array is empty

function solution(A) {
    var sorted = sortStatuesByDistance(A)
    return destructStatuesInRay(sorted)  
}

function destructStatuesInRay(array){
    var rayCounter = 0
    while(array.length){
        for(i=1;i<array.length;i++){
            if(array[0].angle == array[i].angle
                &&(array[0].quadrant == array[i].quadrant){
                array.splice(i,1)
            }
        }
        array.splice(0,1)
        rayCounter++
    }
    return rayCounter  
}

function sortStatuesByDistance(array){
    for(i=0;i<array.length;i++){
       array[i].distance = Math.sqrt(Math.pow(array[i].x, 2) + Math.pow(array[i].y, 2))
      array[i].quadrant = getQuadrant(array[i])
	array[i].angle = Math.round(array[i].y/array[i].x,3)
    }
    return selectionSort(array)
}

function getQuadrant(obj){
    if(obj.x >= 0 && obj.y >= 0){
        return 1
    } else if (obj.x <= 0 && obj.y >= 0) {
        return 2
    } else if (obj.x <= 0 && obj.y <= 0) {
        return 3
    } else (obj.x >= 0 && obj.y <= 0) {
        return 4
    } 
}

function selectionSort(arr){
  var minIdx, temp, 
      len = arr.length;
  for(var i = 0; i < len; i++){
    minIdx = i;
    for(var  j = i+1; j<len; j++){
       if(arr[j].distance < arr[minIdx].distance){
          minIdx = j;
       }
    }
    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}
