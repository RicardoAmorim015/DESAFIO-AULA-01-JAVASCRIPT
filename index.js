var ganhoHora = prompt('Digite quanto você ganha por hora')
var horasTrabalhadas = prompt('Digita a quantidades de horas trabalhadas no mês')

var salarioBruto = ganhoHora * horasTrabalhadas
var impostoRenda = salarioBruto * 0.11 
var inss = salarioBruto * 0.08
var sindicato = salarioBruto * 0.05
var salarioLiquido = salarioBruto - impostoRenda - inss - sindicato


alert(`Seu salário bruto é $${salarioBruto},
        Descontos
        Imposto de Renda: $${impostoRenda}
        Inss: $${inss}
        Sincado: $${sindicato} 
        Salario Liquido: $${salarioLiquido} 
        Fim`)