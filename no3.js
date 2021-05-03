let asteriks = 5

for (let i = 1; i <= asteriks; i++) { // 1 2 3 4 5
  let result = ''
  let jumlahSpasi = asteriks - i // 4
  let jumlahAsteriks = asteriks - jumlahSpasi

  for (let j = 0; j < jumlahSpasi; j++) { // 4(0,1,2,3)
    result += ' '
  }

  for (let k = 0; k < jumlahAsteriks; k++) {
    result += '*'
    
  }
  console.log(result);
}