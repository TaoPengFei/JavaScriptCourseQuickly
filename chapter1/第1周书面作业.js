//1. ���´��룬����ʹ��rest����������չ������ͼ�ͷ�������и�д
function f(){
   let a =  Array.prototype.sort.apply(arguments,function(a,b){return a-b});
   for(let i in a){
       console.log(a[i]);
   }
}
================================================================================
//����һ��
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


//��������
function foo(...rest){
   for( let i in Array.prototype.sort.call(rest,(a,b)=>{return a-b}) ){
       console.log( Array.prototype.sort.call(rest,(a,b)=>{return a-b})[i] );
   }
};

/*
2. ̸̸��Symbol�����������͵���⡣
  1����ES6����֮ǰ��javascript��6���������ͣ�String��Number��Object��Boolean��Null��Undefined��
     ÿ���������Ͷ���һϵ��ֵ����ϣ�ES6���������µ��������ͣ�Symbol����ʾ��һ�޶���ֵ�����Ȳ����ַ���Ҳ���Ƕ��󣬶���һ��ȫ�µĶ��塣
  2����ES5�ж���������������ַ�������������������������ĳ�ͻ�� Symbol�ĳ��־ͺܺõؽ�����������⡣
  3����Ϳ�ܵ�����߽��ᷢ�ֺܶ�Symbol����;��Symbol�ĳ��ֽ������ͬ��ܺͿ��໥��ͻ�����⡣

*/