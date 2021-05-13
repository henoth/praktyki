const slowo: string = "aabbaa";
const dlugosc = slowo.length;
const tab: string[] = slowo.split("");
console.log(tab);
let litera = (dlugosc - 1);
let palindrom = 0;
for (let i = 0; i < litera; i++) {
    if (tab[i] == tab[litera]) {
        litera = litera - 1;
    }
    else {
        palindrom = 1;
    }
}
if (palindrom == 0)
    console.log("jest palindormem");
else
    console.log("nie jest palindormem");