import G203 from '../assets/images/g203.svg'
import G305 from '../assets/images/g305.svg'
import G502 from '../assets/images/g502.svg'

export const mouses = [
  {
    title: 'G203',
    description:
      'The TechLong G203 is an exceptional gaming peripheral with anergonomic design that ensures comfort during long gaming sessions. Its high-resolution sensor enables precise and fluid movements on any surface, while the programmable buttons offer customization and agility for a personalized gaming experience. With its durability and quality construction, the G502 is a worthwhile investment for gaming enthusiasts seeking exceptional performance.',
    imageSrc: G203,
    price: 'R$ 299,99',
  },
  {
    title: 'G305',
    description:
      'The TechLong G305 is an exceptional gaming peripheral with anergonomic design that ensures comfort during long gaming sessions. Its high-resolution sensor enables precise and fluid movements on any surface, while the programmable buttons offer customization and agility for a personalized gaming experience. With its durability and quality construction, the G502 is a worthwhile investment for gaming enthusiasts seeking exceptional performance.',
    imageSrc: G305,
    price: 'R$ 299,99',
  },
  {
    title: 'G502',
    description:
      'The TechLong G305 is an exceptional gaming peripheral with anergonomic design that ensures comfort during long gaming sessions. Its high-resolution sensor enables precise and fluid movements on any surface, while the programmable buttons offer customization and agility for a personalized gaming experience. With its durability and quality construction, the G502 is a worthwhile investment for gaming enthusiasts seeking exceptional performance.',
    imageSrc: G502,
    price: 'R$ 299,99',
  },
]

export type typeMouse = {
  title: string
  description: string
  imageSrc: string
}
