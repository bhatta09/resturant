import ReviewCard from '../layouts/ReviewCard'
import img1 from "../assets/img/pritam.jpg"
import img2 from "../assets/img/swornim.jpg"
import img3 from "../assets/img/khadke.jpg"

const Review = () => {
  return (
        <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
            <h1 className='text-4xl font-semibold text-center pt-24 pb-10'>Customor's Review</h1>

            <div className='flex flex-col md:flex-row gap-5 mt-5'>
                <ReviewCard img={img1} name="Pritam"/>
                <ReviewCard img={img2} name="Swornim"/>
                <ReviewCard img={img3} name="Bijaya"/>
            </div>
    </div>
  )
}

export default Review