let continuar = ""

do {
    let usuario = {
        nome: prompt("Digite seu nome"),
        idade:Number(prompt("Digite idade")),
        trabalhando:prompt("Está trabalhando?( Sim ou Não )"),
        salario: 0
    }

    if (usuario.trabalhando === "sim") {
        usuario.salario = Number(prompt("Digite seu salario!"))
    } 

    if (usuario.trabalhando != "sim" && usuario.salario === 0) {
        document.writeln(`Pessoas desempregadas:<br>`)
        document.writeln(usuario.nome + `<br>`)
        document.writeln(usuario.idade + `<br>`)
    }

    if (usuario.salario > 1 && usuario.salario < 2500) {
        document.writeln(`Pessoas empregadas com salários menores que 2500:<br>`)
        document.writeln(usuario.nome + `<br>`)
        document.writeln(usuario.idade + `<br>`)
        document.writeln(usuario.salario + `<br>`)
    } 

    if (usuario.salario > 2500) {
        document.writeln(`Pessoas empregadas com salários maiores que 2500:<br> `)
        document.writeln(usuario.nome + `<br>`)
        document.writeln(usuario.idade + `<br>`)
        document.writeln(usuario.salario + `<br>`)
    }

 
    continuar = prompt("Deseja continuar: Sim ou Não")

} while (continuar === "sim");