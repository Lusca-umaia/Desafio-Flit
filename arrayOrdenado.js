//Você pode alterar o valor do array da forma como desejar
let array = [2, 5, 82, 34, 98, 1, 4, 6]

console.log("Array de entrada: ", array)

let arraySave = array.length;
let valor = array[0];
let arrayN = []

for (i = arrayN.length; arraySave > arrayN.length; arrayN.length) {
    let filterArray = array.filter(
        function verifyEle(elem) {
            return (elem < valor)
        }
    )

    if (filterArray.length == 0) {
        arrayN.push(valor)
        array.shift()
        valor = array[0]
    }
    else {
        array.push(valor)
        array.shift()
        valor = array[0]
    }
}

console.log("Array de saída(ordenado): ", arrayN)
