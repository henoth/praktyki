let l=5;
let a=0;
let b=1;
for(let i=0;i<=l;i++)
{
    if(l==0)
    {
        b=b-1;
        break;
    }
    if(l==1)
    {
        break;
    }
    else
    {
        b=a+b;
        a=b-a;
    }
}
console.log(b);