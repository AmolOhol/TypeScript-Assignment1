
function DisplayFactor(Num : number)
{
    var i=0;
    for(i=1;i<=Num/2;i++)
    {
        if(Num%i==0)
        {
            console.log(i)
          // process. stdout. write(i)
        }
    }
}

var No1=20
DisplayFactor(No1)
