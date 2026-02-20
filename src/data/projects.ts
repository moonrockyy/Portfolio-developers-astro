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
    TAILWIND2: {
        name: "Tailwind",
        class: "bg-[#003159] text-white",
        icon: "lucide:tram-front",
    },
    SUPABASE: {
        name: "Supabase",
        class: "bg-[#339933]/20 text-[#6cc24a]",
        icon: "lucide:cable",
    },
};

export const PROJECTS = [
    {
        title: "MenuCraft - Restaurant Menu Builder",
        description:
            "A modern, professional menu builder designed specifically for restaurants, cafes, bars, and food service businesses. Create beautiful, digital menus that your customers can access instantly on their phones. No design skills required!",
        link: "https://menusaz.vercel.app",
        github: "https://github.com/moonrockyy/restaurant-menu-builder",
        image: "/images/menucraft.png",
        tags: [TAGS.REACT2, TAGS.TAILWIND2, TAGS.SUPABASE],
    },
    {
        title: "Proshop - Ecommerce Clothing Store",
        description:
            "Built a full-featured ecommerce clothing store using the MERN stack. Features include product browsing, cart management, user authentication, and secure payment processing for a seamless shopping experience.",
        link: "https://github.com/moonrockyy/proshop",
        github: "https://github.com/moonrockyy/proshop",
        image: "/images/proshop.png",
        tags: [TAGS.REACT2, TAGS.NODE, TAGS.MONGO],
    },
    
];
