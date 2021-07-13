import * as Yup from 'yup';

export default Yup.object().shape({
    nome: Yup.string().min(2, "Quantidade mínima de caracteres para o nome é inválida"),
    nomeResponsavel: Yup.string().min(2, "Quantidade mínima de caracteres para o nome do responsável é inválida"),
    email: Yup.string().email("Insira um endereço de e-mail válido"),
    senha: Yup.string().min(8, "A senha deve conter no mínimo 8 caracteres"),
    cdTipo: Yup.number().moreThan(0),
    telefone: Yup.string().min(8, "Quantidade mínima de caracteres para o telefone é inválida"),
    cpf: Yup.string().min(11, "Quantidade mínima de caracteres para o cpf inválida"),
    genero: Yup.string("Valor selecionado para gênero inválido"),
    generoResponsavel: Yup.string("Valor selecionado para gênero do responsável inválido"),
    turnoEscola: Yup.string().min(6, "Valor selecionado para turno inválido"),
    vencMensalidade: Yup.number().moreThan(0, "Valor inválido para vencimento da mensalidade").lessThan(32, "Valor inválido para vencimento da mensalidade"),
    vlMensalidade: Yup.number().moreThan(0, "Valor inválido para vencimento da mensalidade").lessThan(1000, "Valor inválido para vencimento da mensalidade").round(),
    vlMatricula: Yup.number().moreThan(0, "Valor inválido para vencimento da mensalidade").lessThan(1000, "Valor inválido para vencimento da mensalidade").round(),

});