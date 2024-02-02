import ProductCard from '../ProductCard/ProductCard'
import G203 from '../../assets/images/g203.svg'
import G305 from '../../assets/images/g305.svg'
import G502 from '../../assets/images/g502.svg'

const Cart = () => {
  const mouses = [
    {
      product: 'G502',
      price: 'R$ 299,99',
      image: G502,
      link: '/mouse1',
    },
    {
      product: 'G305',
      price: 'R$ 299,99',
      image: G305,
      link: '/mouse2',
    },
    {
      product: 'G203',
      price: 'R$ 299,99',
      image: G203,
      link: '/mouse3',
    },
  ]
  return (
    <div className="h-screen flex-col flex justify-center items-center">
      {mouses.map((mouse) => {
        return (
          <div
            className="flex h-full gap-5 justify-center items-center"
            key={mouse.product}
          >
            <ProductCard
              title={mouse.product}
              price={mouse.price}
              image={mouse.image}
              link={mouse.link}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Cart
