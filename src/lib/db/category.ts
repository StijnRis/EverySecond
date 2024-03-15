import fs from "fs";

export type Category = {
    name: string;
    img: string;
    items: {
        name: string;
        img: string;
        source: string;
        speed: number;
    }[];
};

export function getAllCategories() {
    const data: Category[] = JSON.parse(
        fs.readFileSync("static/data.json", "utf8")
    );
    return data;
}

export function getCategoryByName(name: string) {
    const data: Category[] = JSON.parse(
        fs.readFileSync("static/data.json", "utf8")
    );
    for (const category of data) {
        if (category.name === name) {
            return category;
        }
    }
    throw new Error(`Name ${name} not found as category`);
}
