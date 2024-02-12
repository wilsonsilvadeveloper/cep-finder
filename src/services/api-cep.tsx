async function buscarCep({cep}: {cep: string}) {
    var dados;
    try {
        const consulta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!consulta.ok) {
            throw new Error('Erro ao consultar Cep');
        }
        dados = await consulta.json();
        return dados;
    } catch (e) {
        dados = {erro: true, message: e}
        return dados;
    }    
}

export default buscarCep;
