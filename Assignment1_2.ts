/*2. Write typescript program which contains one function named as Area. That function should calculate area of circle. Accept value of radius from user and 
return its area. Default value of Pi should be 3.14 if it is not provider by caller.
Input: 5
Output: Area of circle is 78.5
*/

function Area(r:number,Pi:number) : number
{
    var Ans=0;

    Ans=Pi*r*r

    return Ans
}


var Ret: number=0
var Radius=5
var PI=3.14

Ret= Area(Radius,PI)

console.log("Area of circle is "+Ret)