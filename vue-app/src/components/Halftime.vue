<template>
    <main>
        <div class="container">

            <div class="body-left">

                <div class="logo">

                </div>
            </div>
            <div class="body-right">
                <h4>HALBZEIT</h4>
                <section>
                    <div class="name">{{scoreBoardData.longNameHome}}</div>
                    <div class="score">{{scoreBoardData.scoreHome}}</div>
                </section>
                <section>
                    <div class="name">{{scoreBoardData.longNameGuest}}</div>
                    <div class="score">{{scoreBoardData.scoreGuest}}</div>
                </section>
            </div>
                <!--<section class="name"></section>-->
                <!--<section class="score">-->
                    <!--<div></div>-->
                    <!--<div>:</div>-->
                    <!--<div></div>-->
                <!--</section>-->
                <!--<section class="name"></section>-->

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

        .container {
            padding: 10px 15px;
            width: 700px;
            height: 120px;
            background-color: #801f66;
            border-radius: 30px;

            -webkit-box-shadow: 0px 11px 5px -6px rgba(0,0,0,0.4);
            -moz-box-shadow: 0px 11px 5px -6px rgba(0,0,0,0.4);
            box-shadow: 0px 11px 5px -6px rgba(0,0,0,0.4);

            position: absolute;
            bottom: 50px;
            left: 0;
            right: 0;
            margin: 0 auto;

            display: flex;
            align-items: center;
            justify-content: space-between;

            font-size: 1.5rem;
            font-weight: bold;
            color: white;

            .body-left {
                width: 200px;
                height: 100%;

                display: flex;
                align-items: center;
                justify-content: center;

                .logo {
                    width: 80px;
                    height: 80px;
                    background-color: aquamarine;
                }
            }

            .body-right {
                padding: 0 25px;
                width: 100%;
                height: 100%;

                display: flex;
                flex-direction: column;
                justify-content: space-between;

                h4 {
                    font-size: 1.75rem;
                    margin-bottom: 10px;
                }
                section {
                    margin: 3px;
                    width: 100%;
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            }
        }
    }

</style>
