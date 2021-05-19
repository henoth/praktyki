function ciag(n = 19) {
    if (n == 1 || n == 2)
        return 1;
    if( n==0)
        return 0;
    return ciag(n - 2) + ciag(n - 1);
}
console.log(ciag());