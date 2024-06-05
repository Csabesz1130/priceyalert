<script>
  export let width = '100%';
  export let height = '20px';
</script>

<div class="skeleton" style="width: {width}; height: {height};"></div>

<style>
  .skeleton {
    background-color: #e0e0e0;
    border-radius: 4px;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
</style>
