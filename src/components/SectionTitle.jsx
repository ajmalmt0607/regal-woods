function SectionTitle({ text }) {
	return (
		<div className="border-b border-base-300 pb-5">
			<h2 className="capitalize text-3xl font-bold tracking-tight  sm:text-4xl">
				{text}
			</h2>
		</div>
	);
}

export default SectionTitle;
