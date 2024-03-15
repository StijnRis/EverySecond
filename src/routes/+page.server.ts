import { getAllCategories } from "$lib/db/category";

export async function load() {
    const categories = await getAllCategories();

    return {
        categories: categories,
    };
}
