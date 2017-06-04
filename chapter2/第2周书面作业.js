 //1. 假如有个对象obj = {mydata:['a','c','d','e','f'] }，现在要求把obj这个对象改造成可遍历的应该怎么处理？遍历的过程要求将其对属性mydata的元素都打印成大写字母，该怎么处理？
//方法一：
 let obj = {
	mydata:['a','c','d','e','f'],
	[Symbol.iterator](){
		const self = this;
		let index = 0;
		return {
			next(){
				if( index < self.mydata.length ){
					return {
						value : self.mydata[index++].toUpperCase(),
						done : false
					};
				}else{
					return {
						value : undefined,
						done : true
					};
				}
			}
		};
	}
};
//方法二：
let obj = {
	mydata: ['a', 'c', 'd', 'e', 'f'],
	[Symbol.iterator]: function* () {
    for (let i = 0; i < this.mydata.length; i++) {
		yield this.mydata[i].toUpperCase();
    }
  }
};
for( let i of obj ){
	console.log(i);
};


//2.  Proxy是一个代理对象，可以对对象的原生行为进行代理，现在有个场景，我们要求在任意函数的调用过程前，都能进行日志的记录，请用Proxy完成这个处理 
function func( x, y ){
	return x + y;
};
//let arr = [];
let foo = new Proxy( func, {
	apply( target, key, args ){
		const today = new Date();
		if( typeof target.name === "function" ){
			document.writeln( `\n${today} INFO [proxy-log] Successfully call a Function :  [${target.name}]...` );
		}else{
			document.writeln( `\n${today} INFO [proxy-log] Successfully call is not a Function :  [${target.name}]...` );
		}
		return Reflect.apply(...arguments)
	}
} );
document.writeln( "\n" + foo( 2, 3. -3 ) );


/*
互动作业：
  ES6提供的Proxy和Reflect体现了一种代理的设计模式，除了代理模式，还有很多其它的设计模式，在javascript中，大家熟悉那种设计模式，是怎么实现的？ 
  
  ES6提供的Proxy和Reflect体现了一种代理的设计模式，但是与常规的代理设计模式相比较，我有疑惑：
      Proxy和Reflect偏向于对目标对象（target）的拦截，拦截后做一些操作（handler）;在这里我对代理模式举个例子吧： A代表一位美女，B是美女A的闺蜜，C跟B是好朋友，
  C想认识A，所以就通过B给A送了一朵玫瑰花------代理模式大体就是这样操作的的； 在这个代理模式中事件的发起者是C，事件的执行者是B（代理对象），事件的接收者是A；通过
  与 var proxy = new Proxy(target, handler) 
      相比较，我能不能做如下的类比：
          1)、B（代理者）执行的事件（给A送一朵玫瑰花）是不是类似于new Proxy(target, handler)中的handler（用来定制拦截行为）;
          2)、var proxy = new Proxy(target, handler) 中的target是不是类比到A（被代理的对象） ;
          3)、var proxy = new Proxy(target, handler) 中的proxy是不是类似于C ;
  老师：
          3)、var proxy = new Proxy(target, handler) 中的proxy相当于B，指代理对象 ;   
          target 是A啊，被代理的对象
          proxy对象相当于B，是的代理对象
  总结：ES6提供的Proxy和Reflect目的是实现代理对象与被代理对象之间逻辑关系

*/     
          
          
          
          
          
          