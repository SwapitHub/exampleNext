import Link from 'next/link'
import styles from './page.module.css'
import RangeSlider from './rangeSlider/RangeSlider'

export const metadata = {
  title: 'main page ne Home title',
  description: 'Home page Explore our exquisite collection of engagement',
}
export default function Home() {
  
  return (
    <main className={styles.main}>
      <ul>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/contact">contact</Link></li>
        <li><Link href="/homes">home</Link></li>


    </ul>
      <RangeSlider/>
    
    </main>
  )
}
