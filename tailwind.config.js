/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Si tu utilises ce dossier
  ],
  darkMode: "class", // Mode sombre basé sur une classe (pratique pour les sites interactifs)
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans], // Ajout de la police personnalisée "mont"
      },
      colors: {
        dark: "#1b1b1b", // Couleur sombre
        light: "#f5f5f5", // Couleur claire
        primary: "#5f32ba", // Couleur principale
        primaryDark: "#58E6D9", // Couleur principale en mode sombre
        fuchsia: "#D5006D", // Couleur fuchsia pour l'effet de soleil
        turquoise: "#58E6D9", // Bleu turquoise
      },
      animation: {
        "gradient-animate": "gradient 15s ease infinite", // Animation pour l'effet de gradient
        "sun-ray": "sunRay 3s ease-out infinite", // Animation pour l'effet de soleil avec des rayons
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        "spin-slow": "spin 8s linear infinite", // Animation de rotation lente
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        sunRay: {
          "0%": {
            boxShadow: "0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(255,255,255,0.4), 0 0 35px rgba(255,255,255,0.3), 0 0 45px rgba(255,255,255,0.2)",
          },
          "50%": {
            boxShadow: "0 0 25px rgba(255,255,255,0.7), 0 0 35px rgba(255,255,255,0.6), 0 0 50px rgba(255,255,255,0.5), 0 0 70px rgba(255,255,255,0.4)",
          },
          "100%": {
            boxShadow: "0 0 15px rgba(255,255,255,0.5), 0 0 25px rgba(255,255,255,0.4), 0 0 35px rgba(255,255,255,0.3), 0 0 45px rgba(255,255,255,0.2)",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      backgroundImage: {
        'gradient-animated': 'linear-gradient(45deg, #f056c7, #58e6d9, #5f32ba)', // Définition du gradient animé
        circularLight:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)", // Dégradé circulaire clair
        circularDark:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)", // Dégradé circulaire sombre
        circularLightLg:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)", // Grand dégradé circulaire clair
        circularDarkLg:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)", // Grand dégradé circulaire sombre
        circularLightMd:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)", // Dégradé circulaire moyen clair
        circularDarkMd:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)", // Dégradé circulaire moyen sombre
        circularLightSm:
            "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)", // Petit dégradé circulaire clair
        circularDarkSm:
            "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)", // Petit dégradé circulaire sombre
      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)", // Ombre supplémentaire pour un effet de profondeur
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
