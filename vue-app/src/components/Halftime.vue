<template>
    <main>
        <div class="container">
            <h4>Halftime</h4>
            <div class="body">
                <section class="name">{{scoreBoardData.nameHome}}</section>
                <section class="score">
                    <div>{{scoreBoardData.scoreHome}}</div>
                    <div>:</div>
                    <div>{{scoreBoardData.scoreGuest}}</div>
                </section>
                <section class="name">{{scoreBoardData.nameGuest}}</section>
            </div>
        </div>
    </main>
</template>

<script>
    import { mapState } from 'vuex'

    export default {

        name: "Halftime",
        computed: {
            ...mapState(['socket','scoreBoardData'])
        }
    }
</script>

<style lang="scss" scoped>
    main {
        width: 100%;
        height: 100%;
        position: relative;

        .container {
            padding: 15px;
            width: 650px;
            height: 125px;
            background-color: #2c3e50;

            position: absolute;
            bottom: 50px;
            left: 0;
            right: 0;
            margin: 0 auto;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            font-size: 2rem;
            color: white;

            .body {
                width: 100%;
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
            }
            .score {
                display: flex;
                align-items: center;

            }

            .name {
                font-weight: bold;
            }
        }
    }

</style>