import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
    return (
        <footer className='footer-fix'>
			<div className="flex items-start md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Link<span className="text-blue-600">tree</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FontAwesomeIcon icon={faInstagram} className="text-2xl cursor-pointer hover:text-blue-600" />
							<FontAwesomeIcon icon={faTwitter} className="text-2xl cursor-pointer hover:text-blue-600" />
							<FontAwesomeIcon icon={faFacebook} className="text-2xl cursor-pointer hover:text-blue-600" />
							<FontAwesomeIcon icon={faYoutube} className="text-2xl cursor-pointer hover:text-blue-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Pricing
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Details
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Items and support
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							More
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Support Portals
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-200">
				<h1 className=" text-gray-800 font-semibold">
					© 2024 All rights reserved | Build with Next.js by{" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						nicomendoza{" "}
					</span>
				</h1>
			</div>
        </footer>
    )
}
