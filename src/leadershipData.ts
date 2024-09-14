export interface LeadershipData {
    [name: string]: LeadershipRecord;
}

export interface LeadershipRecord {
    title: string;
    linkedin?: string;
    email?: string;
    year?: string;
    major?: string;
}

export default function getLeadershipData(name: string): LeadershipRecord {
    let record = leadershipData[name];

    if (!record) throw new Error();

    // Check if email contains last name
    let lastName = name.split(' ').at(-1)?.toLowerCase();
    if (lastName) {
        if (record.email) {
            if (!record.email.toLowerCase().includes(lastName)) {
                throw new Error(name);
            }
        }
    }

    return record;
}

const leadershipData: LeadershipData = {
    /*
     * Admin/Exec Board
     */

    "Hana Winchester": {
        title: "Sponsorship Chair",
        linkedin: "https://www.linkedin.com/in/hana-winchester-988282258/",
        email: "winchester.36@osu.edu",
        year: "Sophomore",
        major: "Computer Science & Engineering"
    },
    "Marc Chow": {
        title: "Business Operations Director",
        linkedin: "https://www.linkedin.com/in/marcchow2/",
        email: "chow.205@osu.edu",
    },

    /*
     * NASA
     */

    "Matthew Heinzman": {
        title: "NASA Project Manager",
        linkedin: "https://www.linkedin.com/in/heinzmanm/",
        email: "heinzman.6@osu.edu",
    },
    "Abby Atchley":
    {
        title: "NASA Deputy Project Manager",
        linkedin: "https://www.linkedin.com/in/abby-atchley-990831252/",
        email: "atchley.23@osu.edu",
    },
    "Nisha Kumar": {
        title: "NASA Deputy Project Manager",
        linkedin: "https://www.linkedin.com/in/nisha-v-kumar/",
        email: "kumar.941@osu.edu",
    },
    "Kennedy Swyers": {
        title: "NASA Structures Lead",
        email: "swyers.11@osu.edu",
        linkedin: "https://www.linkedin.com/in/kennedy-swyers-55459723a/"
    },
    "Sahil Sura": {
        title: "NASA Flight Systems Lead",
        linkedin: "https://www.linkedin.com/in/sahil-sura/",
        email: "sura.18@osu.edu",
    },
    "Brady Wilson": {
        title: "NASA Aerodynamics Lead",
    },
    "Dominick Delpico": {
        title: "NASA Payload Lead",
        linkedin: "https://www.linkedin.com/in/dominickdelpico/",
        email: "delpico.57@osu.edu",
    },
    "Sai Vidyud Senthil Nathan": {
        title: "NASA Co-Payload Lead",
        linkedin: "https://www.linkedin.com/in/sai-vidyud-senthil-nathan-b9a46a214/",
        email: "senthilnathan.11@osu.edu",
    },

    /*
     * SPACEPORT
     */

    "Cameron Burford": {
        title: "Spaceport Project Manager",
        linkedin: "https://www.linkedin.com/in/cameron-burford/",
    },
    "Rahul Srinivas": {
        title: "Spaceport Deputy Project Manager",
        linkedin: "https://www.linkedin.com/in/rahul-srinivas-501sw/",
        email: "srinivas.45@osu.edu",
    },
    "Liam Juhas": {
        title: "Spaceport Structures Lead",
        linkedin: "https://www.linkedin.com/in/liam-juhas-a14567267/",
        email: "juhas.9@osu.edu",
    },
    "Toby Simpson": {
        title: "Spaceport Avionics Lead",
        email: "simpson.900@osu.edu",
    },
    "Jackson Nicley": {
        title: "Spaceport Aerodynamics Lead",
        linkedin: "https://www.linkedin.com/in/jackson-nicley/",
        email: "nicley.6@osu.edu",
    },
    "Calvin Beall": {
        title: "Spaceport Recovery Lead",
        linkedin: "https://www.linkedin.com/in/calvin-beall-a10128261/",
        email: "beall.67@osu.edu",
    },
    "Hanshu Kotta": {
        title: "Spaceport Payload Lead",
        linkedin: "https://www.linkedin.com/in/hanshu-kotta-73a979235/",
        email: "kotta.4@osu.edu",
    },
    "Matthew Geiger": {
        title: "Spaceport Propulsion Lead",
        linkedin: "https://www.linkedin.com/in/mdg25/",
    },

    /*
     * LIQUIDS
     */

    "Zach Campbell": {
        title: "Liquids Project Manager",
        linkedin: "https://www.linkedin.com/in/zach-campbell-8bb08b244/",
    },
    "Miguel Abando": {
        title: "Liquids Deputy Project Manager",
        linkedin: "https://www.linkedin.com/in/miguel-antonio-abando-593533252/",
    },
    "Thomas Yu": {
        title: "Liquids Propulsion Lead",
        linkedin: "https://www.linkedin.com/in/thomas-yu-0b8b5a28a/",
    },
    "Zafar Shaik": {
        title: "Liquids Fluids Lead",
        linkedin: "https://www.linkedin.com/in/zafarshaik/",
        email: "shaik.27@osu.edu",
    },
    "Julian Hooks": {
        title: "Liquids Electronics Lead",
        linkedin: "https://www.linkedin.com/in/julian-hooks-56912b291/",
        email: "hooks.82@osu.edu",
    },
    "Ray Saracene": {
        title: "Liquids Test Director",
        email: "saracene.1@osu.edu",
    },
}
