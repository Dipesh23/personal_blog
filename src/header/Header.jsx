import './header.css'
import nature from '../nature1.jpg'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitlesSm'>Personal</span>
            <span className='headerTitlesLg'>Blog</span>
        </div>
        <img className='headerImage' src={nature} alt='hey' />
      
    </div>
  )
}
