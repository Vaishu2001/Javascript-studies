const ATTACK_VALUE = 10;
const MONSTERATTACK_VALUE=14;
const STRONGATTACK_VALUE = 20;
const HEAL_VALUE = 17;
let chosenMaxLife;
let battleLog = [];
let enteredValue = parseInt(prompt("Enter the maximum life of Player and Monster:"));
 chosenMaxLife = enteredValue ;
if(chosenMaxLife <=0 || isNaN(chosenMaxLife) )
{
    chosenMaxLife =100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
adjustHealthBars(chosenMaxLife);
function writeToLog(eve,val,monsterLife,playerLife){
    let logEntry;
    if(eve == "player_attack"){
        logEntry = {
            event :eve,
            value :val,
            target:"monster",
            finalMonsterLife :monsterLife,
            finalPlayerLife :playerLife,

        };
    }
    else if(eve == "player_strong_attack"){
        logEntry = {
            event :eve,
            value :val,
            target:"monster",
            finalMonsterLife :monsterLife,
            finalPlayerLife :playerLife,

        };
    }
        else if(eve == "monster_attack"){
            logEntry = {
                event :eve,
                value :val,
                target:"player",
                finalMonsterLife :monsterLife,
                finalPlayerLife :playerLife,
    
            };
        }
        else if(eve == "player_heal_attack"){
            logEntry = {
                event :eve,
                value :val,
                target:"monster",
                finalMonsterLife :monsterLife,
                finalPlayerLife :playerLife,
    
            };
        }
        else if(eve == "gameOver"){
            logEntry = {
                event :eve,
                value :val,
                finalMonsterLife :monsterLife,
                finalPlayerLife :playerLife,
    
            };
        }
        battleLog.push(logEntry);

    }


function endRound()
{   
    let initialPlayerHealth = currentPlayerHealth;
    const playerDamage=dealPlayerDamage(MONSTERATTACK_VALUE);
    currentPlayerHealth -=playerDamage;
    writeToLog("monster_attack",playerDamage,currentMonsterHealth,currentPlayerHealth);
    function reset()
    {
        currentPlayerHealth = chosenMaxLife;
        currentMonsterHealth = chosenMaxLife;
        resetGame(chosenMaxLife);
    }
    if(currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth ;
        setPlayerHealth(initialPlayerHealth);
        alert("you would be dead but bonus life saved you!!! ");
        }
    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0)
    {
        alert("You won!!");
        writeToLog("gameOver","Player_won",currentMonsterHealth,currentPlayerHealth);
        
    }
    else if(currentPlayerHealth <=0 && currentMonsterHealth > 0)
    {
        alert("you lost!!!");
        writeToLog("gameOver","monster_won",currentMonsterHealth,currentPlayerHealth);
    }
    else if(currentMonsterHealth <=0 && currentPlayerHealth <=0)
    {
        alert("It's a draw!!!");
        writeToLog("gameOver","Draw",currentMonsterHealth,currentPlayerHealth);
    }
    if(currentMonsterHealth <=0 || currentPlayerHealth <=0)
    {
        reset();
    }

}
function attack(mode){
    //By using ternary expression
    const logEvent = mode=="Attack"? "player_attack":"player_strong_attack";
    let damageValue;
    if(mode === "Attack")
    {
        damageValue = ATTACK_VALUE;
        //logEvent ="player_attack";
        
    }
    else if(mode === 'StrongAttack' )
    {
        damageValue = STRONGATTACK_VALUE;
        //logEvent = "player_strong_attack";
    }
    const damage=dealMonsterDamage(damageValue);
    currentMonsterHealth -= damage;
    endRound();
    writeToLog(logEvent,damage,currentMonsterHealth,currentPlayerHealth);
}
function attackHandler()

{
      attack("Attack");  

}
function strongAttackHandler()
{
    attack("StrongAttack");
}
function healPlayer()
{
    let healValue;
    if(currentPlayerHealth > chosenMaxLife - HEAL_VALUE)
    {
        alert("You cant heal more than max initial health");
        healValue = chosenMaxLife - currentPlayerHealth;
    }
    else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
    writeToLog("player_heal_attack",healValue,currentMonsterHealth,currentPlayerHealth);

}
function printEventHandler()
{
    console.log(battleLog);
}


attackBtn.addEventListener("click",attackHandler);
strongAttackBtn.addEventListener("click",strongAttackHandler);
healBtn.addEventListener("click",healPlayer);
logBtn.addEventListener("click",printEventHandler);