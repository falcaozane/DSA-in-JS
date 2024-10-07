function palString(str, start, end){

    if(start>=end){
        return true;
    }

    if(str[start]!=str[end]){
        return false;
    }

    return palString(str,start+1,end-1);

}


let str = "nitin";

if (palString(str, 0, str.length-1)) {
    console.log(str," is a palindrome") 
} else {
    console.log(str," is not a palindrome")
}