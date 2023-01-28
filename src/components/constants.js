export const project_info = [
  {
    size: 100,
    title: "Model Autonomous Mining Loader",
    ref: "model-auto-loader",
    blurb: [
      "Developed an algorithm for navigation via line following and obstacle detection for a robot equipped with an Arduino, infrared sensors and DC motors. Additionally designed and modelled a scoop and arm mechanism using Linkage, and further developed the program to scoop, carry, and drop dirt with the mechanism.",
    ],
    embed: [],
    imgs: [
      { src: "https://i.imgur.com/BxxqP8U.jpg", size: "300px" },
      { src: "https://i.imgur.com/z5k6h8B.jpg", size: "300px" },
      { src: "https://i.imgur.com/nXJTAV7.jpg", size: "400px" },
    ],
    soft_skills: ["Live Project Demonstration, Iterative design"],
    tech: ["Arduino, C, Mechanical-prototyping"],
    more: false,
  },
  {
    size: 100,
    title: "Antenna-Integrated Robotic Arm",
    ref: "antenna-arm",
    blurb: [
      "This is a personal project I developed with my dad in an effort to improve the very delicate signal strength from an outdoor antenna. A signal antenna is attached to the end of a servo-motor-controlled robotic arm, which analyzes signal strength at a given angle and re-orients itself to maximize internet connection. The servos and communication functionalities were programmed on an Arduino, and interfaced to a computer using serial port communications with a GUI made in C.",
    ],
    embed: [],
    imgs: [{ src: "https://i.imgur.com/UNprItT.png" }],
    soft_skills: ["Iterative design"],
    tech: ["Arduino, C, Mechanical-prototyping"],
    more: false,
  },
  {
    size: 500,
    title: "Payload Testing Apparatus, Queen's Space Engineering Team",
    ref: "payload-testing",
    blurb: [
      "This project was completed for testing of the Queen's Space Engineering Team's Mars Rover. This project was extremely beneficial to my teamwork skills, improved my abilities to collect and implement requirements by a client, and ignited my passion for integrated mechanical design.",
      "The following excerpt is from the executive summary of the final report of this project.",
      "Queen’s Space Engineering Team (QSET) requires a chemical testing apparatus for laboratory use, which can detect signs of life, or biosignatures, in soil samples. QSET annually designs a rover with a payload to conduct chemical testing on soil samples in a simulated mars exploration competition. This test apparatus is required since QSET is interested in testing wet chemical tests in the fall semester; however, QSET presently cannot do so until the winter semester, when the payload for the rover is built. The chemical testing apparatus proposed in this report is thus purely for lab use.",
      "Three models have been generated to meet the required functionality [for] the client. All three models consist of a cylindrical body, sieve, funnel, and a pathway for soil samples to travel into cuvettes, where wet chemical biosignature tests will occur. The first model consists of a manually operated sieve and no electrical components and a radial arrangement of tubes about a conical separator to deliver the soil sample to cuvettes. The second contains a vibrational sieve, which feeds soil onto a valve attached to an actuator, which drops soil onto a rotating plate of cuvettes when a weight threshold is met. The third utilizes a sieve that rotates around an axis and contains ball bearings to crush samples, which are then fed directly into cuvettes. Designs were evaluated based on their simplicity, versatility, sieve effectiveness, ability to be cleaned, cost, and weight. The team selected the first design as the lack of electric parts in this design minimizes points of failure and makes the design cost-effective and lightweight. However, this design will be less capable of grinding coarse grains than those with electric motor-driven sieves.",
      "The following describes the chosen design as taken from the ‘Design Solution’ section of the final report.",
      "The proposed design solution is a fully non-electric testing apparatus which prioritizes simplicity, ease of use, and the effectiveness of the design’s sieve.  This design features a simple user-operated sieve. The sieve contains two grinding stars, one stacked on another, the bottom of which moves to grind soil samples when a wire, which is connected to a trigger, is pulled. Crushed soil then falls through the sieve mesh below into the funnel to the distributor. The soil sample is then funnelled onto a cylindrical cone, which distributes the soil sample evenly into nine tubes in radial arrangement around the cone. Nylon tubes inserted into this distributor through the bottom of the holes will extend down to cuvettes; each cuvette will have a cubic plastic attachment. The cuvettes are embedded in a shelf with a matrix of grooves to allow for varied placement of the cuvettes.",
    ],

    embed: [],
    imgs: [
      { src: "https://i.imgur.com/WkFxC4L.png" },
      { src: "https://i.imgur.com/cextWLq.jpg" },
    ],
    soft_skills: ["Teamwork"],
    tech: ["SolidWorks Protoyping, Mathematical Modeling"],
    more: true,
  },
  {
    size: 400,
    title: "8-Bit Arduino LEGO Game Console",
    ref: "game-console",
    blurb: [
      "I completed this project over a weekend during quarantine in the midst of the COVID-19 Pandemic. I'd seen people online create small gaming consoles using a Raspberry Pi, but I figured I could create something similar using an Arduino, some spare push buttons, and a display leftover from a previous project.",
      "I prototyped the box for the console using LEGO bricks. I was able to create holes for easy access to the Arduino ports on the side of the console, a seperate panel for the buttons, and a panel for the LCD, which kept it in place. The panel for the LCD could be easily removed to access the Arduino, and the terminal block which managed the connections between the buttons and the Arduino I/O pins.",
      "Using binary matricies, I was able to create custom LCD-printable characters for a game in which a character, controlled by inputs from the user pressing the push buttons, moves around the screen to catch gifts and avoid traps. This game was made by creating a matrix for the LCD display, and shifting the coordinates of the characters according to inputs or pre-defined trajectories. Gifts and traps were randomly generated and always moved toward the left of the screen. The console can be seen in action in the above embedded video.",
    ],
    embed: [{ src: "https://www.youtube.com/embed/8fNFOhTsp44" }],
    imgs: [],
    soft_skills: ["Creativity :)"],
    tech: [
      "Arduino, Physical Prototyping, I/O Systems, Custom LCD Character Creation",
    ],
    more: true,
  },
  {
    size: 500,
    title: "ReCoin, UofT Hacks IX 3rd Overall Winner",
    ref: "recoin",
    blurb: [
      "This app was developed in 36 hours by myself and three friends as our submission to UofT Hack IX. The theme of the hackathon was ‘restoration’, specifically referring to the restoration of small businesses following the pandemic. Our team took the prompt a step further, and decided to make environmental restoration an additional outcome of our product. We came up with ReCoin, a mobile app that can be used to scan waste, direct a user to the correct drop site for the waste, and through a rewards system, direct users to partnered small businesses to spend their ‘ReCoins’.",
      "The following blurb describes the app more technically and is sourced from the project’s DevPost.",

      "This intuitive app utilizes an image-classification neural network to identify waste captured by the user's camera. The user will then be alerted of nearby drop sites for their recyclable product at partnered local businesses, where they can take their scanned product and exchange it for credit. The goal of Recoin is to strengthen engagement with small businesses while raising public consciousness about the lifecycle of waste. Reduce, Reuse, Recoin. ",
      "In Pytorch, we utilized an open-source trash detection AI software and data, to train the trash detection system originally developed by IamAbhinav03. The system utilizes over 2500 images to train, test, and validate the system. To improve the system, we increased the number of epochs to 8 rather than 5 (number of passes the training system has completed). This allowed the accuracy to increase by 4% more than the original system. We also modified the test/train ratio and split amounts to 70%, 10%, and 20% respectively, as more prominent AI studies have found this distribution to receive the best results. ",
      "Currently, the system is predicted to have a 94% accuracy, but in the future, we plan on using reinforcement learning in our beta testing to continuously improve our algorithm. Reinforcement learning allows for the data to be more accurate, through learning from user correction. This will allow AI to become more precise as it gains more popularity. ",
      "A flask server is used to make contact with the waste detection neural network; an image is sent from the front end as a post request, the Flask server generates a tensor and runs that through the neural net, then sends the response from the algorithm back to the front end. This response is the classification of the waste as either cardboard, glass, plastic, metal, paper or trash.",
    ],

    embed: [
      {
        src: "https://www.youtube.com/embed/3cQccg12dgQ",
      },
    ],
    imgs: [
      {
        src: "https://i.imgur.com/qZ9qrZb.png",
      },
    ],
    soft_skills: ["Teamwork"],
    tech: ["Flask, Javascript, PyTorch, Expo"],
    more: true,
  },
  {
    size: 500,
    title: "Markit, Queen's Startup Summit 2nd Place Overall Winner",
    ref: "markit",
    blurb: [
      "This startup concept was developed in 24 hours by myself and a team of 4 others as our submission to Queen's Startup Summit. Markit is a startup focused on reducing food waste by automating the process of escaping expiration dates. Our infrastructure allows shoppers at grocery stores to retrieve the expiry dates of all of their groceries within our paired app by tapping their phone on a near-field communication (NFC) chip at checkout. The Markit app then notifies users when food in their fridge is going to pass its best-before date. After pitching our product live on Sunday, we had the honour of winning second place overall amongst a cohort of talented young visionaries. ",
    ],
    embed: [
      {
        width: "800",
        height: "450",
        src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FoVKfCGL5Y2QDEBjWh9ndJL%2Fmarkit.io-User-Experience%3Fnode-id%3D0%253A1%26t%3D9ENxn1irzu3J7l1f-1",
      },
    ],
    imgs: [
      { src: "https://i.imgur.com/R0fJzHy.jpg" },

      { src: "https://i.imgur.com/BlUEj7A.png", size: "300px" },
    ],
    soft_skills: ["Teamwork, Agile development, Pitching"],
    tech: ["Near-Field Communications Chips, Figma"],
    more: true,
  },
];

