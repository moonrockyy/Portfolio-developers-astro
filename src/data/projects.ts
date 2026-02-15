export const TAGS = {
    ASTRO: {
        name: "HTML",
        class: "bg-[#7836cf]/20 text-[#bc95ff]",
        icon: "lucide:rocket",
    },
    REACT: {
        name: "JavaScript",
        class: "bg-[#23272f] text-[#58c4dc]",
        icon: "lucide:webhook",
    },
    TAILWIND: {
        name: "CSS",
        class: "bg-[#003159] text-white",
        icon: "lucide:wind",
    },
    NODE: {
        name: "Node.js",
        class: "bg-[#339933]/20 text-[#6cc24a]",
        icon: "lucide:server",
    },
};

export const PROJECTS = [
    {
        title: "Moonrock - Personal Bussiness Website",
        description:
            "Moonrock delivers premium digital solutions for modern businesses. Our sleek, responsive websites blend innovative design with powerful functionality. We help your brand shine online, transforming visitors into loyal customers. Launch your success story with Moonrock today.",
        link: "https://moonrock.ir",
        github: "https://github.com/moonrockyy/moonrock-web",
        image: "/images/moonrock.png",
        tags: [TAGS.ASTRO, TAGS.TAILWIND, TAGS.REACT],
    }
];
