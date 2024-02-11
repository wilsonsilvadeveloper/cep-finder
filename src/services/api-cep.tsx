async function buscarCep({cep}: {cep: string}) {
    try {
        const consulta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!consulta.ok) {
            throw new Error('Erro ao consultar Cep');
        }
        const dados = await consulta.json();
        console.log(dados);
        return dados;
    } catch (e) {
        throw new Error('Erro na requisição: ' + e);
    }    
}

export default buscarCep;
