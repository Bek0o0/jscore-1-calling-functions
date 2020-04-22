function birthday(A) {
  return 2020 - A;
}

function calyear(name, age) {
  const yearofbirth = birthday(25);
  console.log(
    "My name is " + `${name}` + " and I was born in " + `${yearofbirth}`
  );
  return name + yearofbirth;
}

calyear("Bekoo", 25);
