<template>
    <main>
        <Halftime/>
        <Scoreboard/>
    </main>
</template>

<script>
    import Halftime from '../components/Halftime.vue'
    import Scoreboard from "../components/Scoreboard";
    export default {
        name: "all",
        components: {Scoreboard, Halftime},
    }
</script>

<style scoped>


</style>