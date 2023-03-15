
function ChkPrime(Num :number) : boolean
{
    let Flag =true
    var i=0

    if((Num==1) || (Num==-1) || (Num==0))
    {
        return false
    }

    if(Num<0)
    {
        Num=-Num
    }
    //for(i=(Num/2) ; i>1 ; i--)
    for(i=2;i<Num;i++)
    {
        if((Num%i)==0)
        {
            Flag=false
            break        
        }
        
    }

    return Flag
}

var No=27
var Ret : boolean= false

Ret=ChkPrime(No)

if(Ret==false)
{
    console.log("It is not prime number.")
}
else
{
    console.log("It is prime number")
}
