const testAnagrama = require("./index.js");

test("comprobar que recibe dos strings", () => {
  const string1 = "hola";
  const string2 = "adios";
  expect(testAnagrama(string1, string2)).toBe(true);
});
test("si no es un string devuelve un error", () => {
  const string1 = 5;
  const string2 = 8;
  expect(testAnagrama(string1, string2)).toBe("Introduce una cadena de texto");
});
