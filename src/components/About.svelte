<script>
// Logica
    let someText = `Frontend Developer at Home`;
    let count = 0;
    function handleClick() {
        count += 1
    }

</script>

<style>
    .about{
        font-size: 3rem;
        color:  var(--theme-color);
    }
</style>

<div class="about">
<p>{someText}</p>
<button on:click={handleClick} >Sumar {count === 0 ? '' : count}</button>
</div>