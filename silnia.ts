let liczba: number =20;
let silnia: number =1;
for(let i=1;i<=liczba;i++)
{
    if(liczba>0)
    {
        silnia = silnia*i;
    }
    else
    {
        console.log("silnia równa się 1")
        break;
    }

}
console.log("silnia równa się " + silnia)