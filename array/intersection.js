function findIntersection(arr1, arr2) {
    
    let intersection = [];
    let n = arr1.length
    let m = arr2.length
  
    let i=0;
    let j = 0;

    while(i<n && j<m){
        if(arr1[i]<arr2[j]){
            i++;
        }
        else if (arr1[i]>arr2[j]){
            j++;
        }
        else{
            intersection.push(arr1[i])
            i++;
            j++;
        }
    }
  
    return intersection;
  }
  
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arr2 = [2, 3, 4, 4, 5, 11, 12];
  
  const intersect = findIntersection(arr1, arr2);
  
  console.log("Intersection of arr1 and arr2 is:");
  console.log(...intersect);
  
  