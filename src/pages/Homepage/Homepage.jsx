
import styles from './Homepage.module.css'
import PageNav from '../../components/Page/PageNav'
import { Link } from 'react-router-dom'

export default function Homepage() {

  return (

    <main className={styles.homepage}>
      <PageNav />
      
      <section>
        
        <h1>You travel the world. <br /> 
        worldWise keeps track of your adventures.
        </h1>
        
        <h2>
          A world map that tracks your footsteps into
          every city you can think of.
          show your friends how you have wandered the world.
        </h2>
        
        <Link to="/login" className='cta'>
        Start tracking now
        </Link>
      
      </section> 
    </main>

  )
}

 