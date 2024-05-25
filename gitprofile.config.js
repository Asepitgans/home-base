// gitprofile.config.js

const config = {
  github: {
    username: 'Asepitgans', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://unitedcyberteam.com',
    phone: '+6289530656600',
    email: 'liyabaanuata4@gmail.com',
  },
  skills: [
    'Python',
    'Kotlin',
    'PHP',
    'JavaScript',
    'MySQL',
    'Bash',
    'Git',
  ],
  education: [
    {
      institution: 'SMP N 3 CIANJUR',
      degree: 'Junior High School',
      from: '2016',
      to: '2019',
    },
    {
      institution: 'SMK AL-IDZAR',
      degree: 'Vocational High School',
      from: '2019',
      to: '2022',
    },
    {
      institution: 'STKIP YASIKA Majalengka',
      degree: 'Bachelor of Mathematic Education',
      from: '2022',
      to: 'now',
    }
  ],
  experiences: [],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn',
    // limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-7YTK94B3WJ', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'pastel',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
  
};

export default config;
