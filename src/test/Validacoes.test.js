import Validacoes from "../services/Validacoes.js";

/**
 * Testes para validacao de nome / string
 */

test("Validar se o nome tem pelo menos 3 caracteres", ()=>{
    expect(Validacoes.validaNome("Mel")).toBe(true)
});

/**
 * Testes para validacao de telefone
 */

test("Valida se o telefone tem 11 digitos", ()=>{
    expect(Validacoes.validaTelefone("12345678901")).toBe(true)
});

test("Verifica se o telefone tem menos de 11 digitos", ()=>{
    expect(Validacoes.validaTelefone("123456789")).toBe(false)
});

test("Verifica se o telefone tem todos os caracteres numeros", ()=>{
    expect(Validacoes.validaTelefone("1234567890a")).toBe(false)
});

/**
 * Testes para validacao de email
 */


test("Verifica se o email é valido", ()=>{
    expect(Validacoes.validaEmail('email@email.br')).toBe(true)
})

test("Verifica se o email contem @", ()=>{
    expect(Validacoes.validaEmail('emailemail.br')).toBe(false)
})

/**
 * Testes para validacao de data do tipo DD/MM/YYYY
 */


test("Verifica se a data esta no formato correto DD/MM/YYYY", ()=>{
    expect(Validacoes.validaData('28/05/2020')).toBe(true)
})

test("Verifica se a data esta no formato trocado YYYY/MM/DD", ()=>{
    expect(Validacoes.validaData('2020/05/25')).toBe(false)
})


/**
 * Testes para validacao se a entrada é um numero 
 */

test("Verifica se a entrada é um inteiro", ()=>{
    expect(Validacoes.validaNumero("250")).toBe(true)
})

test("Verifica se a entrada é um numero com ponto flutuante", ()=>{
    expect(Validacoes.validaNumero("400.58")).toBe(true)
})


/**
 * Testes para validacao do turno
 * Aceito apenas manha/manhã ou tarde
 */


 test("Verifica se o turno é manhã", ()=>{
    expect(Validacoes.validaTurno("manha")).toBe(true)
})

test("Verifica se o turno é manha", ()=>{
    expect(Validacoes.validaTurno("manhã")).toBe(true)
})

test("Verifica se o turno é tarde", ()=>{
    expect(Validacoes.validaTurno("tarde")).toBe(true)
})



