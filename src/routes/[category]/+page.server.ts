import { getCategoryByName } from "$lib/db/category.js";

export async function load({ params }) {
    const categoryName = params.category;
    const category = getCategoryByName(categoryName);

    return {
        category: category,
    };
}
