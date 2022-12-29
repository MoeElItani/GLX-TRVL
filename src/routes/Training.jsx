// Components
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import HeroImage from '../components/HeroImage/HeroImage'
import Trainings from '../components/Trainings/Trainings'

const Training = () => {
   return (
      <div>
         <Navbar />
         <HeroImage
            heading='TRAINING'
            text='Pre-Flight & In-Flight Training.'
         />
         <Trainings />
         <Footer />
      </div>
   )
}

export default Training
