import SectionTitle from "./SectionTitle";

const features = [
	{ name: "Origin", description: "Designed by Good Goods, Inc." },
	{
		name: "Material",
		description:
			"Solid walnut base with rare earth magnets and powder coated steel card cover",
	},
	{ name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
	{
		name: "Finish",
		description: "Hand sanded and finished with natural oil",
	},
	{ name: "Includes", description: "Wood card tray and 3 refill packs" },
	{
		name: "Considerations",
		description:
			"Made from natural materials. Grain and color vary with each item.",
	},
];

const ProductFeatures = () => {
	return (
		<div className=" pt-24">
			<SectionTitle text="products specifictions" />
			<div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4  sm:px-6 py-12 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-5">
				<div>
					<p className="mt-4 text-gray-500">
						The walnut wood card tray is precision milled to
						perfectly fit a stack of Focus cards. The powder coated
						steel divider separates active cards from new ones, or
						can be used to archive important task lists.
					</p>

					<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
						{features.map((feature) => (
							<div
								key={feature.name}
								className="border-t border-gray-200 pt-4"
							>
								<dt className="font-medium ">{feature.name}</dt>
								<dd className="mt-2 text-sm text-gray-500">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
				<div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
					<img
						src="https://img.freepik.com/free-photo/carpenter-working-with-circular-saw_1157-35624.jpg?w=996&t=st=1706675568~exp=1706676168~hmac=7809ccdff47f3f09880e4209f04f4ac44f5410af7f6e86deb27c29292d99f5f8"
						alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
						className="rounded-lg bg-gray-100"
					/>
					<img
						src="https://img.freepik.com/free-photo/carpenter-works-with-tree_1157-18909.jpg?w=996&t=st=1706675684~exp=1706676284~hmac=f0e7be0f34cdc6981c20a9c20315c3c328ce4a5a55f8c4ed99e489efc762edb0"
						alt="Top down view of walnut card tray with embedded magnets and card groove."
						className="rounded-lg bg-gray-100"
					/>
					<img
						src="https://img.freepik.com/free-photo/carpenter-works-with-tree_1157-18678.jpg?w=996&t=st=1706675752~exp=1706676352~hmac=bf71c42031b25ff37d6464c7e1d0479506782280d6bdc83abc1f3f0e0d2d0048"
						alt="Side of walnut card tray with card groove and recessed card area."
						className="rounded-lg bg-gray-100"
					/>
					<img
						src="https://as1.ftcdn.net/v2/jpg/01/03/99/44/1000_F_103994494_CZGa5xh2I9uEaZ30OjUf476otpCcMCoO.jpg"
						alt="Walnut card tray filled with cards and card angled in dedicated groove."
						className="rounded-lg bg-gray-100"
					/>
					<img
						src="https://img.freepik.com/free-photo/carpenter-using-circular-saw-cutting-wooden-boards-construction-details-male-worker-handy-man-with-power-tools_155003-31339.jpg?w=996&t=st=1706676435~exp=1706677035~hmac=2c8e097ca0c5917dc5d05741f71f8a378b1bcfad79143d44c2f8221d7b57e741"
						alt="Walnut card tray filled with cards and card angled in dedicated groove."
						className="rounded-lg bg-gray-100"
					/>
					<img
						src="https://img.freepik.com/free-photo/professional-carpenter-checking-smoothness-wood-product-workshop_342744-828.jpg?w=996&t=st=1706676535~exp=1706677135~hmac=cb17e5a6d95f8fc254030fea44f56e7ca830b8262bb647e972b258a2121fbed9"
						alt="Walnut card tray filled with cards and card angled in dedicated groove."
						className="rounded-lg bg-gray-100"
					/>
				</div>
			</div>
		</div>
	);
};
export default ProductFeatures;
