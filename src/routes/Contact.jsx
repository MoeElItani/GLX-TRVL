// Components
import Navbar from '../components/Navbar/Navbar'
import HeroImage from '../components/HeroImage/HeroImage'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'

const Contact = () => {
   return (
      <div>
         <Navbar />
         <HeroImage
            heading='CONTACT'
            text='Contact the GLX TRVL Team Directly.'
         />
         <Form />
         <Footer />
      </div>
   )
}

export default Contact
