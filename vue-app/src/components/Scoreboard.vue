<template>
    <main>
        <div class="container">
            <section class="time">
                <div class="time">{{time}}</div>
            </section>
            <section class="name">{{scoreBoardData.nameHome}}</section>
            <section class="score">
                <div class="">{{scoreBoardData.scoreHome}}</div>
                <div class="">:</div>
                <div class="">{{scoreBoardData.scoreGuest}}</div>
            </section>
            <section class="name">{{scoreBoardData.nameGuest}}</section>
        </div>
    </main>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "Scoreboard",
        data() {
            return {
                time: '12:42'
            }
        },
        computed: {
            ...mapState(['socket','scoreBoardData'])
        }
    }
</script>

<style lang="scss" scoped>
    main {
        box-sizing: border-box;
        padding: 25px;
        width: 100%;
        height: 100%;
        .container {
            padding: 5px;
            width: 400px;
            height: 50px;
            background-color: #bf27ff;

            display: flex;
            align-items: center;
            justify-content: space-between;

            .time {
                font-size: 2rem;
                background-color: white;
            }

            .name {
                font-size: 2rem;
                font-weight: bold;
            }

            .score {
                display: flex;
                font-size: 2rem;
            }
        }

    }

</style>