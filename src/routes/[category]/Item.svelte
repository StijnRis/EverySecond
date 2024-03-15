<script lang="ts">
    export let name: string;
    export let source: string;
    export let img: string;
    export let speed: number;
    export let timePassed: number;

    $: amount = Math.round((speed * timePassed + (speed * Math.random() )) / 1000);

</script>

<svelte:head>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="item">
    <img class="img" src={"img/" + img} alt={name} />
    <p class="text"><scan class="amount">{amount}</scan> {name}</p>
    <a class="source" href={source} target="_blank">Source</a>
</div>

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

    .text {
        text-align: center;
        font-size: 1.4rem;
    }

    .source {
        position: absolute;
        color: var(--text-color);
        text-decoration: none;
        right: 10px;
        bottom: 10px;
    }

    .amount {
        font-family: "Roboto", sans-serif;
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>
