const numb:number=145
function sum(num1:number):void{
    let s1:number=0;
    while(num1>0){
        let temp1:number=num1%10;
        s1=s1+temp1;
        num1=Math.floor(num1/10)
    }
    console.log(s1);
    
}
function pro(num2:number):void{
    let s2:number=1;
    while(num2>0){
        let temp2:number=num2%10;
        s2=s2*temp2;
        num2=Math.floor(num2/10)
    }
    console.log(s2);
    
}
sum(numb)
pro(numb)
