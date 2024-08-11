
import CategoryCard from './CategoryCard'
import images from '../../assets/constants/image.js'


const Category = () => {
  return (
    <div className='container'>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 place-items-center">
        <CategoryCard img={images.Iphone} title="Smart Phones" />
        <CategoryCard img={images.Laptop} title="Laptops" width="w-[220px]" height="h-[150px]"/>
        <CategoryCard img={images.Microphone} title="MicroPhones" />
        <CategoryCard img={images.Bike} title="Bikes" />
        <CategoryCard img={images.Car} title="Cars" /> 

      </div>
      
    </div>
  )
}

export default Category
