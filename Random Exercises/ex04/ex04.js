let paisA = 80000
let paisB = 200000
let ano = 0

while (paisA <= paisB) {
	paisA += paisA * 0.03
	paisB += paisB * 0.005
	ano += 1
}
window.alert(`O país A irá demorar ${ano} anos para igualar ou ultrapassar a população do país B.`)