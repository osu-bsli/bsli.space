// @ts-ignore TSC doesn't know that we have a Vite plugin for csv
import staffData from "./staffData.csv";



export interface StaffData {
    [name: string]: StaffRecord;
}

export interface StaffRecord {
    title: string;
    linkedin?: string;
    email?: string;
    year?: string;
    major?: string;
}

export type LeadershipPageLayout = Array<{
    section: string;
    sectionShort: string,
    sectionId: string,
    staff: string[],
}>;

export function staffRecordExists(name: string): boolean {
    return staffData.find(e => e["name"] == name);
}

export default function getStaffRecord(name: string): StaffRecord {
    let record = staffData.find(e => e["name"] == name);

    if (!record) throw new Error("No staff record found for " + name);

    return record;
}

export const leadershipPageLayout: LeadershipPageLayout = [
    {
        section: "Executive Board",
        sectionShort: "Exec. Board",
        sectionId: "exec-board",
        staff: [
            "Lauren Clar",
            "Elhan Majed",
            "Alex Echanove",
            "Vacant Communications Director",
            "Youssef Erraki",
            "Marc Chow",
        ]
    },

    {
        section: "Admin Team",
        sectionShort: "Admin Team",
        sectionId: "admin-team",
        staff: [
            "Waleed Chaudhary",
            "Junchen Wu",
            "Hana Winchester",
            "Grayson Ullman",
            "Anastasia Anikina",
            "Brian Jia",
        ]
    },

    {
        section: "NASA Student Launch Team",
        sectionShort: "NASA SL",
        sectionId: "nasa-sl",
        staff: [
            "Matthew Heinzman",
            "Abby Atchley",
            "Nisha Kumar",
            "Kennedy Swyers",
            "Sahil Sura",
            "Brady Wilson",
            "Dominick Delpico",
            "Sai Vidyud Senthil Nathan",
        ]
    },

    {
        section: "Spaceport America Cup Team",
        sectionShort: "Spaceport",
        sectionId: "spaceport",
        staff: [
            "Cameron Burford",
            "Rahul Srinivas",
            "Liam Juhas",
            "Toby Simpson",
            "Jackson Nicley",
            "Calvin Beall",
            "Hanshu Kotta",
            "Matthew Geiger",
        ]
    },

    {
        section: "Liquids Team",
        sectionShort: "Liquids",
        sectionId: "liquids",
        staff: [
            "Zach Campbell",
            "Miguel Abando",
            "Thomas Yu",
            "Zafar Shaik",
            "Julian Hooks",
            "Ray Saracene",
        ]
    }
];
