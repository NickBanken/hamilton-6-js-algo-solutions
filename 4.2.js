function rand10(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  const rndInt = rand10(1, 10);
  console.log(rndInt);