import Validacoes from "../services/Validacoes.js";

test("Validar se o nome tem pelo menos 3 caracteres", ()=>{
    expect(Validacoes.validaNome("Mel")).toBe(true)
});

test("Valida se o telefone tem 11 digitos", ()=>{
    expect(Validacoes.validaTelefone("12345678901")).toBe(true)
});

test("Verifica se o telefone tem menos de 11 digitos", ()=>{
    expect(Validacoes.validaTelefone("123456789")).toBe(false)
});

test("Verifica se o telefone tem menos de 11 digitos", ()=>{
    expect(Validacoes.validaTelefone("1234567890a")).toBe(false)
});

test("Verifica se o email é valido", ()=>{
    expect(Validacoes.validaEmail('email@email.br')).toBe(true)
})

test("Verifica se o email contem @", ()=>{
    expect(Validacoes.validaEmail('emailemail.br')).toBe(false)
})

