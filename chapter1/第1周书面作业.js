//1. 如下代码，请大家使用rest参数或者扩展运算符和箭头函数进行改写
function f(){
   let a =  Array.prototype.sort.apply(arguments,function(a,b){return a-b});
   for(let i in a){
       console.log(a[i]);
   }
}
================================================================================
//方法一：
function foo(...rest){ 
   for( let i in rest.sort((a,b)=>{return a-b}) ){
       console.log( rest.sort((a,b)=>{return a-b})[i] );
   }
};

function foo(...rest){ 
   for( let i in rest.sort() ){
       console.log( rest.sort()[i] );
   }
};

let foo = (...rest) => {
    for( let i in rest.sort( (a,b)=>a>b?1:-1 ) ){
         console.log( rest.sort( (a,b)=>a>b?1:-1 )[i] );
    }
};

const foo = (...rest) => {
    for( let i in rest.sort( (a,b)=>a>b?1:-1 ) ){
         console.log( rest.sort( (a,b)=>a>b?1:-1 )[i] );
    }
};


//方法二：
function foo(...rest){
   for( let i in Array.prototype.sort.call(rest,(a,b)=>{return a-b}) ){
       console.log( Array.prototype.sort.call(rest,(a,b)=>{return a-b})[i] );
   }
};

/*
2. 谈谈对Symbol这种数据类型的理解。
  1）在ES6出现之前，javascript有6种数据类型：String、Number、Object、Boolean、Null、Undefined，
     每种数据类型都是一系列值得组合；ES6中引入了新的数据类型：Symbol，表示独一无二的值，它既不是字符串也不是对象，而是一种全新的定义。
  2）在ES5中对象的属性名都是字符串，这样就容易造成属性名的冲突， Symbol的出现就很好地解决了这种问题。
  3）库和框架的设计者将会发现很多Symbol的用途，Symbol的出现将解决不同框架和库相互冲突的问题。

*/