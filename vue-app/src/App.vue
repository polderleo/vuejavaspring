<template>
    <main>
        <router-link to="/scoreboard">Scoreboard</router-link> |
        <router-link to="/halftime">Halftime</router-link> |
        <router-link to="/all">All</router-link>
        <router-view/>
    </main>
</template>

<style lang="scss" scoped>
main {
    width: 100%;
    height: 100%;
    font-family: sans-serif;
}
</style>
