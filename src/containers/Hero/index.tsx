import { Botao } from '../../components/BotaoDefault'

const Hero = () => {
  return (
    <div className="Hero bg-cover bg-center w-100 h-96 py-64 flex justify-center items-center flex-col uppercase text-white text-center">
      <h2 className="font-bold text-5xl md:text-7xl Titulo md:w-1/4 tracking-wide">
        Seja sempre original
      </h2>
      <p className="my-6">Novos itens disponíveis aqui</p>
      <Botao fromProdutos={false}>Comprar</Botao>
    </div>
  )
}

export default Hero
