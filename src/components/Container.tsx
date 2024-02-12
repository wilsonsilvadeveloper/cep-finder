// components/Container.tsx
"use client"
import React, { useState, ChangeEvent } from 'react';
import buscarCep from '@/services/api-cep';
import ResultadoCEP from './Resultado-cep';

const Container = () => {
    const [cep, setCep] = useState<string>('');
    const [consulta, setConsulta] = useState<object>();

    async function handleBuscaCep() {
        try {
            const dados = await buscarCep({ cep });
            setConsulta(dados);
            typeof dados === 'object' ? console.log( typeof dados) : null;
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className='w-full h-screen bg-[#332F2C] flex justify-center items-center'>
            <div className='w-[80%] h-[500px] bg-[#0e0a07] justify-center items-center rounded-md p-5'>
                <form className='w-full h-[90%] flex items-center justify-center flex-col'>
                    <input 
                        className='text-white bg-[rgba(0,0,0,0.5)] w-[80%] h-[40px] pl-2 mb-2 rounded-lg'
                        type="text" 
                        id="cep" 
                        name="cep" 
                        placeholder="Digite o cep..." 
                        value={cep}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setCep(event.target.value)}
                    />
                    <button onClick={handleBuscaCep} type='button' className='w-[20%] min-w-[200px] max-w-[400px] h-9 bg-[#191A1C] rounded-md'>Procurar...</button>
                </form>
                {consulta ? (
                    <ResultadoCEP cepData={consulta} />
                ):null}
            </div>
        </div>
    )
}

export default Container;
