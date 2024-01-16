type Props = {
  children: React.ReactNode
  fromProdutos: boolean
}

export const Botao = ({ children, fromProdutos }: Props) => (
  <div>
    {fromProdutos ? (
      <button className="py-2 px-4 border border-black hover:bg-black hover:text-white transition-colors ease-in-out">
        {children}
      </button>
    ) : (
      <button className="py-2 px-4 border border-white hover:bg-white hover:text-black transition-colors ease-in-out">
        {children}
      </button>
    )}
  </div>
)
