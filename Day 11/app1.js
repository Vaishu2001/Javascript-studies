function getName()
{
    return prompt("enter your name");

}
function greet()
{
    const userName=getName();
    console.log("heloo"+userName);
}
greet();