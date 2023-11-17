import { TypeProdutos } from '../types/typeProdutos'
import bone1frente from '../assets/imgs/bones/bone1-frente.png'
import bone2frente from '../assets/imgs/bones/bone2-frente.png'
import bone3frente from '../assets/imgs/bones/bone3-frente.png'
import bone4frente from '../assets/imgs/bones/bone4-frente.png'
import bone1lado from '../assets/imgs/bones/bone1-lado.png'
import bone2lado from '../assets/imgs/bones/bone2-lado.png'
import bone31lado from '../assets/imgs/bones/bone3-lado.png'
import bone4lado from '../assets/imgs/bones/bone4-lado.png'

export const ProdutosDados: TypeProdutos[] = [
  {
    titulo: 'bone 1',
    descricao: 'Bone colorido',
    img: [bone1frente, bone1lado],
    valor: 25.99,
    id: 1
  },
  {
    titulo: 'bone 2',
    descricao: 'Bone colorido',
    img: [bone2frente, bone2lado],
    valor: 25.99,
    id: 2
  },
  {
    titulo: 'bone 3',
    descricao: 'Bone colorido',
    img: [bone3frente, bone31lado],
    valor: 25.99,
    id: 3
  },
  {
    titulo: 'bone 4',
    descricao: 'Bone colorido',
    img: [bone4frente, bone4lado],
    valor: 25.99,
    id: 4
  },
  {
    titulo: 'bone 5',
    descricao: 'Bone colorido',
    img: [bone4frente, bone4lado],
    valor: 25.99,
    id: 5
  }
]
