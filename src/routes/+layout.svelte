<header>
    <a href="/">
        <img id="logo" src="/images/logo.svg" alt="Logo">
    </a>
</header>

<main class="container">
    <slot></slot>
</main>

<style>
    img#logo {
        height: 4rem;
    }
    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 1rem;
    }
</style>