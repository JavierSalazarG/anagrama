const testAnagrama = (string1, string2) => {
  if (typeof string1 === "string" && typeof string2 === "string") {
    const arrayString1 = string1.split("");
    const arrayString2 = string2.split("");
    const arrayLetrasIgual = [];
    arrayString1.forEach((letra1) => {
      arrayString2.forEach((letra2) => {
        if (letra2 === letra1) {
          arrayLetrasIgual.push(letra2);
        }
      });
    });
    return arrayLetrasIgual.length === arrayString1.length;
  } else {
    return "Introduce una cadena de texto";
  }
};
const resultado = testAnagrama("hola", "ahlo");
console.log(resultado);
module.exports = testAnagrama;
