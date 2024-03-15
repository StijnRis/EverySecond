<script lang="ts">
    import { base } from "$app/paths";

    export let name: string;
    export let img: string;
</script>

<a href="{base}/{name}" class="link">
    <div class="item">
        <img class="img" src={"img/" + img} alt={name} />
        <p class="text">{name}</p>
    </div>
</a>

<style>
    .item {
        width: 100%;
        height: 350px;
        background-color: var(--highlight-background);
        border-radius: var(--border-radius);

        box-sizing: border-box;
        padding: 10px;

        position: relative;

        text-align: center;
    }

    .img {
        text-align: center;
        margin: 10px;
        height: 60%;
        width: 80%;
        object-fit: contain;
    }

    .link {
        color: var(--text);
        text-decoration: none;
    }

    .text {
        text-align: center;
        font-size: 1.4rem;
    }
</style>
