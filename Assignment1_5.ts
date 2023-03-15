
function Fibonacci(Num : number) : void
{
    var Ans=0
    var No1 = 0
    var No2= 1
for(var i=1;i<=Num;i++)
{
    if(Ans <= Num)
    {
        console.log(No2)
        Ans=No1+No2

        

        No1=No2
        No2=Ans
    }
}

}


var no=25

Fibonacci(no)