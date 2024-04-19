import { reactive } from "vue";
export const api = {
  serverURI: "http://127.0.0.1:8000/api",
};

export const store = reactive({
  projects: [],
  pagination: [],

  navLinks: [
    {
      label: "Front End",
      url: "#",
      active: false,
    },
    {
      label: "Back End",
      url: "#",
      active: false,
    },
    {
      label: "Full Stack",
      url: "#",
      active: false,
    },
  ],

  logo: "./src/assets/img/boolean-logo.png",

  footerLegalLinks: [
    {
      label: "Home",
      url: "#",
    },
    {
      label: "Info",
      url: "#",
    },
  ],

  footerSocialLinks: [
    {
      label: "twitter",
      url: "#",
    },
    {
      label: "facebook",
      url: "#",
    },
    {
      label: "instagram",
      url: "#",
    },
    {
      label: "github",
      url: "#",
    },
  ],
});
