 //1. �����и�����obj = {mydata:['a','c','d','e','f'] }������Ҫ���obj����������ɿɱ�����Ӧ����ô���������Ĺ���Ҫ���������mydata��Ԫ�ض���ӡ�ɴ�д��ĸ������ô����
//����һ��
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
//��������
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


//2.  Proxy��һ��������󣬿��ԶԶ����ԭ����Ϊ���д��������и�����������Ҫ�������⺯���ĵ��ù���ǰ�����ܽ�����־�ļ�¼������Proxy���������� 
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
������ҵ��
  ES6�ṩ��Proxy��Reflect������һ�ִ�������ģʽ�����˴���ģʽ�����кܶ����������ģʽ����javascript�У������Ϥ�������ģʽ������ôʵ�ֵģ� 
  
  ES6�ṩ��Proxy��Reflect������һ�ִ�������ģʽ�������볣��Ĵ������ģʽ��Ƚϣ������ɻ�
      Proxy��Reflectƫ���ڶ�Ŀ�����target�������أ����غ���һЩ������handler��;�������ҶԴ���ģʽ�ٸ����Ӱɣ� A����һλ��Ů��B����ŮA�Ĺ��ۣ�C��B�Ǻ����ѣ�
  C����ʶA�����Ծ�ͨ��B��A����һ��õ�廨------����ģʽ����������������ĵģ� ���������ģʽ���¼��ķ�������C���¼���ִ������B��������󣩣��¼��Ľ�������A��ͨ��
  �� var proxy = new Proxy(target, handler) 
      ��Ƚϣ����ܲ��������µ���ȣ�
          1)��B�������ߣ�ִ�е��¼�����A��һ��õ�廨���ǲ���������new Proxy(target, handler)�е�handler����������������Ϊ��;
          2)��var proxy = new Proxy(target, handler) �е�target�ǲ�����ȵ�A��������Ķ��� ;
          3)��var proxy = new Proxy(target, handler) �е�proxy�ǲ���������C ;
  ��ʦ��
          3)��var proxy = new Proxy(target, handler) �е�proxy�൱��B��ָ������� ;   
          target ��A����������Ķ���
          proxy�����൱��B���ǵĴ������
  �ܽ᣺ES6�ṩ��Proxy��ReflectĿ����ʵ�ִ�������뱻�������֮���߼���ϵ

*/     
          
          
          
          
          
          