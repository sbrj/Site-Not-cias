/* 
# ARQUIVO UTILIZADO APENAS PARA GUARDAR AS SOLUÇÕES DOS PROBLEMAS EXIGIDOS.

Utilizando apenas JavaScript, resolva as questões abaixo. Elabore sua resposta e cole abaixo
dos respectivos enunciados.

1 – Crie uma função que reverta qualquer string inserida.

2 – Crie uma função que retorne true quando a string inserida for um palíndromo e false
quando não.
* Palíndromo: palavra ou sentença que se pode ler, indiferentemente, da esquerda para a
direita ou vice-versa.
Exemplos de palindromo: eye, osso, radar, ovo, race car.
*/

function juntarPalavra(i_palavra) {
	return i_palavra.join("")
}

function reverterPalavra(l_palavra){
	return l_palavra.reverse();
}

function dividirPalavra(s_palavra){
	return s_palavra.split("");
}

function reverterInterface(palavra){
	lista_palavra = dividirPalavra(palavra);
	palavra_inversa = reverterPalavra(lista_palavra);
	resultado = juntarPalavra(palavra_inversa);
	return resultado;
}

reverterInterface("carros")

function palindromo(palavra){
	if(palavra === reverterInterface(palavra)){
		return true
	} else {
		return false
	}
}

palindromo("arra")

/*
3 – Crie uma função que remova os itens com IDs duplicados do array de objetos abaixo:
const arr = [
{ id: 1, name: &quot;test1&quot; },
{ id: 2, name: &quot;test2&quot; },
{ id: 2, name: &quot;test3&quot; },
{ id: 3, name: &quot;test4&quot; },
{ id: 4, name: &quot;test5&quot; },
{ id: 5, name: &quot;test6&quot; },
{ id: 5, name: &quot;test7&quot; },
{ id: 6, name: &quot;test8&quot; }
];
*/

const arr = [
			{ id: 1, name: "&quot;test1&quot" },
			{ id: 2, name: "&quot;test2&quot" },
			{ id: 2, name: "&quot;test3&quot" },
			{ id: 3, name: "&quot;test4&quot" },
			{ id: 3, name: "&quot;test4&quot" },
			{ id: 3, name: "&quot;test4&quot" },
			{ id: 4, name: "&quot;test5&quot" },
			{ id: 5, name: "&quot;test6&quot" },
			{ id: 5, name: "&quot;test7&quot" },
			{ id: 5, name: "&quot;test7&quot" },
			{ id: 5, name: "&quot;test7&quot" },			
			{ id: 6, name: "&quot;test8&quot" }
			];

function removerDuplicados(lista) {
	unicos = []
	for(var id in lista){
		if(unicos.includes(lista[id])){
			continue
		} else {
			unicos.push(lista[id])
		}
	}
	return unicos
}

removerDuplicados(arr)

/*
4 – Crie uma função que retorne um array que consiste no maior número de cada subarray
fornecido. Para simplificar, o array fornecido conterá exatamente 4 subarrays.
* Array deverá ser utilizado: [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
*/

arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

function maiorNumero(sublista) {
	maior = sublista[0]
	for(var n in sublista){
		if(sublista[n] > maior){
			maior = sublista[n]
		}
	}
	return maior
}

function maioresArray(lista) {
	maiores = []
	for(var id in lista){
		pegar_maior = maiorNumero(lista[id])
		maiores.push(pegar_maior)
	}
	return maiores
}

maioresArray(arr)

/*
5 - Crie uma função que receba um array com 2 números e retorne a soma desses dois
números mais a soma de todos os números entre eles. O menor número nem sempre virá
primeiro.
* Exemplos: Passando um array com os números [5, 10], o retorno seria 45.
*/

function getMaior(lista) {
	if(lista[0]>lista[1]){
		return [lista[1], lista[0]]
	} else {
		return [lista[0], lista[1]]
	}
}

function somaTudo(valores) {
	let total = 0;
	[a, b] = getMaior(valores)
	for(i=a; i<=b; i++){
		total += i
	}
	return total
}

somaTudo([5,10])


/*
6 - Desenvolva uma função que compare 2 arrays e retorne um novo array contendo apenas os
itens que estejam contidos em apenas 1 dos arrays.
* Exemplo: Ao comparar os arrays [1, 2, 3, 5] e [1, 2, 3, 4, 5], o retorno seria [4].
*/


arr1 = [1, 2, 3, 5]
arr2 = [1, 2, 3, 4, 5]

function compararListas(lista1, lista2){
	lista_unicos = []
	for(let id in lista2){
		if(lista1.includes(lista2[id])){
			continue
		} else {
			lista_unicos.push(lista2[id])
		}
	}
	return lista_unicos
}

function resolveArray(lista1, lista2) {
	if(lista1.length < lista2.length){
		lista_comparada = compararListas(lista1, lista2)
	} else {
		lista_comparada = compararListas(lista2, lista1)
	}
	return lista_comparada
}

resolveArray(arr1, arr2)

