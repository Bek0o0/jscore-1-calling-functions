//This function has been made to get the uers age and calculate their year of birth.
function Calculatetheyear(Userage) {
  return 2020 - Userage;
}

Calculatetheyear;
//This function has been made to call the Calculatetheyear  to get the result which's the uer's year of birth and get their name and then concatenate this two value with formated order

function Concatenatet(name) {
  const Yearofbirth = Calculatetheyear(25); // Here is calling Calculatetheyear function to bass the output to Yearofbirth const.

  console.log(
    "My name is " + `${name}` + " and I was born in " + `${Yearofbirth}`
  );

  return name + Yearofbirth;
}

Concatenatet("Bekoo", 25);
