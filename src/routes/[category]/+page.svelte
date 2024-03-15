<script lang="ts">
    import Item from "./Item.svelte";

    export let data;

    let start = Date.now();
    let now = Date.now();
    let text = "";

    function updateTimer() {
        now = Date.now();

        const elapsedTimeInSeconds = (now - start) / 1000;
        const hours = Math.floor(elapsedTimeInSeconds / 60 / 60);
        const hoursText = hours === 1 ? `${hours} hour` : `${hours} hours`;
        const minutes = Math.floor(elapsedTimeInSeconds / 60);
        const minutesText =
            minutes === 1 ? `${minutes} minute` : `${minutes} minutes`;
        const seconds = Math.floor(elapsedTimeInSeconds % 60);
        const secondsText =
            seconds === 1 ? `${seconds} second` : `${seconds} seconds`;
        if (hours != 0) {
            text = `It has been ${hoursText}, ${minutesText} and ${secondsText}`;
        } else if (hours != 0) {
            text = `It has been ${minutesText} and ${secondsText}`;
        } else {
            text = `It has been ${secondsText}`;
        }
    }

    setInterval(updateTimer, 0);
</script>

<div class="title"><h1>Every second: {data.category.name}</h1></div>
<div class="time"><p>{text}</p></div>
<div class="items">
    {#each data.category.items as item}
        <Item {...item} timePassed={now - start}></Item>
    {/each}
</div>

<style>
    .title {
        text-align: center;
        font-size: 1.4rem;
    }

    .time {
        width: 100%;
        height: 80px;
        background-color: var(--subtle);
        border-radius: var(--border-radius);

        display: flex;
        justify-content: center;
        align-items: center;

        position: sticky;
        top: 0px;
        z-index: 1;
    }

    .time > p {
        color: white;
        font-size: 1.5rem;
    }

    .items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 10px;

        margin: 10px 0px;
    }
</style>
