import { useState } from 'react'

import Modal from 'react-modal'
import { Link } from 'react-router-dom'

interface ProductsCardProps {
  title: string
  price: string
  image: string
  link: string
}
const ProductCard = ({ title, price, image, link }: ProductsCardProps) => {
  const [IsOpen, setIsOpen] = useState(false)

  const handleModalState = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div>
      <div
        onClick={handleModalState}
        className="relative w-[18.75rem] h-[8.75rem] bg-background-card cursor-pointer transition duration-[.5s] hover:bg-gray-300 rounded-2xl flex justify-center items-center flex-col group"
      >
        {/* Conteúdo do cartão */}
        <img
          src={image}
          alt={title}
          className="w-[13rem] h-[13rem] -mt-[6rem] z-0"
        />

        <div className="flex -mt-[3rem] justify-between items-center w-full h-[5rem] mx-2 group-hover:opacity-100 opacity-100 transition-opacity cursor-pointer absolute bottom-0 left-0 right-0 text-white">
          <p className="flex px-[.9rem] py-[2rem] text-title-color text-xl font-bold">
            {title}
          </p>
          <p className="px-[.9rem] py-[2rem] text-title-color text-xl font-bold">
            {price}
          </p>
        </div>
      </div>
      {IsOpen && (
        <Modal
          isOpen={IsOpen}
          onRequestClose={handleModalState}
          contentLabel="Modal de exemplo"
          overlayClassName="overlay"
          className="content"
          shouldCloseOnOverlayClick={true}
        >
          <div className="flex flex-col justify-between h-full items-center">
            <h1 className="text-2xl font-bold text-title-color text-center mb-4">
              Would you like to add it to your cart?
            </h1>
            <div>
              <img className="h-[15rem] w-[15rem]" src={image} alt="" />
            </div>
            <div className="flex justify-around w-full max-sm:gap-2">
              <button
                onClick={handleModalState}
                className="bg-background-body w-[100px] max-sm:text-[.8rem] hover:text-red-600 font-bold text-white text-center h-[2.5rem] rounded-md flex justify-center items-center"
              >
                No
              </button>
              <Link
                className="bg-background-body w-[130px] max-sm:w-[120px] max-sm:text-[.8rem] hover:text-title-color font-bold text-white text-center rounded-md flex justify-center items-center"
                to={link}
              >
                Description
              </Link>
              <button className="bg-background-body w-[100px] max-sm:text-[.8rem] hover:text-green-500 font-bold text-white text-center rounded-md flex justify-center items-center">
                Yes
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default ProductCard
