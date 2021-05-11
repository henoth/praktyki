const slowo: string ="aabbaa";
console.log(slowo);
const l = slowo.length;
const tab: string[] = slowo.split("");
console.log(tab);
let k=(l-1);
let p=0;
for(let i=0;i<k;i++)
{
    if(tab[i] == tab[k] )
    {
         k=k-1;
    }
    else
    {
        p=1;
    }
}
if (p==0)
    console.log("jest palindormem");
else
    console.log("nie jest palindormem");