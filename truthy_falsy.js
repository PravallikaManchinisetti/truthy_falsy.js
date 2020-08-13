//truthy

/*
if (true)
{
    console.log("true");
}

if ({})
{
    console.log("emp");
}

if ([])
{
    console.log("true");
}

if (42)
{
    console.log("true");
}

if ("0")
{
    console.log("true");
}

if ("false")
{
    console.log("true");
}

if (new Date())
{
    console.log("true");
}

if (-42)
{
    console.log("true");
}

if (12n)
{
    console.log("true");
}

if (3.14)
{
    console.log("true");
}

if (-3.14)
{
    console.log("true");
}
*/

//falsy
//false,null,undefined,0,-0,0n,Nan,""
if (false)
{}
else
{
  console.log("true");   
}

if (null)
{}
else
{
  console.log("true");   
}

if (undefined)
{}
else
{
  console.log("true");   
}

if (0)
{}
else
{
  console.log("true");   
}

if (-0)
{}
else
{
  console.log("true");   
}

if (0n)
{}
else
{
  console.log("true");   
}

if (Nan)
{}
else
{
  console.log("true");   
}

if ("")
{}
else
{
  console.log("true");   
}

str = 'intern';               //length
console.log(str.length);

paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
searchTerm = 'dog';
indexOfFirst = paragraph.indexOf(searchTerm);
console.log(indexOfFirst);

str = 'Mozilla';
console.log(str.substring(1, 3));
console.log(str.substring(2));

