<script>
    import Nav from "./Nav.svelte";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div id="content">
    <Nav></Nav>
    <div id="wrapper">
        <slot />
    </div>
</div>

<style>
    :root {
        --background: #fbfef9;
        --highlight-background: #dfe3dd;
        --text: #191923;
        --highlight-text: #313142;
        --subtle: #4c4c5b;
        --error: #ff331f;
        --border-radius: 3px;
    }

    #content {
        height: calc(100vh - 56px);

        overflow-x: clip;

        color: var(--text);

        font-family: Poppins, serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    #wrapper {
        max-width: 1000px;
        margin: auto;
        padding: 20px 10px;
    }
</style>
