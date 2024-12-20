import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../constants'
import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <footer className='mt-20 border-t py-10 border-neutral-700'>
            {/* Resources */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <img className='h-10 w-10 mr-2 rounded-full object-cover' src={logo} alt="" />
                    <span className='text-2xl font-semibold mb-4'>
                        FastForwardCoders
                    </span>
                    <h3 className='text-neutral-300 hover:text-white'>
                        FastForwardCoders was created to share the magic of coding to every person
                    </h3>
                </div>
                <div className='ml-8'>
                    <h3 className='text-md font-semibold mb-4'>
                        Resources
                    </h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((resource, index) => (
                            <li key={index}>
                                <a href={resource.href} className="text-neutral-300 hover:text-white">
                                    {resource.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* platform */}

                <div className='ml-8'>
                    <h3 className='text-md font-semibold mb-4'>
                        Plaform
                    </h3>
                    <ul className="space-y-2">
                        {platformLinks.map((platform, index) => (
                            <li key={index}>
                                <a href={platform.href} className="text-neutral-300 hover:text-white">
                                    {platform.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* community */}
                <div className='ml-8'>
                    <h3 className='text-md font-semibold mb-4'>
                        Community
                    </h3>
                    <ul className="space-y-2">
                        {communityLinks.map((community, index) => (
                            <li key={index}>
                                <a href={community.href} className="text-neutral-300 hover:text-white">
                                    {community.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer