// JavaScript Document

//変数numに1以上を代入
let num = 30;

if(num% 3===0 && num% 5===0){
	console.log('3と5の倍数です');
	
}
else if(num%　3===0){
	console.log('3の倍数です');
}
else if(num% 5===0){
	console.log('5の倍数です');
}
else {
	console.log('3と5の倍数ではありません');
}