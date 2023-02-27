const multiplier=(a,b)=>{
   return a*b; 
}
console.log(multiplier(2,5));

//person object
const person={
    name:'max',
    age:19,
    greet(){
        console.log(`Hi, I am ${this.name}`);
    }
}
person.greet();