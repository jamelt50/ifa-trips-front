<template >
<c-container classes="bg-white">
  <div class="flex flex-col justify-center items-center  py-14 px-6 text-blue">
    <div class="md:flex justify-center items-center mb-6">
      <div class="md:w-1/3 md:mx-3">
        <img class="mb-6" src="/coin.svg" alt="icone pieces" />
        <h2 class="text-2xl font-bold mb-6">Vos trajets préférés à petits prix</h2>
        <p>
          Où que vous alliez, en bus ou en covoiturage, trouvez le trajet idéal
          parmi notre large choix de destinations à petits prix.
        </p>
      </div>
      <div class="md:w-1/3 md:mx-3">
        <img class="mb-6" src="/earth.svg" alt="icone terre" />
        <h2 class="text-2xl font-bold mb-6">Meilleur pour la planète</h2>
        <p>
          Le covoiturage réduit le nombre de voitures sur nos routes et
          contribue donc à diminuer l'émission de gaz nocifs à effet de serre et
          à protéger l'environnement.
        </p>
      </div>
    </div>
    <c-button classes="px-6 py-1 rounded-2xl" color="blue">Proposer Votre Trajet</c-button>
  </div>
</c-container>
</template>

<script>
export default {}
</script>

<style>
</style>