function kadalbuntung(input) {
  for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 ) {
      console.log('kadal');
    } else if (i % 5 === 0) {
      console.log('buntung')
    } else {
      console.log(i);
    }
  }
}

function main() {
  var input = 20
  return kadalbuntung(input)
}
main()
