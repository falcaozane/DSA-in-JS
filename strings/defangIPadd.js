//link : https://leetcode.com/problems/defanging-an-ip-address/description/

var defangIPaddr = function(address) {
    let result = "";
    let n = address.length
    for(let i=0;i<n;i++){
        if(address[i]=="."){
            result +="[.]"
        }
        else{
            result +=address[i]
        }
    }

    return result;
};