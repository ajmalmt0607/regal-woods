import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
	return (
		<section className="align-element">
			<div className="flex flex-row py-20 justify-between border-t border-base-300">
				<div className="flex flex-col">
					<NavLink
						to="/"
						className="font-black uppercase text-xl text-red-600 mb-8"
					>
						Regal Woods
					</NavLink>
					<span className="text-sm">
						Making the world a better place through
						<br /> constructing elegant hierarchies.
					</span>
					<div className=" mt-8">
						<SocialIcon
							url="www.facebook.com"
							className=" mr-4"
							style={{ height: "35px", width: "35px" }}
						/>
						<SocialIcon
							className=" mr-4"
							url="www.instagram.com"
							style={{ height: "35px", width: "35px" }}
						/>
						<SocialIcon
							className=" mr-4"
							url="www.twitter.com"
							style={{ height: "35px", width: "35px" }}
						/>
						<SocialIcon
							className=" mr-4"
							url="www.github.com"
							style={{ height: "35px", width: "35px" }}
						/>
						<SocialIcon
							className=" mr-4"
							url="www.youtube.com"
							style={{ height: "35px", width: "35px" }}
						/>
					</div>
				</div>
				<div className="flex flex-row">
					<div className=" mr-12">
						<h2 className="text-base font-bold mb-5">Solutions</h2>
						<ul className="font-normal text-sm leading-7">
							<li className="mb-2">Marketing</li>
							<li className="mb-2">Analytics</li>
							<li className="mb-2">Commerce</li>
							<li className="mb-2">Insights</li>
						</ul>
					</div>
					<div className=" mr-12">
						<h2 className="text-base font-bold mb-5">Support</h2>
						<ul className="font-normal text-sm leading-7">
							<li className="mb-2">Pricing</li>
							<li className="mb-2">Documentation</li>
							<li className="mb-2">Guides</li>
							<li className="mb-2">API Status</li>
						</ul>
					</div>
					<div className=" mr-12">
						<h2 className="text-base font-bold mb-5">Company</h2>
						<ul className="font-normal text-sm leading-7">
							<li className="mb-2">About</li>
							<li className="mb-2">Blog</li>
							<li className="mb-2">Jobs</li>
							<li className="mb-2">Press</li>
						</ul>
					</div>
					<div className=" mr-12">
						<h2 className="text-base font-bold mb-5">Solutions</h2>
						<ul className="font-normal text-sm leading-7">
							<li className="mb-2">Claim</li>
							<li className="mb-2">Privacy</li>
							<li className="mb-2">Terms</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="border-t border-base-300 py-8">
				<span className="text-xs ">
					© 2020 Your Company, Inc. All rights reserved.
				</span>
			</div>
		</section>
	);
};

export default Footer;
