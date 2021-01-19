import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
	title: "",
	lang: "",
	description: "",
};

// HERO DATA
export const heroData = {
	title: "",
	name: "",
	subtitle: "",
	cta: "",
};

// ABOUT DATA
export const aboutData = {
	img: "tamas.jpg",
	paragraphOne: "",
	paragraphTwo: "",
	paragraphThree: "",
	resume: "",
};

// PROJECTS DATA
export const projectsData = [
	{
		id: nanoid(),
		img: "drum-kit.png",
		title: "Drum kit",
		info: "Basic drum kit application",
		info2: "",
		url: "https://frosty-easley-546c74.netlify.app/",
		repo: "https://github.com/borblytams/drum_kit", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "accordition.png",
		title: "Accordition",
		info: "Simple accordition",
		info2: "",
		url: "https://nostalgic-aryabhata-95d5bd.netlify.app/",
		repo: "https://github.com/borblytams/accordition", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "cart.png",
		title: "Cart",
		info: "Basic cart for webshops",
		info2: "",
		url: "https://youthful-bassi-3aabff.netlify.app/",
		repo: "https://github.com/borblytams/cart", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "cocktail.png",
		title: "Cocktail",
		info: "Basic app for searching and filtering cockctails",
		info2: "With inbuild external API",
		url: "https://dreamy-bhaskara-69f64e.netlify.app/",
		repo: "https://github.com/borblytams/cocktails", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "color-generator.png",
		title: "Color generator",
		info: "hex",
		info2: "",
		url: "https://angry-stonebraker-ae8a4d.netlify.app/",
		repo: "https://github.com/borblytams/color-generator", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "dark-mode.png",
		title: "Dark mode",
		info: "Simple app to change white to dark mode",
		info2: "",
		url: "https://naughty-nobel-2bb573.netlify.app/",
		repo: "https://github.com/borblytams/dark-mode", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "hacker-news.png",
		title: "Hacker news",
		info: "Basic site for reading hacker news",
		info2: "External API",
		url: "https://sleepy-stonebraker-568f9e.netlify.app/",
		repo: "https://github.com/borblytams/hacker-news", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "lorem-ipsum.png",
		title: "Lorem ipsum generator",
		info: "A generator for lorem ipsum",
		info2: "",
		url: "https://zen-wilson-74ffdc.netlify.app/",
		repo: "https://github.com/borblytams/lorem-ipsum", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "markdown.png",
		title: "Markdown previewer",
		info: "Basic app for markdown",
		info2: "",
		url: "https://zen-wilson-74ffdc.netlify.app/",
		repo: "https://github.com/borblytams/markdown-preview", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "menu.png",
		title: "A simple menu with filter options",
		info: "Multiple menu options",
		info2: "",
		url: "https://agitated-kirch-aa9e59.netlify.app/",
		repo: "https://github.com/borblytams/menu", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "navbar.png",
		title: "A basic navbar",
		info: "Navbar for any website",
		info2: "",
		url: "https://elated-kalam-d4b3fb.netlify.app/",
		repo: "https://github.com/borblytams/navbar", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "pagination.png",
		title: "Pagination",
		info: "Pagination for any website",
		info2: "",
		url: "https://fervent-lalande-23b709.netlify.app/",
		repo: "https://github.com/borblytams/pagination", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "quiz.png",
		title: "A quiz app",
		info: "Basic quiz app",
		info2: "",
		url: "https://quirky-williams-abd21f.netlify.app/",
		repo: "https://github.com/borblytams/quiz", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "random-person.png",
		title: "A random person app",
		info: "With random button",
		info2: "",
		url: "https://priceless-jang-f279eb.netlify.app/",
		repo: "https://github.com/borblytams/random-person", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "reviews.png",
		title: "A review app",
		info: "With suprise me button",
		info2: "",
		url: "https://trusting-albattani-e0cde1.netlify.app/",
		repo: "https://github.com/borblytams/reviews", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "slider.png",
		title: "A basic slider",
		info: "with timeout",
		info2: "",
		url: "https://zen-heyrovsky-51bd8f.netlify.app/",
		repo: "https://github.com/borblytams/slider", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "stripe.png",
		title: "Navbar and stripe submenus",
		info: "Basic navbar and submenus",
		info2: "",
		url: "https://quirky-hermann-f28151.netlify.app/",
		repo: "https://github.com/borblytams/stripe-submenus", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "tours.png",
		title: "Tours app",
		info: "Basic tours app",
		info2: "",
		url: "https://confident-austin-6c3303.netlify.app/",
		repo: "https://github.com/borblytams/tours", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "sidebar-modal.png",
		title: "Sidebar and modal",
		info: "Sidebar with modal",
		info2: "",
		url: "https://keen-snyder-6d6f40.netlify.app/",
		repo: "https://github.com/borblytams/sidebar-modal", // if no repo, the button will not show up
	},
	{
		id: nanoid(),
		img: "tabs.png",
		title: "Simple tabs",
		info: "Tabs",
		info2: "",
		url: "https://boring-tereshkova-da8cb3.netlify.app/",
		repo: "https://github.com/borblytams/tabs", // if no repo, the button will not show up
	},
];

// CONTACT DATA
export const contactData = {
	cta: "",
	btn: "",
	email: "",
};

// FOOTER DATA
export const footerData = {
	networks: [
		{
			id: nanoid(),
			name: "twitter",
			url: "",
		},
		{
			id: nanoid(),
			name: "codepen",
			url: "https://codepen.io/tam-s-borb-ly",
		},
		{
			id: nanoid(),
			name: "linkedin",
			url: "https://www.linkedin.com/in/borblytams/",
		},
		{
			id: nanoid(),
			name: "github",
			url: "https://github.com/borblytams",
		},
	],
};

// Github start/fork buttons
export const githubButtons = {
	isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
