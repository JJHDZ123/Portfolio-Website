import { React, useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';
import Logo from '../../assets/logo.png';

export default function Navbar() {
	const [ toggle, setToggle ] = useState(false);
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={Logo} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{[ 'home', 'skills', 'projects', 'contact' ].map((item) => {
					return (
						<li className="app__flex p-text" key={`link-${item}`}>
							<div className="left-sel" />
							<a href={`#${item}`}>{item}</a>
							<div className="right-sel" />
						</li>
					);
				})}
			</ul>
			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div whileInView={{ x: [ 300, 0 ] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{[ 'home', 'skills', 'projects', 'contact' ].map((item) => {
								return (
									<li key={{ item }}>
										<a href={`#${item}`} onClick={() => setToggle(false)}>
											{item}
										</a>
									</li>
								);
							})}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
}
