// Styles
import './Footer.scss'
// Icons
import {
   FaInstagram,
   FaLinkedin,
   FaGithub,
   FaPhone,
   FaMailBulk,
   FaSearchLocation,
} from 'react-icons/fa'

const Footer = () => {
   const icons = {
      size: 20,
      style: {
         color: '#fff',
         marginRight: '2rem',
      },
   }
   const socialIcons = {
      size: 30,
      style: {
         color: '#fff',
         marginRight: '1rem',
      },
   }

   return (
      <div className='footer'>
         <div className='footer-container'>
            <div className='left'>
               <div className='location'>
                  <h4>
                     <FaSearchLocation {...icons} />
                     Beirut, Lebanon
                  </h4>
               </div>
               <div className='phone'>
                  <h4>
                     <FaPhone {...icons} />
                     +961 76-703506
                  </h4>
               </div>
               <div className='email'>
                  <h4>
                     <FaMailBulk {...icons} />
                     mhmd98itani@gmail.com
                  </h4>
               </div>
            </div>
            <div className='right'>
               <h4>About the Company</h4>
               <p id='about'>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aliquid minima magnam,
                  ipsam dolorum ullam iure quidem, nihil
                  architecto quae, aperiam rem perferendis
               </p>
               <div className='social'>
                  <FaInstagram {...socialIcons} />
                  <FaLinkedin {...socialIcons} />
                  <FaGithub {...socialIcons} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer
