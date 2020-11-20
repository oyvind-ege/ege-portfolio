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
  paragraphs: [
    'Hi! I am Øyvind. I am a former genocide investigator and peace process associate, having worked with both the UN in Cambodia and an NGO in Switzerland.',
    'Though extremely meaningful and intellectually stimulating, my previous career was far removed from the lives of those we served, and so one day I decided to take the plunge and committ to a career change.',
    'Software engineering was my field of choice for one very simple reason: it combines rigurous intellectual work with a clear-headed focus on building tangible and useful products for the end-user.',
    'I am now a fullstack developer, trained in JavaScript/TypeScript along with React, Express, Node, and MongoDB/PostgreSQL. Though I have an eye for colors and harmonies, I prefer to work on the back end of the stack. Here I can delve deeply into domain-specific patterns and algorithms, and solve tough problems in a neat and elegant way.',
  ],
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    img: 'bidra-sammen2.png',
    title: 'Bidra Sammen',
    info: 'An app for volunteers and organizations that need them',
    info2:
      'Our final group project at SALT. Bidra Sammen enables volunteers to sign up for events near them, and for organizations to create events and manage attendance.',
    date: 2020,
    url: '',
    repo: 'https://github.com/jopemoma/Graduation-Project',
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
    url: 'https://stupefied-mayer-a2426b.netlify.app/',
    repo: 'https://github.com/oyvind-ege/wnda.amortization',
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
    repo: 'https://github.com/oyvind-ege/TicTacToe',
    tech: ['Python'],
  },
  {
    id: nanoid(),
    img: 'egg.PNG',
    title: 'Egg',
    info: 'A foolprof egg-timer for all globalists out there.',
    info2:
      "From another 1-day challenge. This web-app will calculate the correct cooking time for an egg given the user's current elevation. 100% scientific.",
    date: 2020,
    url: '',
    repo: 'https://github.com/oyvind-ege/egg-svelte',
    tech: ['Javascript', 'Svelte'],
  },
];

// SKILLS DATA
export const techSkillData = [
  {
    name: 'Javascript',
    level: 9,
    displayColor: '#B85700',
  },
  {
    name: 'TypeScript',
    level: 7,
    displayColor: '#68B4DC',
  },
  {
    name: 'Express.js',
    level: 8,
    displayColor: '#3B4E74',
  },
  {
    name: 'React',
    level: 8,
    displayColor: '#007CDD',
  },
  {
    name: 'Svelte',
    level: 7,
    displayColor: '#CB4424',
  },
  {
    name: 'SASS/CSS',
    level: 7,
    displayColor: '#3B4E74',
  },
  {
    name: 'MongoDB',
    level: 8,
    displayColor: '#C3439E',
  },
  {
    name: 'SQL',
    level: 8,
    displayColor: '#74776B',
  },
];

export const softSkillData = [
  {
    name: 'Teamwork',
    level: 8,
    displayColor: '#B85700',
  },
  {
    name: 'Agile development',
    level: 8,
    displayColor: '#CB4424',
  },
  {
    name: 'Critical thinking',
    level: 9,
    displayColor: '#3B4E74',
  },
  {
    name: 'Creativity',
    level: 8,
    displayColor: '#3B4E74',
  },
  {
    name: 'Strategic thinking',
    level: 8,
    displayColor: '#74776B',
  },
  {
    name: 'Leadership',
    level: 8,
    displayColor: '#68B4DC',
  },
];

// TECH STACK

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
  email: 'contact@oyvind-ege.dev',
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
