import CardProduto from '../../components/CardProduto'
import { ProdutosDados } from '../../data/produtos'

const Produtos = () => {
  return (
    <main>
      <h3 className="Titulo text-center text-2xl uppercase my-20 tracking-widest">
        Coleção de edição limitada
      </h3>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ProdutosDados.map((item) => (
          <li key={item.id}>
            <CardProduto
              img={item.img}
              titulo={item.titulo}
              preco={item.valor}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Produtos
