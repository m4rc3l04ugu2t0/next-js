import { StaticImageData } from 'next/image'

import photo1 from './photos/luffy.jpg'
import photo2 from './photos/luffy1.jpeg'
import photo3 from './photos/luffy2.jpg'
import photo4 from './photos/luffy3.jpg'
import photo5 from './photos/luffy4.jpeg'
import photo6 from './photos/luffy5.jpg'
import photo7 from './photos/luffy6.jpg'

export type LuffyImage = {
  id: string
  name: string
  src: StaticImageData
  description: string
  reward: string
}

const luffyImages: LuffyImage[] = [
  {
    id: '1',
    name: 'Luffy',
    src: photo1,
    description:
      'Ele é um pirata destemido e carismático, conhecido por sua determinação inabalável e espírito livre',
    reward: 'China'
  },
  {
    id: '2',
    name: 'Luffy',
    src: photo2,
    description:
      'Luffy é impulsivo, corajoso e extremamente leal aos seus amigos, disposto a enfrentar qualquer desafio para protegê-los',
    reward: 'Jordan'
  },
  {
    id: '3',
    name: 'Luffy',
    src: photo3,
    description:
      'Sua personalidade é marcada por uma mistura única de ingenuidade e astúcia, muitas vezes surpreendendo os outros com sua inteligência tática apesar de sua natureza brincalhona e às vezes desatenta',
    reward: 'Brazil'
  },
  {
    id: '4',
    name: 'Luffy',
    src: photo4,
    description:
      ' Ele tem um grande coração e um forte senso de justiça, sempre lutando contra a opressão e buscando realizar seu sonho de se tornar o Rei dos Piratas.',
    reward: 'Peru'
  },
  {
    id: '5',
    name: 'Luffy',
    src: photo5,
    description:
      'Luffy é um líder inspirador que conquista o respeito e a admiração daqueles ao seu redor com seu carisma e determinação inabalável',
    reward: 'Mexico'
  },
  {
    id: '6',
    name: 'Luffy',
    src: photo6,
    description:
      'Luffy também é marcada por sua incrível capacidade de reunir pessoas ao seu redor e formar laços de amizade profundos.',
    reward: 'Italy'
  },
  {
    id: '7',
    name: 'Luffy',
    src: photo7,
    description:
      'Ele é um verdadeiro líder que inspira confiança e camaradagem em sua tripulação, os Chapéus de Palha, e em todos que cruzam seu caminho',
    reward: 'India'
  }
]

export default luffyImages
