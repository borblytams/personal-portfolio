import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '',
  lang: '',
  description: '',
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'tamas.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'drum-kit.png',
    title: 'Drum kit',
    info: 'Basic drum kit application',
    info2: '',
    url: 'https://frosty-easley-546c74.netlify.app/',
    repo: 'https://github.com/borblytams/drum_kit', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'accordition.png',
    title: 'Accordition',
    info: 'Simple accordition',
    info2: '',
    url: 'https://nostalgic-aryabhata-95d5bd.netlify.app/',
    repo: 'https://github.com/borblytams/accordition', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cart.png',
    title: 'Cart',
    info: 'Basic cart for webshops',
    info2: '',
    url: 'https://youthful-bassi-3aabff.netlify.app/',
    repo: 'https://github.com/borblytams/cart', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cocktail.png',
    title: 'Cocktail',
    info: 'Basic app for searching and filtering cockctails',
    info2: 'With inbuild external API',
    url: 'https://dreamy-bhaskara-69f64e.netlify.app/',
    repo: 'https://github.com/borblytams/cocktails', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'color-generator.png',
    title: 'Color generator',
    info: 'hex',
    info2: '',
    url: 'https://angry-stonebraker-ae8a4d.netlify.app/',
    repo: 'https://github.com/borblytams/color-generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dark-mode.png',
    title: 'Dark mode',
    info: 'Simple app to change white to dark mode',
    info2: '',
    url: 'https://naughty-nobel-2bb573.netlify.app/',
    repo: 'https://github.com/borblytams/dark-mode', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cart.png',
    title: 'Cart',
    info: 'Basic cart for webshops',
    info2: '',
    url: 'https://youthful-bassi-3aabff.netlify.app/',
    repo: 'https://github.com/borblytams/cart', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cart.png',
    title: 'Cart',
    info: 'Basic cart for webshops',
    info2: '',
    url: 'https://youthful-bassi-3aabff.netlify.app/',
    repo: 'https://github.com/borblytams/cart', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/tam-s-borb-ly',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/borblytams/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/borblytams',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
