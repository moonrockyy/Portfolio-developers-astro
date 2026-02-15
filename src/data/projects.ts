export const TAGS = {
    ASTRO: {
        name: "HTML",
        class: "bg-[#7836cf]/20 text-[#bc95ff]",
        icon: "lucide:rocket",
    },
    REACT: {
        name: "JavaScript",
        class: "bg-[#23272f] text-[#58c4dc]",
        icon: "lucide:life-buoy",
    },
    REACT2: {
        name: "React",
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
    MONGO: {
        name: "MongoDB",
        class: "bg-[#7836cf]/20 text-[#bc95ff]",
        icon: "lucide:leaf",
    },
};

export const PROJECTS = [
    {
        title: "Proshop - Ecommerce Clothing Store",
        description:
            "Built a full-featured ecommerce clothing store using the MERN stack. Features include product browsing, cart management, user authentication, and secure payment processing for a seamless shopping experience.",
        link: "https://github.com/moonrockyy/proshop",
        github: "https://github.com/moonrockyy/proshop",
        image: "/images/proshop.png",
        tags: [TAGS.REACT2, TAGS.NODE, TAGS.MONGO],
    },
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
