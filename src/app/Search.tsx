"use client"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faIdCard, faPhoneFlip, faBarcode, faCloud } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function Search() {
     const [showCep, setShowCep] = useState(false);
     const [showCnpj, setShowCnpj] = useState(false);
     const [showDdd, setShowDdd] = useState(false);
     const [showIsbn, setShowIsbn] = useState(false);

     const [cepApi, setCepApi] = useState("");
     const [cnpjApi, setCnpjApi] = useState("");
     const [dddApi, setDddApi] = useState("");
     const [isbnApi, setIsbnApi] = useState("");
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const [data, setData] = useState<any>(null);

     const handleCepSearch = async () => {
       if (!cepApi) return;
       const res = await fetch(`https://brasilapi.com.br/api/cep/v1/${cepApi}`);
       setData(await res.json());
     }

     const handleCnpjSearch = async () => {
       if (!cnpjApi) return;
       const res = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpjApi}`);
       setData(await res.json());
     }

     const handleDddSearch = async () => {
       if (!dddApi) return;
       const res = await fetch(`https://brasilapi.com.br/api/ddd/v1/${dddApi}`)
       setData(await res.json());
     }

     const handleIsbnSearch = async () => {
       if (!isbnApi) return;
       const res = await fetch(`https://brasilapi.com.br/api/isbn/v1/${isbnApi}`)
       setData(await res.json())
     }

    return (

        <div className="flex flex-col items-center px-4">
            <div className="flex flex-wrap gap-3 md:gap-6 justify-center mt-10">

                <button className="bg-green-600 text-white flex items-center justify-center rounded-lg
                px-4 py-2 md:px-6 md:py-3 hover:bg-green-500 transition-all duration-200 shadow-sm"
                onClick={() => {setShowCep(!showCep); setShowCnpj(false); setShowDdd(false); setShowIsbn(false)}}>
                    <div className="flex flex-col items-center gap-1">
                      <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
                      <h1 className="font-medium text-sm md:text-base">CEP</h1>
                    </div>                    
                </button>

                <button className="bg-green-600 text-white flex items-center justify-center 
                rounded-lg px-4 py-2 md:px-6 md:py-3 hover:bg-green-500 transition-all duration-200 shadow-sm"
                onClick={() => {setShowCnpj(!showCnpj); setShowCep(false); setShowDdd(false); setShowIsbn(false) }}>
                    <div className="flex flex-col items-center gap-1">
                      <FontAwesomeIcon icon={faIdCard} className="text-xl" />
                      <h1 className="font-medium text-sm md:text-base">CNPJ</h1>
                    </div>
                </button>

                <button className="bg-green-600 text-white flex items-center justify-center rounded-lg
                px-4 py-2 md:px-6 md:py-3 hover:bg-green-500 transition-all duration-200 shadow-sm"
                onClick={() => {setShowDdd(!showDdd); setShowCep(false); setShowCnpj(false); setShowIsbn(false)}}>
                    <div className="flex flex-col items-center gap-1">
                      <FontAwesomeIcon icon={faPhoneFlip} className="text-xl" />
                      <h1 className="font-medium text-sm md:text-base">DDD</h1>
                    </div>
                </button>

                <button className="bg-green-600 text-white flex items-center justify-center rounded-lg
                px-4 py-2 md:px-6 md:py-3 hover:bg-green-500 transition-all duration-200 shadow-sm"
                onClick={() => {setShowIsbn(!showIsbn); setShowCep(false); setShowCnpj(false); setShowDdd(false)}}>
                    <div className="flex flex-col items-center gap-1 w-16 md:w-20">
                      <FontAwesomeIcon icon={faBarcode} className="text-xl w-6 h-6" />
                      <h1 className="text-center font-medium text-sm">ISBN</h1>
                    </div>
                </button>
            </div>
            
           {/* CEP */}

           <div className={`${showCep ? "flex" : "hidden"} flex flex-col md:flex-row items-center justify-center gap-3 mt-12`}>
              <Field orientation="horizontal">
                 <Input 
                  type="text"
                  placeholder="00000-000"
                  value={cepApi}
                  onChange={(e) => setCepApi(e.target.value)}
                  className="bg-yellow-400 w-full md:w-96 border border-green-600 rounded-lg px-4 py-2"
                 />
              </Field>
              <Button className="w-full md:w-auto" onClick={handleCepSearch}>Pesquise</Button>
          </div>

          {/* CNPJ */}

          <div className={`${showCnpj ? "flex" : "hidden"} flex flex-col md:flex-row items-center justify-center gap-3 mt-12`}>
             <Field orientation="horizontal">
                <Input 
                 type="text"
                 placeholder="00.000.000/0000-00"
                 value={cnpjApi}
                 onChange={(e) => setCnpjApi(e.target.value)}
                 className="bg-yellow-400 w-full md:w-96 border border-green-600 rounded-lg px-4 py-2" 
                />
             </Field>
             <Button className="w-full md:w-auto" onClick={handleCnpjSearch}>Pesquise</Button>
          </div>

          {/* DDD */}

          <div className={`${showDdd ? "flex" : "hidden"} flex flex-col md:flex-row items-center justify-center gap-3 mt-12`}>
            <Field orientation="horizontal">
                 <Input 
                   type="text"
                   placeholder="+55"
                   value={dddApi}
                   onChange={(e) => setDddApi(e.target.value)}
                   className="bg-yellow-400 w-full md:w-96 px-4 py-2 rounded-lg"
                 />
             </Field>
             <Button className="w-full md:w-auto" onClick={handleDddSearch}>Pesquise</Button>
          </div>      

          {/* ISBN */}
          
          <div className={`${showIsbn ? "flex" : "hidden"} flex flex-col md:flex-row items-center justify-center gap-3 mt-12`}>
            <Field orientation="horizontal">
              <Input 
               type="text"
               placeholder="9788545702870"
               value={isbnApi}
               onChange={(e) => setIsbnApi(e.target.value)}
               className="bg-yellow-400 w-full md:w-96 px-4 py-2 rounded-lg"
               />
            </Field>
            <Button className="w-full md:w-auto" onClick={handleIsbnSearch}>Pesquise</Button> 
          </div>

          {/* RESULTADOS */}

          {data && showCep && (
             <div className="mt-10 bg-gray-800 text-white p-4 rounded-lg w-full max-w-xl">
                <p><strong>CEP:</strong> {data.cep}</p>
                <p><strong>Estado:</strong> {data.state}</p>
                <p><strong>Cidade:</strong> {data.city}</p>
                <p><strong>Bairro:</strong> {data.neighborhood}</p>
                <p><strong>Rua:</strong> {data.street}</p>
             </div>
          )}

          {data && showCnpj && (
             <div className="mt-10 bg-gray-800 text-white p-4 rounded-lg w-full max-w-xl">
                <p><strong>CNPJ:</strong> {data.cnpj}</p>
                <p><strong>Razão Social:</strong> {data.razao_social}</p>
                <p><strong>Nome Fantasia:</strong> {data.nome_fantasia}</p>
                <p><strong>Pais:</strong> {data.pais}</p>
                <p><strong>Municipio:</strong> {data.municipio}</p>
                <p><strong>Endereço:</strong> {data.endereco}</p>
                <p><strong>Bairro:</strong> {data.bairro}</p>
                <p><strong>Número:</strong> {data.numero}</p>
             </div>
          )}

          {data && showDdd && (
             <div className="mt-10 bg-gray-800 text-white p-4 rounded-lg w-full max-w-xl">
                <p><strong>Estado:</strong> {data.state}</p>
                <p><strong>Cidades:</strong> {data.cities?.join(", ")}</p>
             </div>
          )}

          {data && showIsbn && (
              <div className="mt-10 bg-gray-800 text-white p-4 rounded-lg w-full max-w-xl">
                <p><strong>Título:</strong> {data.title}</p>
                <p><strong>Subtítulo:</strong> {data.subtitle}</p>
                <p><strong>Autor:</strong> {data.authors}</p>
                <p><strong>Sinopse:</strong> {data.synopsis}</p>
              </div>
          )}

        </div>
    )
}