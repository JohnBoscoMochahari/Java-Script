function firstfail(marks,passmark=40)
{
    let num=marks.length;

    for(i=0;i<num;i++)
    {
        if(marks[i]<passmark)
        {
            return 2;
            break;
        }
    }
    return -1;
}

console.log(firstfail([65,72,33,80]));