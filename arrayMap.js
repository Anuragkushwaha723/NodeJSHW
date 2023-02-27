var arr1=['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
var arr2=arr1.map((val)=>{
    if(val==' '){
        return 'emptystring';
    }
    return val;
})
console.log(arr2);

