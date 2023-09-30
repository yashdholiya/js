let i,tex;
 i= Number (prompt("enter the value ",));
console.log(i);
if(i>0 && i<2500)
{
    tex=0;
    console.log(tex);
   
}
else  if (i>2500 && i<=5000)
{
    tex =(i-2500)*0.10;
    console.log(tex);
}
else if (i>5000 && i<=10000)
{
    tex =120 +((i-5000 ) * 0.20);
    console.log(tex);
}
else 
{
    tex = 120+1000((i-10000) * 0.30);
    console.log(tex);

}





