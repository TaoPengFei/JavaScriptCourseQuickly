//1. ʹ�� new.target����һ���࣬ʹ�䲻�ɱ�ʵ�����������಻�ɳ�ʼ������������ԡ���
class Foo{  
    constructor() {  
        if (new.target){
            console.log( "���ɱ�ʵ����");
            return ;
        }  
     }
}  
let f = new Foo();



//2. �ڶ��ε���ҵ�У�������Symbol.iterator����Iterator�ӿ�ʹ������Ա�for..of����������Generator��������Iterator�ӿڣ�ʹ�ö���var obj = { date:['a','b','c','d']}�ɱ��� 
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
