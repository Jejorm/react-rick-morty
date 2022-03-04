import { useState } from 'react'
import { useEffect } from 'react'
import './Header.scss'

export const Header = () => {

    const userDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

    const [darkMode, setDarkMode] = useState(userDarkTheme)

    console.log(darkMode)

    localStorage.setItem('dark_theme', darkMode)

    darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')

    return (

        <div className='Header'>

            <h1 className='title'>React Hooks</h1>

            <button
                className='button'
                type='button'
                onClick={() => setDarkMode(!darkMode)}
            >
                {
                    darkMode ? 'Light Mode' : 'Dark Mode'
                }
            </button>

        </div>
    )
}