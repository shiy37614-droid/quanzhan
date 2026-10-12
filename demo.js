let student=[

{
    name:"小明",
    score:80
},

{
    name:"小红",
    score:50
}

]


for(let i=0;i<student.length;i++){

    if(student[i].score>=60){

        console.log(student[i].name+" 合格");

    }
    else{

        console.log(student[i].name+" 不合格");

    }

}


function getLevel(score){

    if(score>=90){

        return "优秀";

    }
    else if(score>=60){

        return "合格";

    }
    else{

        return "不合格";

    }

}


console.log(getLevel(20));

let products=[
    {
        name:"手机",
        price:3000
    },
    {
        name:"电脑",
        price:8000
    },
    {
        name:"耳机",
        price:500
    }
];

// filter 和 map 一个用来过滤 一个是全部
let result=products.filter(product=>{

    return product.price>=1000;

});

let result1=products.map(product=>{
    return product.price*2;
})


console.log(result);
console.log(result1);

let carts=[
    {
        name:"手机",
        price:3000
    },
    {
        name:"电脑",
        price:8000
    }
];

let result2=carts.reduce((total,item)=>{
    return total+item.price;
},0);

console.log(result2)



const orders=[
{
    status:"paid",
    price:100
},
{
    status:"cancel",
    price:50
},
{
    status:"paid",
    price:200
}
]

let result3=orders.filter(order=>{
    return order.status=="paid";
})
console.log(result3)


let result4 = orders.reduce((total,order)=>{
    return total+order.price;
},0)

console.log(result4)


const orders1=[
{
    status:"paid",
    price:100
},
{
    status:"cancel",
    price:50
},
{
    status:"paid",
    price:200
}
]

const total = orders1
.filter(order=>order.status==="paid").reduce((sum,order)=>{

    return sum+order.price;

},0)

console.log(total)




const users = [
    {
        id:1,
        name:"小明",
        role:"admin"
    },
    {
        id:2,
        name:"小红",
        role:"user"
    }
]

// find找第一个结果
const admin = users.find(user=>{

    return user.role==="admin";

});

console.log(admin)

// some判断有没有满足的,如下:判断有没有管理员
const hasAdmin = users.some(user=>{

    return user.role==="admin";

});

console.log(hasAdmin)


const buttons=[
    "add",
    "delete",
    "edit"
]

const canDelete = buttons.some(item=>{

    return item==="delete"

})

console.log(canDelete)


const scores=[
    80,
    90,
    70
]

// every看是不是全部满足
const pass = scores.every(score=>{

    return score>=60;

})

console.log(pass)


// includes很简单,看有没有
console.log(scores.includes(80))



const user1 = {
    name1:"小明",
    age:18,
    city:"北京"
}

const {
    name1,
    age,
    city
}=user1;

console.log(age)
console.log(city)
console.log(name1)


const user2={

    say(){

        console.log("hello")

    }

}
console.log(user2)


const username="xiaoming";


const user3={
    username
}
console.log(user3)
console.log(user3.username)


const price=100;


console.log(`价格是${price}元`)



// const getUser=()=>{

//     name:"小明"

// }
// console.log(getUser)

// const getUser=()=>({

//     name:"小明"

// })

// console.log(getUser)


const user={

    name:"小明",

    say:function(){

        console.log(this.name)

    }

}

user.say();
// user.say();
// console.log(user.say())



const response={

    code:200,

    message:"成功",

    data:{

        list:[
            {
                id:1,
                name:"小明"
            }
        ]

    }

}

const  {
    data:{
        list
    }
}=response;

console.log(list)


const arr=[
    "小明",
    "小红",
    "小刚"
]

const [
    a,
    b,
    c
]=arr;

console.log([a,b,c])
console.log(a)


function getUser(){

    return new Promise((resolve)=>{


        setTimeout(()=>{

            resolve({
                id:1,
                name:"小明"
            })

        },1000)


    })

}

getUser()
.then(user=>{

    console.log(user)

})

const name2="小明";


const html=`

<div>

<h1>${name2}</h1>

</div>

`;

function say(name="游客"){

    console.log(name);

}

say()

const add2 = function(a,b){
    return a+b;
}
console.log(add2)
console.log(add2(3,4))

const w = function(a,g){
    return a-g;
}

console.log(function(a,c){
    return a+c;
})

const add3 =(m,n)=>{
    return m+n;
}
console.log(add3(5,4))



const nums=[1,2,3];


const resultt=nums.map(function(item){

    return item*2;

});

console.log(resultt)


// 一个参数有没有括号都可以的
const resulttt=nums.map((item)=>{
    return item*5;
})

console.log(resulttt)

// 箭头函数的规则：规则1：一个参数可以省略括号
//                 规则2：一行返回可以省略return   


// const getUser3=()=>({

//     name:"小明"

// })
// console.log(getUser3)

// const getUser31=()=>{

//     name:"小明"

// }
// console.log(getUser31)


const arr1=[1,2,3];

const arr2=[4,5,6];

const arr3
=[
    ...arr1,
    ...arr2
]

console.log(arr3)


const arr24= arr1

console.log(arr24)

arr24.push(4)
console.log(arr24)



const user0={

    name:"小明",

    age:18

}

const newu= {
    ...user0
}

console.log(newu)

const nn = {
    ...user0,
    age:20
}

console.log(nn)

const nnn = {
    ...user0,
    adress : "beijing",
    xinbie : "female"
}

console.log(nnn)



// 覆盖：后面的覆盖前面的
const obj={

    name:"A",

    name:"B"

}

console.log(obj)



const mm1 =[2,4,5,7]

console.log(Math.max(...mm1))



const userx={

    name:"小明"

}

// 原来的：新的
const {name:name222}=userx;

console.log(name222)


const arra=[
    "苹果",
    "香蕉",
    "西瓜"
]


const [
    first,second,third
]=arra;

console.log(first)

// 函数参数结构：()括号是对象，你可以这么理解 user对象 一开始确实是难以理解的，慢慢来吧
function showUser({
    name,
    age
}){

    console.log(name)

}

showUser({name:"xxx",
    age:10
})


// 等级于这个 不要过于深究了,大概知道吧!慢慢来
function showUser1(user){
    console.log(user.name)
}

showUser1({name:"xxx",
    age:10
})


// 收到参数我马上解构
function test({namex}){
    console.log(namex);
}

test ({namex:"ssxxx",
    age:10
})


// const sk=[4,1,4,25,66];

// wk=sk.map(({s})=>{
//     return s+1;
// })

// console.log(wk)


// const props=defineProps({

//     title:String,

//     count:Number

// })

// const {

//     title,

//     count

// }=props;

// console.log(title)

// import {
//     name,
//     say
// } from "./demo1.js"


// console.log(name)

// say()

console.log("sss")

console.log("log")

