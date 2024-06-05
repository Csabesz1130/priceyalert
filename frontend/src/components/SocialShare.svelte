<script>
  export let url = '';
  export let text = '';

  const share = async () => {
    try {
      await navigator.share({ title: 'Check this out!', text, url });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
</script>

<button on:click={share}>Share</button>

<style>
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
