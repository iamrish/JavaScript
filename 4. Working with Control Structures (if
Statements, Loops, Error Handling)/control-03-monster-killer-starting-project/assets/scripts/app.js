const PLAYER_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 15;
const STRONG_ATTACK_VALUE = 30;

let maxLife = 100;
let monsterHealth = maxLife;
let playerHealth = maxLife;
let strongAttackCounter = 3;
let healCounter = 2;
let isBonusLife = true;
let battleLogs = [];

adjustHealthBars(maxLife);

function bonusLifeHandler(prevPlayerHealth) {
  playerHealth = prevPlayerHealth;
  removeBonusLife();
  setPlayerHealth(playerHealth);
}

function reset() {
  playerHealth = maxLife;
  monsterHealth = maxLife;
  strongAttackCounter = 3;
  healCounter = 2;
  isBonusLife = true;
  resetGame(maxLife);
}

function writeToLog(
  prevMonsterHealth,
  prevPlayerHealth,
  damageToMonster,
  damageToPlayer,
  monsterHealth,
  playerHealth
) {
  logEntry = {
    prevMonsterHealth: prevMonsterHealth,
    prevPlayerHealth: prevPlayerHealth,
    damageToMonster: damageToMonster,
    damageToPlayer: damageToPlayer,
    monsterHealth: monsterHealth,
    playerHealth: playerHealth,
  };
  battleLogs.push(logEntry);
  console.log(battleLogs);
}

function launchAttack(attackValue) {
  const prevMonsterHealth = monsterHealth;
  const damageToMonster = dealMonsterDamage(attackValue);
  monsterHealth -= damageToMonster;
  const prevPlayerHealth = playerHealth;
  const damageToPlayer = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  playerHealth -= damageToPlayer;

  writeToLog(
    prevMonsterHealth,
    prevPlayerHealth,
    damageToMonster,
    damageToPlayer,
    monsterHealth,
    playerHealth
  );

  if (monsterHealth <= 0 && playerHealth <= 0) {
    alert("you drew :(");
    reset();
  } else if (monsterHealth <= 0) {
    alert("you win!");
    reset();
  } else if (playerHealth <= 0) {
    if (isBonusLife) {
      alert("the bonus life saved your ASS!");
      isBonusLife = false;
      bonusLifeHandler(prevPlayerHealth);
    } else {
      alert("LOSER ALERT!");
      reset();
    }
  }
}

function attackHandler() {
  launchAttack(PLAYER_ATTACK_VALUE);
}

function strongAttackHandler() {
  if (strongAttackCounter) {
    console.log(strongAttackCounter);
    launchAttack(STRONG_ATTACK_VALUE);
    strongAttackCounter -= 1;
  } else {
    alert("STRONG ATTACKS ARE OVER! HAHA!");
  }
}

function healPlayerHandler() {
  const prevPlayerHealth = playerHealth;
  if (playerHealth === maxLife) return;
  if (!healCounter) {
    alert("HEALS ARE OVER! *clap* *clap*");
  }
  if (healCounter) {
    let healValue = 0.2 * playerHealth;

    if (playerHealth + healValue > maxLife) {
      healValue = maxLife - playerHealth;
      playerHealth += healValue;
    } else {
      playerHealth += healValue;
    }
    writeToLog(
      monsterHealth,
      prevPlayerHealth,
      0,
      0,
      monsterHealth,
      playerHealth
    );
    healCounter -= 1;
    increasePlayerHealth(healValue);
    console.log("healCounter", healCounter);
  }
}

alert(`YOU HAVE ${strongAttackCounter} STRONG ATTACKS`);
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
