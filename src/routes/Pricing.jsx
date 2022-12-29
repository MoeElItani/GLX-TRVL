// Components
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImage from '../components/HeroImage/HeroImage'
import PricingCards from '../components/PricingCards/PricingCards'

const Pricing = () => {
   return (
      <div>
         <Navbar />
         <HeroImage
            heading='PRICING'
            text='Choose your trip.'
         />
         <PricingCards />
         <Footer />
      </div>
   )
}

export default Pricing
