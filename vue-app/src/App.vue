<template>
    <main>
        <router-view/>

        <router-link to="/scoreboard">Scoreboard</router-link> |
        <router-link to="/halftime">Halftime</router-link> |
        <router-link to="/all">All</router-link>
    </main>
</template>

<style lang="scss" scoped>
@import "../node_modules/reset-css/reset.css";
main {
    width: 100%;
    height: 75%;
    font-family: sans-serif;
}
</style>
