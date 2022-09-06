<template >
<c-container classes="bg-blue">
  <div
    class="flex flex-col justify-center items-center  py-28 text-white text-center"
  >
    <div class="flex justify-center items-center mb-6 w-full">
      <div class="md:w-2/3 mx-3">
        <h3 class="text-3xl md:text-6xl text-center mb-6 font-bold">Joignez l’aventure</h3>
        <p>
          Rejoignez nous dans l’aventure, nous avons hate de voyager avec vous !
        </p>
      </div>
    </div>
    <div>
      <c-button to='/connexion' color="orange" class="w-full md:w-auto md:mx-2 my-2">Se Connecter</c-button>
      <c-button to='/inscription' color="white" class="w-full md:w-auto md:mx-2 my-2">S’inscrire</c-button>
    </div>
  </div>
</c-container>
</template>

<script>
export default {}
</script>

<style>
</style>