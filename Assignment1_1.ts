/* Write typescript program which contains one function named as maximum. That function accept three parameters and it should returns largest value from three input parameters
I/p- 23 89 6
O/p- Maximum number is 89
*/

function Maximum(No1: number,No2 : number,No3 : number) : number
{
    if((No1> No2)&&(No1>No3))
    {
        return No1
    }
    else if((No2> No1)&&(No2>No3))
    {
        return No2
    }
    else
    {
        return No3
    }
}


var Ret : number =0

Ret = Maximum(23,89,6)

console.log("Maximum number is : "+Ret)