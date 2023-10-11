import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/home.css";

const Footer = () => {
    return (
        <>
            <div className='bg-black w-full text-white pt-16'>
                <div className='mx-20 flex justify-between all-footer-custom'>
                    <div>
                        <p className='text-4xl font-black all-footer-custom-n1'>Ideaflow</p>
                    </div>

                    <div className='flex custom-footer'>
                        <div className='flex'>
                            <div>
                                <p className="text-lg font-black footer-each-title">Knowledge Systems and Tools</p>
                                <ul className='mt-2'>
                                    <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer w-0'>Memex</li>
                                    <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer w-0'>Zettelkasten</li>
                                    <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer w-40'>Giant Global Graph</li>
                                    <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer w-32'>Polymath Project</li>
                                    <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer w-32'>Category Theory</li>
                                </ul>
                            </div>

                            <div className='ms-12'>
                                <div className='mb-8'>
                                    <p className="text-lg font-black footer-each-title">Intelligence Augmentation</p>
                                    <ul className='mt-2'>
                                        <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer w-28'>Collective IQ</li>
                                        <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer w-0'>Amplification</li>
                                    </ul>
                                </div>

                                <div className="w-28">
                                    <p className="text-lg font-black footer-each-title">Resources</p>
                                    <ul className='mt-2'>
                                        <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer'>IDE Plan</li>
                                        <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer'>Privacy Policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='flex custom-footer-n2'>
                            <div className='ms-12 custom-footer-n2-n1'>
                                <p className="text-lg font-black footer-each-title">Quick Links</p>
                                <ul className='mt-2'>
                                    <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer w-0'>Blog</li>
                                    <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer w-0'>Funding</li>
                                    <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer'>Bullet View Video</li>
                                </ul>
                            </div>

                            <div className='ms-12 custom-footer-n2-n2'>
                                <p className="text-lg font-black footer-each-title">Connect with Us</p>
                                <ul className='mt-2'>
                                    <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer w-0'>Email</li>
                                    <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer w-0'>LinkedIn</li>
                                    <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer w-0'>Facebook</li>
                                    <li className='mt-2 hover:underline hover:text-blue-400 cursor-pointer w-0'>Twitter</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-32 flex justify-center'>
                    <p className='mb-6 text-gray-700'>Copyright © 2020 Ideaflow, Inc. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer