<script>
  export let items = [];
  export let sortKey = '';
  export let filterKey = '';

  let sortedItems = [...items];
  let filterValue = '';

  $: if (sortKey) {
    sortedItems.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
  }

  $: if (filterValue) {
    sortedItems = sortedItems.filter(item => item[filterKey].includes(filterValue));
  }
</script>

<input type="text" bind:value={filterValue} placeholder="Filter items..." />

<ul>
  {#each sortedItems as item}
    <li>{item.name} - ${item.price}</li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 8px;
    border-bottom: 1px solid #ccc;
  }
</style>
