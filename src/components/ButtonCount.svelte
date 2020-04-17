<script>
import { count } from '../store/store.js';



function handleClick() {
    count.update(n => n + 1)
}

</script>

<style>
button {
    background-color: #f76027;
    color: white;
    border: none;
    border-radius: .5rem;
    padding:  0.5rem;
    text-transform: uppercase;
    cursor: pointer;
}
</style>

<div class="ButtonCount">
<button on:click={handleClick}>
click {$count === 0 ? '': $count}

</button>
</div>