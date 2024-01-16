import { BsCart3, BsFillHeartFill } from 'react-icons/bs'

type Props = {
  botaoComprar: boolean
}

const BotaoProduto = ({ botaoComprar }: Props) => {
  return (
    <>
      {botaoComprar ? (
        <button className="rounded-md py-3 px-7 border border-black hover:bg-green-600 hover:text-white hover:border-transparent active:text-green-600 active:bg-white active:border-black  transition-colors ease-in-out">
          <BsCart3 />
        </button>
      ) : (
        <button className="rounded-md py-3 px-7 border border-black hover:bg-red-600 hover:text-white hover:border-transparent active:text-red-600 active:bg-white active:border-black transition-colors ease-in-out">
          <BsFillHeartFill />
        </button>
      )}
    </>
  )
}

export default BotaoProduto
