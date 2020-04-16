<script>
 let skills = [
     {
         id:1,
         name: 'html'
     },
    {
         id:2,
         name: 'css'
     },
        {
         id:3,
         name: 'JS'
     },
 ]
</script>

<style>
.Skills {
    display: flex;
    align-items: center;
    justify-content: center;
}
ul {
    margin: 0;
    padding: 1rem;
    list-style: none;
}
li{
    display: inline;
    margin-right: .4em;
}
</style>
<div class="Skills">
<h3>Skills</h3>
<ul>
{#each skills as {name}, i}

<li>{name}</li>
{/each}
</ul>


</div>