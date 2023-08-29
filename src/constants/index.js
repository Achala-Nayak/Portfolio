import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
  
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "BGS National Public School",
      company_name: "CBSE 10th",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2011 - March 2019",
      points: [
        "Served as a Schneider Electric Green Ambassador in 2013-2014.",
        "Achieved victory in Music Mania as the winner in the Instrumental Keyboard category during 2015-2016.",
        "Actively participated as a member of CMCA in 2016-2017.",
        "Engaged in Volleyball during the academic year 2017-2018.",
        "Attained a remarkable grade of 95.33% in my 10th Board Exams."
      ],
    },
    {
      title: "Deeksha CFL PU College ",
      company_name: "Karnataka State Board 12th",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2019 - August 2021",
      points: [
        "Attained an outstanding score of 98% in the 12th board exams. ",
        "Secured a perfect 100% in the PCMC subjects."
      ],
    },
    {
      title: "PES University",
      company_name: "B.Tech-Computer Science Engineering",
      icon: shopify,
      iconBg: "#383E56",
      date: "September 2021 -  2025",
      points: [
        "I am a member of several clubs, namely Shunya (The official math club of PES University), IEEE RAS, and GDSC. ",
        "I've actively participated in a variety of events, including Aatmatrisha 2022 and Vicharaprapancha. ",
        "Additionally, I've led the coordination and organization of events like Anveshana, Kalari, Comicurve, Arithemania, Swatantr, and Learning Path.",
        "I've also engaged in hackathons such as Kodikon and Hallothon.",
        "I hold a core position within Samarpana, an initiative by PES University since 2008. Samarpana supports families of Indian Armed Forces martyrs. Currently, our team is arranging Samarpana 2023, a charity run that pays tribute to these heroes. This event strives to increase awareness about their sacrifices, prompting people to assist martyrs' families and fostering patriotism among students and citizens."
        
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };