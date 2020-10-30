export const hero = {
  section_id: "hero",
  primary: true,
  lightBg: true,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Hello, I am",
  headline: "Zisis Spatis",
  description:
    "I am an undergraduate student with an interest in web apps. Μy goal is to work as front-end or back-end developer in a company",
  buttonLabel: "Learn more",
  imgStart: "",
  lightTopLineBorderButton: false,
};

export const about_us = {
  section_id: "about-us",
  primary: true,
  lightBg: false,
  lightTopLine: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "",
  headline: "KNOW ABOUT ME",
  description:
    "I am 23 years old and I live in Kalamaria, Thessaloniki.In 2016 he took an exam and I went to Department of Computer Engineering and Electronic Systems . From the school the courses that have attracted my interest so far are the course Languages and Web Technologies and the Development of Internet Systems and Applications.",
  buttonLabel: "Download CV",
  descriptionEmail: "Email: zisispatis@gmail.com",
  imgStart: "",
  img: require("../../assets/hero-image.JPG"),
  alt: "Hero Image",
  start: true,
  lightTopLineBorderButton: true,
};

export const projects = {
  section_id: "projects",
  lightBg: true,
  lightText: true,
  headline: "PROJECTS",
  lightTopLineBorderButton: true,
  project_details: [
    {
      id: "1",
      title: "CMS Project",
      description:
        "I am 23 years old and I live in Kalamaria, Thessaloniki.In 2016 he took an exam and I went to Department of Computer Engineering and Electronic Systems . From the school the courses that have attracted my interest so far are the course Languages and Web Technologies and the Development of Internet Systems and Applications.",
      descriptionEmail: "REACT - STYLED COMPONENTS - GATSBY",
      imgStart: false,
      img:
        "https://static.dribbble.com/users/757683/screenshots/14211417/media/9dcad43025c1cae6acdb55660bdfdae6.jpg",
      alt: "",
      topLine: "",
      lightTopLine: false,
      lightTextDesc: true,
      buttons: [
        {
          id: "1",
          primary: true,
          label: "LINK",
          link: "",
          big: true,
          fontBig: true,
          icon: "link",
        },
        {
          id: "2",
          primary: false,
          label: "SOURCE",
          link: "",
          big: true,
          fontBig: true,
          icon: "source",
        },
      ],
    },
    {
      id: "2",
      title: "CMS Project",
      description:
        "I am 23 years old and I live in Kalamaria, Thessaloniki.In 2016 he took an exam and I went to Department of Computer Engineering and Electronic Systems . From the school the courses that have attracted my interest so far are the course Languages and Web Technologies and the Development of Internet Systems and Applications.",
      descriptionEmail: "REACT - STYLED COMPONENTS - GATSBY",
      imgStart: true,
      img:
        "https://static.dribbble.com/users/5261465/screenshots/14210557/media/59926a5895d53d6a9ad92175763f97a5.jpg",
      alt: "",
      topLine: "",
      lightTopLine: false,
      lightTextDesc: true,
      buttons: [
        {
          id: "1",
          primary: true,
          label: "LINK",
          link: "",
          big: true,
          fontBig: true,
          icon: "link",
        },
        {
          id: "2",
          primary: false,
          label: "SOURCE",
          link: "",
          big: true,
          fontBig: true,
          icon: "source",
        },
      ],
    },
    {
      id: "3",
      title: "CMS Project",
      description:
        "I am 23 years old and I live in Kalamaria, Thessaloniki.In 2016 he took an exam and I went to Department of Computer Engineering and Electronic Systems . From the school the courses that have attracted my interest so far are the course Languages and Web Technologies and the Development of Internet Systems and Applications. For this reason I would like to work as a Front-end or Back-end developer with what I finished my school and generally as a Web Develeper.",
      descriptionEmail: "REACT - STYLED COMPONENTS - GATSBY",
      imgStart: false,
      img:
        "https://static.dribbble.com/users/4189231/screenshots/14211055/media/ad0f318fb03bc28e7e3d28b7e6fd3e75.png",
      alt: "",
      topLine: "",
      lightTopLine: false,
      lightTextDesc: true,
      buttons: [
        {
          id: "1",
          primary: true,
          label: "LINK",
          link: "",
          big: true,
          fontBig: true,
          icon: "link",
        },
        {
          id: "2",
          primary: false,
          label: "SOURCE",
          link: "",
          big: true,
          fontBig: true,
          icon: "source",
        },
      ],
    },
  ],
};
