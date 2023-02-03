import React from 'react';
import { Link } from 'react-router-dom';
import { brandLogo } from '../assets';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { AiFillInstagram } from 'react-icons/ai';
import { ImYoutube2 } from 'react-icons/im';
import { TfiApple } from 'react-icons/tfi';
import { FaGooglePlay } from 'react-icons/fa';

let footerNavbar = [
	{
		Title: 'About',
		Cat_1: 'About Us',
		Cat_2: 'Find store',
		Cat_3: 'Categories',
		Cat_4: 'Blogs',
	},
	{
		Title: 'Partnership',
		Cat_1: 'About Us',
		Cat_2: 'Find store',
		Cat_3: 'Categories',
		Cat_4: 'Blogs',
	},
	{
		Title: 'Information',
		Cat_1: 'Help Center',
		Cat_2: 'Money Refund',
		Cat_3: 'Shipping',
		Cat_4: 'Contact us',
	},
	{
		Title: 'For users',
		Cat_1: 'Login',
		Cat_2: 'Register',
		Cat_3: 'Settings',
		Cat_4: 'My Orders',
	},
];
function createFooterNavbar() {
	let navbar = footerNavbar.map((el, index) => {
		return (
			<div key={index} className='navbar-row'>
				<h3> {el.Title}</h3>
				<ul>
					<li>{el.Cat_1}</li>
					<li>{el.Cat_2}</li>
					<li>{el.Cat_3}</li>
					<li>{el.Cat_4}</li>
				</ul>
			</div>
		);
	});

	return navbar;
}

function Footer() {
	return (
		<div className='footer'>
			<div className='footer-brand'>
				<Link to='/' className='flex items-center gap-[6px]'>
					<img src={brandLogo} alt='' />
					<h1 className='text-[#8CB7F5] text-2xl font-bold'>Brand</h1>
				</Link>
				<p>
					Best information about the compamny goes her but not reom
					ipsum in
				</p>
				<div className='footer-social-icons'>
					<BsFacebook />
					<AiFillTwitterCircle />
					<TiSocialLinkedinCircular />
					<AiFillInstagram />
					<ImYoutube2 />
				</div>
			</div>

			<div className='footer-navbar'>{createFooterNavbar()}</div>

			<div className='footer-apps'>
				<h3>Get Apps</h3>
				<div className='btn-store'>
					<TfiApple />
					<div>
						Download on the <br />
						<span className='store'>App Store</span>
					</div>
				</div>
				<div className='btn-store'>
					<FaGooglePlay />
					<div>
						Download on the <br />
						<span className='store'>Micrisoft Store</span>
					</div>
				</div>
			</div>

			<div className='copyRights'>
				<li>&copy;E-Commerc 2023</li>
			</div>
		</div>
	);
}

export default Footer;
