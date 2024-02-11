// pages/resultado.tsx
import { useRouter } from 'next/router';

const ResultadoCEP = () => {
  const router = useRouter();
  const { cep } = router.query;

  return (
    <div>
      <h1>Dados do CEP: {cep}</h1>
      <p>Logradouro: Rua Exemplo</p>
      <p>Bairro: Bairro Exemplo</p>
      <p>Cidade: Cidade Exemplo</p>
      <p>Estado: Estado Exemplo</p>
    </div>
  );
};

export default ResultadoCEP;
