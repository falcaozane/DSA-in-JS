// wrong 
var mergeTwoLists = function(list1, list2) {
    for(let i=0;i<list2.length;i++){
        list1.push(list2[i]);
    }
    list1.sort();

    return list1;
};

var list1 = [1,2,4];
var list2 = [1,3,4];

console.log(mergeTwoLists(list1,list2));
