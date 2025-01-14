export const outline = [
  {
    title: 'Syntax',
    description: 'The grammar of JavaScript',
    template: 'feature',
    questions: [
      {
        title: 'Destructuring',
        description: 'Example: <code>const { foo } = bar</code>'
      },
      {
        title: 'Spread operator',
        description: 'Example: <code>[...array1, ...array2]</code>'
      },
      {
        title: 'Arrow Functions',
        description: 'Example: <code>const foo = () => {}</code>'
      }
    ]
  },
  {
    title: 'Language',
    description: 'The vocabulary of JavaScript',
    template: 'feature',
    questions: ['Proxies', 'Async/Await', 'Promises', 'Decorators']
  },
  {
    title: 'Data Structures',
    description: 'How you store and manipulate data',
    template: 'feature',
    questions: ['Maps', 'Sets', 'Typed Arrays', 'Array.prototype.flat']
  },
  {
    title: 'Browser APIs',
    description: 'The features provided by the browser',
    template: 'feature',
    questions: [
      'Service Workers',
      'LocalStorage',
      'i18n',
      'Web Components',
      'Web Audio API',
      'WebGL',
      'Web Animations API',
      'WebRTC',
      'Web Speech API',
      'WebVR',
      'Websocket',
      'Fetch API'
    ]
  },
  {
    title: 'Other Features',
    description: 'Other technologies and patterns',
    template: 'feature',
    questions: ['Progressive Web Apps (PWA)', 'WebAssembly (WASM)']
  },
  {
    title: 'Patterns',
    description: 'How you prefer writing code',
    template: 'pattern',
    questions: [
      'Object-Oriented Programming',
      'Functional Programming',
      'Reactive Programming'
    ]
  },
  {
    title: 'JavaScript Flavors',
    description: 'Languages that compile to JavaScript',
    template: 'tool',
    id: 'flavors',
    questions: [
      'TypeScript',
      'Reason',
      'Elm',
      'ClojureScript',
      'PureScript',
      {
        title: 'Other JavaScript Flavors',
        description:
          'Other JavaScript flavors you use not mentioned in the list above',
        template: 'text'
      },
      {
        title: 'Overall Happiness',
        description:
          'On a scale of one (very unhappy) to five (very happy), how happy you with the current overall state of JavaScript flavors?',
        template: 'happiness'
      }
    ]
  },
  {
    title: 'Front-end Frameworks',
    description: 'Front-end frameworks and libraries',
    template: 'tool',
    id: 'frontend',
    questions: [
      'React',
      'Vue',
      'Angular',
      'Preact',
      'Ember',
      'Svelte',
      {
        title: 'Other Front-end Frameworks',
        description:
          'Other Front-end frameworks you use not mentioned in the list above',
        template: 'text'
      },
      {
        title: 'Overall Happiness',
        description:
          'On a scale of one (very unhappy) to five (very happy), how happy you with the current overall state of front-end frameworks?',
        template: 'happiness'
      }
    ]
  },
  {
    title: 'Data Layer',
    description: 'Loading and managing data in your app',
    template: 'tool',
    id: 'datalayer',
    questions: [
      'Redux',
      'Apollo',
      'GraphQL',
      'MobX',
      'Relay',
      {
        title: 'Other Data Layer Tools',
        description:
          'Other data layer tools you use not mentioned in the list above',
        template: 'text'
      },
      {
        title: 'Overall Happiness',
        description:
          'On a scale of one (very unhappy) to five (very happy), how happy you with the current overall state of data layer technologies?',
        template: 'happiness'
      }
    ]
  },
  {
    title: 'Back-end Frameworks',
    description: 'JavaScript on the server',
    template: 'tool',
    id: 'backend',
    questions: [
      'Express',
      'NestJS',
      'Next.js',
      'Koa',
      'Meteor',
      'Sails',
      'FeathersJS',
      'Nuxt.js',
      'Gatsby.js',
      {
        title: 'Other Back-end Frameworks',
        description:
          'Other back-end frameworks you use not mentioned in the list above',
        template: 'text'
      },
      {
        title: 'Overall Happiness',
        description:
          'On a scale of one (very unhappy) to five (very happy), how happy you with the current overall state of back-end frameworks?',
        template: 'happiness'
      }
    ]
  },
  {
    title: 'Testing',
    description: 'Tools for testing your code',
    template: 'tool',
    id: 'testing',
    questions: [
      'Jest',
      'Mocha',
      'Storybook',
      'Cypress',
      'Enzyme',
      'Ava',
      'Jasmine',
      'Puppeteer',
      {
        title: 'Other Testing Tools',
        description:
          'Other testing tools you use not mentioned in the list above',
        template: 'text'
      },
      {
        title: 'Overall Happiness',
        description:
          'On a scale of one (very unhappy) to five (very happy), how happy you with the current overall state of testing tools?',
        template: 'happiness'
      }
    ]
  },
  {
    title: 'Mobile & Desktop',
    description: 'JavaScript for mobile devices and desktop apps',
    template: 'tool',
    id: 'mobiledesktop',
    questions: [
      'Electron',
      'React Native',
      'Native Apps',
      'Cordova',
      'Ionic',
      'NW.js',
      'Expo',
      {
        title: 'Other Mobile & Desktop Tools',
        description:
          'Other mobile & desktop tools you use not mentioned in the list above',
        template: 'text'
      },
      {
        title: 'Overall Happiness',
        description:
          'On a scale of one (very unhappy) to five (very happy), how happy you with the current overall state of mobile & desktop tools?',
        template: 'happiness'
      }
    ]
  },
  {
    title: 'Other Tools',
    description:
      'For these tools & technologies, just check the ones that you use regularly.',
    questions: [
      {
        title: 'Utilities',
        description: 'Which JavaScript utilities do you regularly use?',
        template: 'multiple',
        allowmultiple: true,
        allowother: true,
        randomize: true,
        options: [
          'Immer',
          'Lodash',
          'Underscore',
          'Moment',
          'Date Fns',
          'Ramda',
          'jQuery',
          'RxJS'
        ]
      },
      {
        title: 'Other Utilities',
        template: 'text',
        description: 'Other utilities you use not mentioned in the list above'
      },
      {
        title: 'Text Editors',
        description: 'Which text editor(s) do you regularly use?',
        template: 'multiple',
        allowmultiple: true,
        allowother: true,
        randomize: true,
        options: ['VS Code', 'Sublime Text', 'Atom', 'Vim', 'Emacs', 'Webstorm']
      },
      {
        title: 'Other Editors',
        template: 'text',
        description:
          'Other text editors you use not mentioned in the list above'
      },
      {
        title: 'Browsers',
        description:
          'Which browser(s) do you work in primarily during initial development?',
        template: 'multiple',
        allowmultiple: true,
        allowother: true,
        randomize: false,
        options: ['Edge', 'Chrome', 'Safari', 'Firefox']
      },
      {
        title: 'Other Browsers',
        template: 'text',
        description: 'Other browsers you use not mentioned in the list above'
      },
      {
        title: 'Build Tools',
        description:
          'Which build tools do you use to compile and bundle your code?',
        template: 'multiple',
        allowmultiple: true,
        allowother: true,
        randomize: false,
        options: [
          'Webpack',
          'Parcel',
          'Gulp',
          'RollUp',
          'FuseBox',
          'Browserify'
        ]
      },
      {
        title: 'Other Build Tools',
        template: 'text',
        description: 'Other build tools you use not mentioned in the list above'
      },
      {
        title: 'Non-JS Languages',
        description:
          'Which other languages do you code in besides JavaScript and its flavors?',
        template: 'multiple',
        allowmultiple: true,
        allowother: true,
        randomize: false,
        options: [
          'PHP',
          'Ruby',
          'Python',
          'Go',
          'Rust',
          'Java',
          'C/C++',
          'Objective-C',
          'Scala',
          'Swift',
          'C#',
          '.NET',
          'Haskell',
          'OCaml',
          'Dart'
        ]
      },
      {
        title: 'Other Languages',
        template: 'text',
        description: 'Other languages you use not mentioned in the list above'
      }
    ]
  },
  {
    title: 'Resources',
    description: 'What JavaScript resources do you consult?',
    questions: [
      {
        title: 'Blogs, News, & Magazines',
        description:
          'Which JavaScript-related blogs/magazines/etc. do you read?',
        template: 'multiple',
        allowmultiple: true,
        allowother: true,
        randomize: true,
        options: [
          'CSS Tricks',
          'Smashing Magazine',
          'CoDrops',
          'SitePoint',
          'David Walsh',
          'DailyJS',
          'Echo JS',
          'Front-End Front',
          'JavaScript Weekly',
          'Dev.to',
          'Best of JS'
        ]
      },
      {
        title: 'Other Blogs',
        template: 'text',
        description:
          'Other blogs, etc. you read not mentioned in the list above'
      },
      {
        title: 'Sites & Courses',
        description:
          'Which JavaScript-related sites/courses/etc. do you consult?',
        template: 'multiple',
        allowmultiple: true,
        allowother: true,
        randomize: true,
        options: [
          'Stack Overflow',
          'MDN',
          'W3Schools',
          'FreeCodeCamp',
          'Codecademy',
          'LevelUp Tutorials',
          'Wes Bos Courses (GSSGrid.io, Flexbox.io, etc.)',
          'Pluralsight',
          'DesignCode'
        ]
      },
      {
        title: 'Other Courses',
        template: 'text',
        description:
          'Other sites, courses, etc. you consult not mentioned in the list above'
      },
      {
        title: 'Podcasts',
        description:
          'Which JavaScript or programming-related podcasts do you listen to?',
        template: 'multiple',
        allowmultiple: true,
        allowother: true,
        randomize: true,
        options: [
          'Shop Talk Show',
          'The Changelog',
          'Syntax',
          'JS Party',
          'JavaScript Jabber',
          'Full Stack Radio',
          'Front End Happy Hour',
          'JAMstack Radio',
          'The Web Platform Podcast',
          'Modern Web',
          'CodePen Radio'
        ]
      },
      {
        title: 'Other Podcasts',
        template: 'text',
        description:
          'Other podcasts you listen to not mentioned in the list above'
      }
    ]
  },
  {
    title: 'Opinion Questions',
    description: 'How do you feel about the state of JavaScript?',
    questions: [
      {
        title: 'JavaScript is moving in the right direction',
        template: 'opinion'
      },
      {
        title: 'Building JavaScript apps is overly complex right now',
        template: 'opinion'
      },
      {
        title: 'JavaScript is over-used online',
        template: 'opinion'
      },
      {
        title: 'I enjoy building JavaScript apps',
        template: 'opinion'
      },
      {
        title: 'I would like JavaScript to be my main programming language',
        template: 'opinion'
      },
      {
        title: 'The JavaScript ecosystem is changing too fast',
        template: 'opinion'
      },
      {
        title: 'What do you feel is currently missing from JavaScript?',
        description: 'Features you\'d like to see in JavaScript one day.',
        template: 'longtext'
      }
    ]
  },
  {
    title: 'About You',
    description: 'Let\'s get to know the real you.',
    questions: [
      {
        title: 'Years of Experience',
        description: 'How long you\'ve been writing JavaScript.',
        template: 'multiple',
        allowmultiple: false,
        allowother: false,
        randomize: false,
        options: [
          'Less than one year',
          '1-2 years',
          '2-5 years',
          '5-10 years',
          '10-20 years',
          '20+ years'
        ]
      },
      {
        title: 'Job Title',
        description: 'How do you introduce yourself at parties?',
        template: 'multiple',
        allowmultiple: false,
        allowother: true,
        randomize: false,
        options: [
          'Front-end Developer/Engineer',
          'Full-stack Developer/Engineer',
          'Back-end Developer/Engineer',
          'Web Developer'
        ]
      },
      {
        title: 'Other Job Title',
        template: 'text',
        description: 'Other job title you use not mentioned in the list above'
      },
      {
        title: 'CSS Proficiency',
        description:
          'How proficient are you at writing CSS? (pick the most advanced option corresponding to your skills)',
        template: 'multiple',
        allowmultiple: false,
        allowother: false,
        randomize: false,
        options: [
          'Level 1: virtually no knowledge of CSS',
          'Level 2: using CSS frameworks and tweaking existing styles',
          'Level 3: knowing specificity rules, being able to create layouts',
          'Level 4: mastering animations, interactions, transitions, etc.',
          'Level 5: being able to style an entire front-end from scratch following a consistent methodology'
        ]
      },
      {
        title: 'Back-end Proficiency',
        description:
          'How proficient are you at back-end development? (pick the most advanced option corresponding to your skills)',
        template: 'multiple',
        allowmultiple: false,
        allowother: false,
        randomize: false,
        options: [
          'Level 1: not able to handle any back-end work',
          'Level 2: able to set up all-in-one CMSs (WordPress, etc.) or static site generators (Jekyll, etc.)',
          'Level 3: able to develop apps using pre-existing frameworks (Rails, Laravel, etc.)',
          'Level 4: setting up an entire back-end from scratch (Go, Node, etc.)',
          'Level 5: able to handle complex multi-server or microservices architectures'
        ]
      },
      {
        title: 'Company Size',
        template: 'multiple',
        allowmultiple: false,
        allowother: false,
        randomize: false,
        options: [
          'Just me',
          '1-5 people',
          '5-10 people',
          '10-20 people',
          '20-50 people',
          '50-100 people',
          '100-1000 people',
          '1000+ people'
        ]
      },
      {
        title: 'Yearly Salary',
        description: 'In USD',
        template: 'multiple',
        allowmultiple: false,
        allowother: false,
        randomize: false,
        options: [
          'I work for free :(',
          '$0-$10k',
          '$10k-$30k',
          '$30k-$50k',
          '$50k-$100k',
          '$100k-$200k',
          '$200k+'
        ]
      },
      {
        title: 'How did you find out about this survey?',
        template: 'text'
      },
      {
        title: 'Your Gender',
        template: 'multiple',
        allowmultiple: false,
        allowother: true,
        options: [
          'Female',
          'Male',
          'Non-binary/ third gender',
          'Prefer not to say'
        ]
      },
      {
        title: 'Other Gender',
        template: 'text',
        description: 'Other gender not mentioned in the list above'
      },
      {
        title: 'Your Country',
        template: 'country'
      },
      {
        title: 'Your Email',
        description:
          'If you\'d like to be notified when survey results are available. Your email won\'t be used for any other purpose.',
        template: 'email',
        isprivate: true,
        searchable: true
      }
    ]
  }
];
