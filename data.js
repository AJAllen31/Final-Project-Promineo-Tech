import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Info",
        path: '/info'
    },
    {
        name: "Pokemon",
        path: '/pokemon'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const details = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Raikou",
        info: "Electric-Type Legendary Pokemon, Generation II Pokemon.",
        path: "/details/001"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Suicune",
        info: "Water-Type Legendary Pokemon, Generation II Pokemon.",
        path: "/details/002"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Entei",
        info: "Fire-Type Legendary Pokemon, Generation II Pokemon.",
        path: "/details/003"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Lugia",
        info: "Psychic/Flying Type Legendary Pokemon, Generation II Pokemon.",
        path: "/details/004"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Raikou",
        desc: "Electric Legendary dog Pokèmon."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Suicune",
        desc: "Water Legendary dog Pokèmon."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Entei",
        desc: "Fire Legenadary dog Pokèmon."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Lugia",
        desc: "Steel/Flying Legeandry bird Pokèmon."
    }
]









export const faqs = [
    {
        id: 1,
        question: "Game release date?",
        answer: "Developed by Game Freak and published by Nintendo in 2000."
    },
    {
        id: 2,
        question: "How many legendaries are in this game?",
        answer: "Gold and Silver featured 8 legendaries which are Entei, Suicune, Raikou, Lugia, Ho-Ho, MewTwo, Mew, and Celebi."
    },
    {
        id: 3,
        question: "Pokèdex size?",
        answer: "This game featured the Kanto/Johto region and contained 252 pokèmon."
    },
    {
        id: 4,
        question: "New game features?",
        answer: "Introduced pokèmon breeding, held items, Pokègear, real-time clock, and backward compatibility."
    },
    {
        id: 5,
        question: "The Gold and Silver difference?",
        answer: "The major difference is the available pokèmon to capture." 
    },
    {
        id: 6,
        question: "Platforms to play on?",
        answer: "It was designed heavily to play on GameBoy Color."
    }
]








export const stats = [
    {
        id: 1,
        name: "Ho-Ho",
        type: "Fire/Flying-Type",
        moves: "Aerial Ace, Flamethrower, Swift, Hyper Beam",
        avatar: require("./images/avatar1.png")
    },
    {
        id: 2,
        name: "Lugia",
        type: "Psychic/Flying-Type",
        moves: "Psychic, Ghost Ball, Fly, Peck",
        avatar: require("./images/avatar2.jpeg")
    },
    {
        id: 3,
        name: "Entei",
        type: "Fire-Type",
        moves: "Flamethrower, Roar, Seismic Slam, Fire Blast",
        avatar: require("./images/avatar3.jpeg")
    },
    {
        id: 4,
        name: "Raikou",
        type: "Electric-Type",
        moves: "Electric Ball, Agility, Crunch, Thunder Fang",
        avatar: require("./images/avatar4.jpeg")
    },
    {
        id: 5,
        name: "Suicune",
        type: "Water-Type",
        moves: "Surf, Hydro Pump, Belly Drum, Rain Dance",
        avatar: require("./images/avatar5.jpeg")
    }
]







export const info = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]









const Pokemon1 = require('./images/pokemon1.jpg')
const Pokemon2 = require('./images/pokemon2.jpeg')
const Pokemon3 = require('./images/pokemon3.jpg')
const Pokemon4 = require('./images/pokemon4.jpeg')
const Pokemon5 = require('./images/pokemon5.jpeg')
const Pokemon6 = require('./images/pokemon6.jpeg')


export const gallery = [
    {
        id: 1,
        image: Pokemon1,
        name: 'Celebi',
        job: 'Psychic/Grass-Type',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Pokemon2,
        name: 'Mew',
        type: 'Psychic/Fairy-Type',
        info: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Pokemon3,
        name: 'MewTwo',
        type: 'Psychic-Type',
        info: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Pokemon4,
        name: 'Moltres',
        type: 'Fire-Type',
        info: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Pokemon5,
        name: 'Articuno',
        type: 'Water/Ice-Type',
        info: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Pokemon6,
        name: 'Zapdos',
        type: 'Electric-Type',
        info: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]