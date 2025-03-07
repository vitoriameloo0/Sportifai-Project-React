// Funções declarativas 
export const validarSenhas = (senha, confirmarSenha) => {
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return false;
    }
    return true;
};

export const trocarImagem = (setLogoSrc) => {
    console.log("Mudando para iconpisca.png");
    setLogoSrc("../src/images/iconpisca.png");
};

export const voltaImagem = (setLogoSrc) => {
    console.log("Voltando para icon.png");
    setLogoSrc("../src/images/icon.png");
};

// Funções expressivas
export const verificarCamposPreenchidosLogin = (email, password) => {
    if (!email.trim() || !password.trim()) {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
    else {
        alert("Login realizado com sucesso!");
    }
};

export const verificarCamposPreenchidosInscrever = (fields) => {
    let camposVazios = fields.filter(campo => !campo.trim());
    if (camposVazios.length > 0) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }
    return true;
};

export const exibirSaudacao = (primeiroNome, sobrenome) => {
    alert(`Olá, ${primeiroNome} ${sobrenome}! Bem-vindo(a) ao Spotify.`);
};

export const validarEExibirSaudacao = (fields, senha, confirmarSenha, setLogoSrc) => {
    if (!verificarCamposPreenchidosInscrever(fields)) {
        return;
    }

    if (validarSenhas(senha, confirmarSenha)) {
        const cliente = {
            primeiroNome: fields.primeiroNome,
            sobrenome: fields.sobrenome,
            email: fields.email,
            celular: fields.celular,
            senha: fields.senha,
            genero: fields.genero,
            interesses: fields.interesses
        };

        exibirSaudacao(fields.primeiroNome, fields.sobrenome);
        console.log(cliente);
    }
};
