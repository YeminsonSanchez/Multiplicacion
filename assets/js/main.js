let validador = () => {
  let numero_user = parseInt(prompt("ingresa un numero entre el 1 y 20: "));
  while (numero_user > 20 || numero_user < 1) {
    numero_user = parseInt(
      prompt("Numero fuera de rango (1 al 20). Vuelve a ingresarlo: ")
    );
  }
  return numero_user;
};
let multi_factorial = validador();
for (let i = 1; i <= multi_factorial; i++) {
  console.log(`${i} x ${multi_factorial} = ${i * multi_factorial}`);
}
for (let j = 1; j <= multi_factorial; j++) {
  let factorial = 1;
  for (let k = 1; k <= j; k++) {
    factorial = factorial * k;
  }
  console.log(`Factorial de ${j} es: ${factorial}`);
}
