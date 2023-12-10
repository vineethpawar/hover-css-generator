import React from 'react'
import styles from './Home.module.css'
const Home = () => {
    return (
        <section className='insetShadow flex flex-1 w-full  items-center justify-items-center '>

            <div className="text-center w-full gap-10 flex flex-col">

                <div className='flex flex-col gap-4'>
                    <h1 className="sm:text-2xl md:text-6xl  font-extrabold text-center textGlow">Dive into the coolest styles</h1>
                    <h3 className="sm:text-xl md:text-xl  font-bold text-center capitalize text-gray-400">create &middot; customise  &middot; copy</h3>
                </div>

                <div>

                    <button className="primaryBtn">
                        Explore
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home