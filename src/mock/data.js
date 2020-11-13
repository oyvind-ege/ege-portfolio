import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Øyvind Ege | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Genocide investigator turned',
  name: 'Øyvind Ege',
  subtitle: 'software engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'front-square-500.png',
  paragraphOne:
    'Formerly a genocide investigator with the UN, I am now a full-stack developer using JavaScript, TypeScript, React and Node.js/Express.',
  paragraphTwo:
    'I add value by smiling and laughing and solving tough problems. I am otherwise a pretty chill guy.',
  paragraphThree: 'If you think you can run fast and walk far, I challenge you to beat me.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bidra-sammen2.png',
    title: 'Bidra Sammen',
    info: 'An app for volunteers and those who need them',
    info2:
      'Our final group project at SALT. Bidra Sammen enables volunteers to sign up for events near them, and for organizations to create events and manage attendance.',
    date: 2020,
    url: '',
    repo: 'https://github.com/jopemoma/Graduation-Project', // if no repo, the button will not show up
    tech: ['Javascript', 'React Native', 'Node', 'MongoDB'],
  },
  {
    id: nanoid(),
    img: 'wnda.PNG',
    title: 'wnda. amortization',
    info: 'An amortization scheduler',
    info2:
      'The result of an 8-hour challenge to build an amortization scheduler. This web-app will generate and display an amortization schedule based on a predefined set of loan criteria. Consists of a Svelte frontend and mocked data.',
    date: 2020,
    url: '',
    repo: 'https://github.com/oyvind-ege/wnda.amortization', // if no repo, the button will not show up
    tech: ['Javascript', 'Svelte'],
  },
  {
    id: nanoid(),
    img: 'tictacwelcome.PNG',
    title: 'Tic Tac Toe',
    info: 'The classic board game',
    info2: 'My Python implementation of Tic Tac Toe, the classic board game for two players.',
    date: 2019,
    url: '',
    repo: 'https://github.com/oyvind-ege/TicTacToe', // if no repo, the button will not show up
    tech: ['Python'],
  },
  {
    id: nanoid(),
    img: 'egg.PNG',
    title: 'Egg',
    info: 'A foolprof egg-timer for all globalists out there.',
    info2:
      "Ever tried to cook an egg in the Andes or by the Dead Sea? I have - and ended up eating a half-boiled egg. This web-app will calculate the correct cooking time for an egg given the user's geolocation. 100% scientific.",
    date: 2020,
    url: '',
    repo: 'https://github.com/oyvind-ege/TicTacToe', // if no repo, the button will not show up
    tech: ['Javascript', 'Svelte'],
  },
];

export const techData = [
  {
    name: 'Svelte',
    svg: 'https://github.com/tomchen/stack-icons/raw/master/logos/svelte-icon.svg',
  },
  {
    name: 'React',
    svg: 'https://github.com/tomchen/stack-icons/raw/master/logos/react.svg',
  },
  {
    name: 'Javascript',
    svg: 'https://github.com/tomchen/stack-icons/raw/master/logos/javascript.svg',
  },
  {
    name: 'Python',
    svg: 'https://github.com/tomchen/stack-icons/raw/master/logos/python.svg',
  },
  {
    name: 'React Native',
    svg: 'https://github.com/tomchen/stack-icons/raw/master/logos/react.svg',
  },
  {
    name: 'Node',
    svg: 'https://github.com/tomchen/stack-icons/raw/master/logos/nodejs-icon.svg',
  },
  {
    name: 'MongoDB',
    svg: 'https://github.com/tomchen/stack-icons/raw/master/logos/mongodb-icon.svg',
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
      url: 'https://twitter.com/OyvindEge',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/oyvind-ege/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/oyvind-ege',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
