<script lang="ts">
    import Category from "./Category.svelte";

    export let data;
</script>

<div id="categories">
    {#each data.categories as category}
        <Category name={category.name} img={category.img}></Category>
    {/each}
</div>

<style>
    #categories {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 10px;

        margin: 10px 0px;
    }
</style>
