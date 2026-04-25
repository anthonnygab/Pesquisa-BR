import Image from "next/image"

export default function About() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-6 px-4 md:px-10">
           <Image 
             src="/aboutImage.png"
             alt=""
             width={500}
             height={500}
             className="w-full max-w-xs md:max-w-md"
           />

           <p className="text-sm md:text-base text-center md:text-left">
              Este site foi desenvolvido para facilitar o acesso a informações importantes do dia a dia dos brasileiros. Aqui você pode consultar CEP, CNPJ, DDD e ISBN de forma rápida e prática. A proposta da plataforma é reunir diferentes tipos de consultas úteis em um único lugar, ajudando estudantes, desenvolvedores, empresas e qualquer pessoa que precise dessas informações com frequência. Tudo foi pensado para ser simples, direto e acessível, permitindo que você encontre o que precisa em poucos segundos.

           </p>
        </div>
    )
}