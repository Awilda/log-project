<template>
  <div class="container">
    <div>
      <h1 style="font-family:ubuntu">Pia's Books</h1>
        <toggle-button :labels="{checked: 'Yes', unchecked: 'No'}" style="margin-left: 20px" /> 
    </div>
  </div>
</template>
  
<script>
export default {
  data(){
    return {
      file: ''
    }
  },
}

</script>