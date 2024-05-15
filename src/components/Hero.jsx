import { Link } from "react-router-dom";

function Hero() {
	return (
		<div className="">
			<div className="relative isolate">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-20">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<div className="relative rounded-full px-3 py-1 text-sm leading-6  ring-1 ring-secondary hover:ring-gray-900/20">
							Announcing our next round of funding.{" "}
							<Link
								to="/products"
								className="font-semibold text-indigo-600"
							>
								<span
									className="absolute inset-0"
									aria-hidden="true"
								/>
								Read more <span aria-hidden="true">&rarr;</span>
							</Link>
						</div>
					</div>
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
							Designs that transform, Quality that Endures
						</h1>
						<p className="mt-6 text-lg leading-8">
							Discover the artistry of Regal Woods, where every
							piece of furniture tells a story of passion,
							precision, and unparalleled craftsmanship.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/products"
								className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Shop now
							</Link>
							<Link
								to="/about"
								className="text-sm font-semibold leading-6 "
							>
								Learn more <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
