
let guj , hin , eng , bio, total ,per;
guj = Number(prompt("enter the guj :"));
console.log(guj);
hin = Number(prompt("enter the hin :"));
console.log(hin);
eng = Number(prompt("enter the eng :"));
console.log(eng);
bio = Number(prompt("enter the bio :"));
console.log(bio);
total = guj + hin + eng + bio ;
console.log(" total mark ",total);

per =total/400*100;
console.log(per);


if(75<per )
{
    console.log("  A greade :");
}
 else if ( 60<per && 75>=per)
{
    console.log(" B greade :");
}
else if( 45 < per && 60 >= per )
{
     console.log("C greade :");
}
else if( 45 < per && 35 >= per )
{
    console.log("D greade :");
}
