let aluno = {
    nome : "matheus",
    nota1 : 10,
    nota2 : 9
}

let aluno2 = {
    nome : 'Djonathan',
    nota1 : 9,
    nota2 : 9
}

mediaPeimeiroAluno = (aluno.nota1 + aluno.nota2) / 2

mediaSegundoAluno = (aluno2.nota1 + aluno2.nota2) / 2

mediaDaTurma = (aluno2.nota1 + aluno2.nota2 + aluno.nota1 + aluno.nota2) / 4

console.log(`Nesta turma temos 2 alunos sendo eles : \n${aluno.nome} \n${aluno2.nome} \n`)

console.log(`As notas de ${aluno.nome} foram : \n ${aluno.nota1} \n ${aluno.nota2}\n`)

console.log(`As notas de ${aluno2.nome} foram :\n${aluno2.nota1}\n${aluno2.nota2}`)

console.log(`A média de ${aluno.nome} foi : ${mediaPeimeiroAluno} \n`)

console.log(`A média de ${aluno2.nome} foi : ${mediaSegundoAluno}`)

console.log(`No geral da turma a média foi: ${mediaDaTurma}`)
