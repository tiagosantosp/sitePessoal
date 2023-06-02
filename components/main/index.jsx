
function Main() {

    return (
        <main className="flex flex-col md:flex-row justify-evenly md: gap-12">
            <div className='w-full md:w-[500px] flex flex-col  gap-4 items-start mb-8'>
                <h2 className='text-2xl font-bold'>Olá Pessoal</h2>
                <h1 className='text-3xl font-bold'>Eu sou <span className='text-azul'>Tiago Santos</span></h1>
                <p>Full Stack Developer</p>
                <div className='border border-b-2 border-b-azul w-24 mt-2' />
                <p className='text-justify pr-14 md:pr-0'>
                    Olá, sou Tiago Santos, um full stack developer com em desenvolvimento de software. Desde o início da minha carreira, sempre fui apaixonado por tecnologia e por criar soluções que impactem positivamente a vida das pessoas.
                    Ao longo dos anos, tive a oportunidade de trabalhar em diversos projetos desafiadores, desde a criação de aplicações web até o desenvolvimento de aplicativos móveis. Meu conhecimento em front-end, back-end e bancos de dados me permite criar soluções completas e eficientes, que atendam às necessidades dos usuários e das empresas.
                    Estou sempre em busca de novos desafios e oportunidades de aprendizado.
                </p>
                <a 
                    href='https://tiagosantosp.com.br/db/wp-content/uploads/2023/05/curri.pdf' className='bg-azul rounded-md p-2 hover:scale-110 transition-transform'
                    target='_blank'
                >
                    Download CV
                </a>
            </div>
            <div className='w-full md:w-[450px] flex justify-center items-center'>
                <img className='h-3/4 w-64 ' src='/formado.png' alt="Tiago com roupa de formatura" />
            </div>
        </main>
    )
}

export default Main