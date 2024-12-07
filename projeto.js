numero = 0
while numero != -1:
    numero = int(input('Qual é o número para o calculo da soma de seus pares? '))
    if numero != -1:
        resultado = 0
    for i in range(0, numero + 1, 2):
        resultado = resultado + i
    print ('A soma dos pares de número {} é: {}'. format(numero, resultado))
else:
    print ('Fim do programa')
    