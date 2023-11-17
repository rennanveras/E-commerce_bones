import BotaoProduto from '../BotaoProduto'
import * as S from './styled'

type Props = {
  titulo: string
  preco: number | string
  img: string[]
}

const CardProduto = ({ titulo, preco, img }: Props) => {
  return (
    <>
      <div className="text-center flex flex-col items-center cursor-pointer">
        <S.ImagemProduto imagens={img}>
          <div className="hidden w-full h-full justify-center items-end font-light pb-4 absolute  left-0 text-xs">
            visualização rapida
          </div>
        </S.ImagemProduto>
        <div>
          <p> {titulo}</p>
          <span className="font-bold my-2">R$ {preco}</span>
          <div className="flex gap-5 my-6">
            <BotaoProduto botaoComprar={false}></BotaoProduto>
            <BotaoProduto botaoComprar></BotaoProduto>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardProduto
