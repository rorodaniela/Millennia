

function makeInputVerifier(min, max) {
  console.log(min, max);
}

function main() {
  var min = 0
  var max = 10
  var init = makeInputVerifier(min, max)
  var input = 12
  var values = init(input)
  console.log(values);
}

main()