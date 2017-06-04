//1. 使用 new.target创建一个类，使其不可被实例化，【父类不可初始化，但子类可以】。
class Foo{  
    constructor() {  
        if (new.target){
            console.log( "不可被实例化");
            return ;
        }  
     }
}  
let f = new Foo();



//2. 第二课的作业中，我们在Symbol.iterator部署Iterator接口使对象可以被for..of遍历，改用Generator函数部署Iterator接口，使得对象var obj = { date:['a','b','c','d']}可遍历 
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
