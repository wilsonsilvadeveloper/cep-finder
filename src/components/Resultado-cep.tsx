interface CepData {
  cep: string;
  uf: string;
  localidade: string;
  logradouro?: string;
  erro?: boolean;
  message?: string;
}

const ResultadoCEP = ({ cepData }: { cepData: CepData }) => {
  return (
    cepData.erro? (
      <p className="text-white text-center">Cep não encontrado :(</p>
    ):(
      <div className="flex flex-col justify-center items-center text-white">
        <div>
          <h1>Dados do cep: {cepData.cep}</h1>
        </div>
        <div className="flex flex-row justify-between">
          <p className="ml-2 mr-2"> uf: { cepData.uf } </p>
          <p className="ml-2 mr-2"> Cidade: { cepData.localidade } </p>
          <p className="ml-2 mr-2"> Logradouro: { cepData.logradouro } </p>
        </div>
      </div>
    )
  );
};

export default ResultadoCEP;
