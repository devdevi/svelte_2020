<script>
// Logica
    let someText = `Frontend Developer at Home`;
    let count = 0;
    function handleClick() {
        count += 1
    }
    let styles = { darkMode: false }

    function toggle() {
        styles.darkMode = !styles.darkMode;
        console.log(styles.darkMode)
        window.document.body.classList.toggle("dark-mode");
    }

</script>

<style>
    .About{
        font-size: 3rem;
        color:  var(--theme-color);
    }
</style>

<div class="About">

{#if !styles.darkMode}

<p>{someText}</p>
{:else}
<p>Antes yo te queria pero ya no</p>
 {/if}
<button on:click={handleClick} >Sumar {count === 0 ? '' : count}</button>
<button on:click={toggle}>Dark-mode</button>
</div>