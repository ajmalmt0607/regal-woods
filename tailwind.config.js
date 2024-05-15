// import tailwindcssTypography from "@tailwindcss/typography";
// import daisyui from "daisyui";

// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [tailwindcssTypography, daisyui],
// 	daisyui: {
// 		darkTheme: "light",
// 	},
// };

// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	// eslint-disable-next-line no-undef
// 	plugins: [require("@tailwindcss/typography"), require("daisyui")],
// 	daisyui: {
// 		themes: ["winter", "dracula"],
// 		styled: true,
// 		base: true,
// 		utils: true,
// 		logs: true,
// 		rtl: false,
// 	},
// };
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	// daisyui: {
	// 	themes: ["winter", "dracula"],
	// },
	daisyui: {
		themes: [
			{
				winter: {
					primary: "#a991f7",
					secondary: "#78716C",
					text: "#37cdbe",
					neutral: "#3d4451",
					"base-100": "#f1f5f9",
					"font-color-black": "rgb(12 10 9)",
				},
				dark: {
					primary: "#a991f7",
					secondary: "#f6d860",
					accent: "#37cdbe",
					neutral: "#3d4451",
					"base-100": "rgb(30 27 75)",
				},
			},
		],
	},
};