export const work_info = [
  {
    size: 100,
    title: "Ciena | Automation Software Engineer Intern",
    ref: "ciena-2",
    blurb: [
      "- Optimized hardware test software output speeds by increasing code modularity and refactoring algorithms in automated testing scripts using Python on Linux.",
      "- Ran test cases to test the robustness of Ciena’s 6500 equipment.",
      "- Created an internal email notification system notifying of items of urgent attention and test result summaries with Jenkins, Groovy, and HTML.",
    ],

    embed: [],
    imgs: [],
    soft_skills: ["Collecting Requirements, Professional Communications"],
    tech: ["Python, Linux, Hardware Testing, Test Automation"],
    more: false,
  },

  {
    size: 100,
    title: "Ciena | FOS Chamber Development and Integration Intern",
    ref: "ciena-1",
    blurb: [
      "- Assisted in the design and development of the Flower of Sulfur chamber’s, controller box, external display/switch panel, alarms, and sensors.",
      "- Collected requirements from Electrical, Mechanical and Chemical engineers to create controller software, algorithms, and GUI",
      "- Developed software algorithms on the Arduino controller to control the chambers temperature, air speed, humidity, and safety protections.",
      "- Developed a windows based graphical user interface to control the Arduino controller via it’s USB to PC and log sensors data.",
      "- Utilized DVM to debug connectivity and sensor issues.  Soldered connections on external controller.  Made all connections Arduino controller PCB.",
      "- Provided a training session on code and GUI functionality to the team",
      "- Leveraged knowledge of Javascript, React, Node.js, Arduino, C++, Git and analog, digital and PWM",
      "- The project enabled the team to do long term testing without manual intervention.",
    ],
    embed: [],
    imgs: [],
    soft_skills: [
      "Teamwork, Iterative design, Live Project Demonstration, Collecting Requirements",
    ],
    tech: [
      "Arduino, C, React JS, DVMs, analog, digital, and PWM electronic hardware",
    ],
    more: false,
  },

  {
    size: 100,
    title: "Kinaxis | Software Developer Intern",
    ref: "kinaxis",
    blurb: [
      "- Upgraded the Kinaxis recruiting system by integrating an API into the company website to organize job postings and improve the user interface using Javascript, Express.js and REST API POST/GET requests.",
      "- Improved company productivity by developing a chatbot notification system for MS Teams to deliver live project updates, created using Typescript and Node.js, MongoDB for storage, and Azure for hosting.",
      "- Leveraged knowledge of Express, React, Typescript, Azure, Git, Javascript, Node.js, NoSQL databases.",
      "- Provided monthly project demonstrations to the Dev-Ops and Front-end teams, consisting of over 40 people.",
    ],

    embed: [],
    imgs: [],
    soft_skills: ["Live Project Demonstration, Professional Communications"],
    tech: ["React, Javascript, Node JS, APIs, Node.js, Azure, Git"],
    more: false,
  },
];
