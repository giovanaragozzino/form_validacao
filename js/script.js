$("#formulario").validate({
    rules : {
        nome : {
            required: true,
            minlength: 3
        },

        email : {
            required: true
        },
        
        telefone : {
            required: true
        },
        
        cpf : {
            required: true
        },
        
        dataNasc : {
            required: true
        },
        
        endereço : {
            required: true
        },
        
        estado : {
            required: true
        },
        
        cidade : {
            required: true
        },
        
        cep : {
            required: true
        },
        
        checkbox : {
            required: true
        },

        estado : {
            required: true
        },

        cidade : {
            required: true
        },
        
    },

    messages : {

        email : {
            required: "Por favor, preencha o campo email",
            email: "Informe um e-mail válido"
        },

        telefone : {
            required: "Por favor, preencha o campo do telefone",
            telefone: "Informe um número de telefone válido"
        },

        cpf : {
            required: "Por favor, preencha o campo CPF",
            cpf: "Informe um CPF válido"
        },

        dataNasc : {
            required: "Por favor, preencha sua data de nascimento",
            dataNasc: "Informe uma data válida"
        },

        endereço : {
            required: "Por favor, preencha o campo do endereço",
            endereço: "Informe um endereço válido"
        },

        estado : {
            required: "Por favor, escolha um Estado",
            estado: "Informe o seu estado"
        },

        cidade : {
            required: "Por favor, escolha uma cidade",
            cidade: "Informe a sua cidade"
        },

        cep : {
            required: "Por favor, preencha seu CEP",
            cep: "Informe um CEP válido"
        },

        checkbox : {
            required: "Por favor, concorde com os termos de uso",

        },

        nome : {
            required: "Por favor, informe o nome!",
            minlength: "Insira no campo nome pelo menos 3 caracteres"
        },

        estado : {
            required: "Por favor, escolha um estado",
        },

        cidade : {
            required: "Por favor, escolha uma cidade",
        },
    }
});

// Aplicando a Máscara ao campo telefone
$("#telefone").mask('(00) 00000-0000');

// Aplicando a Máscara ao campo CPF
$("#cpf").mask('000.000.000-00');

// Aplicando a Máscara ao campo dataNasc
$("#dataNasc").mask('00/00/0000');

// Aplicando a Máscara ao campo CEP
$("#cep").mask('00000-000');