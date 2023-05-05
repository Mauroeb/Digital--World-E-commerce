import { MdConstruction } from "react-icons/md";

const ProductsPage = () => {
  return (
    <div className='h-[60vh] mb-[5rem]'>
        <MdConstruction className="w-[15rem] h-[15rem] sm:w-[18rem] sm:h-[18rem] md:w-[21rem] md:h[21rem] lg:w-[25rem] lg:h-[25rem] text-first_color mx-auto"/>
        <h2 className="text-first_color text-[2rem] text-center mb-[3rem] lg:text-[2.5rem]">Site under construction</h2>
        <h5 className="text-first_color text-[1.1rem] text-center lg:text-[1.5rem]">Stay tuned for news!</h5>
    </div>
  )
}

export default ProductsPage