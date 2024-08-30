import { assets } from "../assets/assets"
import Title from "../components/Title"
import NewslettBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>
    <div className="text-2xl text-center pt-8 border-t">
      <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
         <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
         <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
           <p>Forever was born out of a passion for innovation and desire to revolution the way people shop online.
             Our journey with a simple idea: to provide a platform where customer can easily discover, explore, and purchase a wide 
             rang of product from the comfort of their homes.
           </p>
           <p>
            Since our inception, we`&apos;ve worked tirelessly to curate a diverse selection of high-quality products that cater to every 
            taste preferce. From fashion and beauty to electronics and home assentials. We offer an extensive collection sourced from trusted 
            brands and suppliers.
           </p>
           <b className="text-gray-800">OUr Mission</b>
           <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We `&lsquo dedicated to providing
            a seamles shopping experience that exceeds expections, from browing and ordering to delivery and beyond.
           </p>
         </div>
      </div>
      <div className="text-3xl py-4">
      <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-row md:flex-row text-sm mb-20">
           <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Quantity Assurance:</b>
                <p className="text-gray-500">We meticulously select and vet each product to ensure it meets our 
                  stringent quality standards.
                </p>
           </div>
           <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Convenience:</b>
                <p className="text-gray-500">With our user-friendly interface and hassle-free ordering process, shopping has 
                  never been easier.
                </p>
           </div>
           <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Exception Custom Service:</b>
                <p className="text-gray-500">Our team of dedicated professionals is here to assist you the way, ensuring
                  your satifaction is our top priority.
                </p>
           </div>
      </div>
       <NewslettBox />
      </div>
  )
}

export default About