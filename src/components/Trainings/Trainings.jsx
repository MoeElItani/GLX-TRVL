// Styles
import './Trainings.scss'
// Media
import moon from '../../assets/moon.jpg'
import pod from '../../assets/pod.jpg'
// Imports
import { Link } from 'react-router-dom'

const Trainings = () => {
   return (
      <div className='training'>
         <div className='t-left'>
            <h1>Training</h1>
            <p>
               Lorem, ipsum dolor sit amet consectetur
               adipisicing elit. Nesciunt dolorum natus
               impedit repellendus ducimus sit iure tempora
               rem? Ipsam, excepturi!
            </p>
            <Link to='/contact'>
               <button className='btn'>Contact</button>
            </Link>
         </div>
         <div className='t-right'>
            <div className='img-container'>
               <div className='image-stack'>
                  <img
                     src={moon}
                     alt='moon'
                     className='img'
                  />
               </div>
               <div className='image-stack'>
                  <img
                     src={pod}
                     alt='pod'
                     className='img'
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Trainings
