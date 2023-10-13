function perfect()
{
    let a =1, k=0,num;
    num = Number(prompt)(" enter the value :");


    while (a<num)
    {
        if(num % a == 0)
        {
            k = k+a;
        }
    }
    a++;


    if( k == num )
    {
        console.log(num,"is perfect number :");
    }
    else{
        console.log(num," is not perfect number :");
    }
}

perfect();