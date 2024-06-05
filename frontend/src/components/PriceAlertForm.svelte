<script>
  export let onSubmit;

  let priceThreshold = 0;
  let alertFrequency = 'daily';
  let communicationChannel = 'email';

  const submitForm = () => {
    onSubmit({ priceThreshold, alertFrequency, communicationChannel });
  };
</script>

<form on:submit|preventDefault={submitForm}>
  <label>
    Price Threshold:
    <input type="number" bind:value={priceThreshold} min="0" />
  </label>

  <label>
    Alert Frequency:
    <select bind:value={alertFrequency}>
      <option value="instant">Instant</option>
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
    </select>
  </label>

  <label>
    Communication Channel:
    <select bind:value={communicationChannel}>
      <option value="email">Email</option>
      <option value="push">Push Notification</option>
    </select>
  </label>

  <button type="submit">Set Alert</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 10px;
  }

  button {
    margin-top: 10px;
  }
</style>
