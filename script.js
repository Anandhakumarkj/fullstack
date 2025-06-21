function add(a,b){
    return a+b
}
const mul=(a,b)=>{
    return a*b
}
console.log(mul(12,11));
const obj={
    name:'rolex',
    age:40,
    message:function(){
        let name=obj.name
        return '${name}'
    }
}
console.log(obj.name);
console.log(obj.message());

const n=[1,2,34,5,6,7]
const mn=n.map((n)=>n*3)
console.log(mn);

const product=[
    {name:'laptop', price:2000},
    {name:'tv',price:3000},
]
const totp=product.reduce((sum,n)=>sum+n.price,0)
console.log(totp);

const number=[1,2,3,4,5]
const[first,second,third]=number
console.log(third);
const user={name:'anand',password:'12344'}
const {name,password}=user
console.log(password);
const arr1=[1,2,3]
const arr2=[4,5,6]
const copy=[...arr2,...arr1];
console.log(copy);
function function1(){
    console.log('fun inside calback')
}
function func(name,callback){
    callback()
    return'${name} from out callback'
}
 console.log(func('function',()=>{console.log('from inside callback')}));