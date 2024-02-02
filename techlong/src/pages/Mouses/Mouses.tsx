import Description from '../../components/Description/Description'

import { useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { mouses, typeMouse } from '../../server/data'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard/ProductCard'

const Mouses = () => {
  const { id } = useParams()
  const [mouse, setMouse] = useState<typeMouse>(mouses[0])

  useEffect(() => {
    const indexMouseOnArray = Number(id)
    setMouse(mouses[indexMouseOnArray])
  }, [id])

  return (
    <div>
      <Header />
      <Description
        title={mouse.title}
        descrip={mouse.description}
        image={mouse.imageSrc}
      />
      <div className="flex justify-center items-center gap-4 mt-[8rem] mb-[2rem] flex-wrap max-sm:gap-20">
        {mouses.map((mouse, index) => (
          <ProductCard
            key={mouse.title}
            title={mouse.title}
            price={mouse.price}
            image={mouse.imageSrc}
            link={`${index}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Mouses
