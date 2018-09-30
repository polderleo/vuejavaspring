<template>
    <main>
        <!-- TODO annimate add to class => animated infinite zoomOutUp-->
        <transition name="fade">
          <div v-if="show" class="container">
            <section class="time">
                <div class="time">{{time}}</div>
            </section>
            <section class="name">{{scoreBoardData.nameHome}}</section>
            <section class="score">
                <div class="">{{scoreBoardData.scoreHome}}</div>
                <div class=""> - </div>
                <div class="">{{scoreBoardData.scoreGuest}}</div>
            </section>
            <section class="name">{{scoreBoardData.nameGuest}}</section>

            <div class="penalty-container">
                <section class="penalty-home">
                    <div class="penalty">
                        02:00
                    </div>
                    <div class="penalty">
                        02:00
                    </div>
                    <div class="penalty">
                        02:00
                    </div>
                </section>
                <section class="penalty-guest">
                    <div class="penalty">
                        02:00
                    </div>
                    <div class="penalty">
                        02:00
                    </div>
                    <div class="penalty">
                        02:00
                    </div>
                </section>
            </div>
        </div>
        </transition>
        <div class="annimation">
          <button v-on:click="show = !show" type="button" name="button">annimate scoreBoard</button>
        </div>
    </main>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "Scoreboard",
        data() {
            return {
                time: '12:42',
                show: true
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
        width: 100%;
        height: 50%;
        padding: 25px;

        display: flex;
        align-items: space-between;
        .container {
            width: 400px;
            height: 50px;

            position:  relative;

            background-color: #801f66;
            border-radius: 60px;
            padding: 0 25px 0 0;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .time {
                padding: 3px 10px;
                font-size: 1.5rem;
                background-color: white;
                border-radius: 12px;

                font-weight: bold;
                color: #801f66;

            }

            .name {
                font-size: 1.5rem;
                font-weight: bold;
                color: white;
            }

            .score {
                width: 75px;
                font-size: 1.5rem;
                color: white;
                font-weight: bold;

                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }

        .penalty-container {
            width: 260px;

            position: absolute;
            top: 50px;
            right: 30px;

            display: flex;

            section {
                flex: 1;

                display: flex;
                flex-direction: column;
            }

            .penalty-home {
                align-items: flex-start;
            }

            .penalty-guest {
                align-items: flex-end;
            }

            .penalty {
                width: 80px;
                height: 40px;

                margin: 5px 0;

                background-color: #801f66;
                border-radius: 15px;

                font-size: 1.25rem;
                color: white;
                font-weight: bold;

                display: flex;
                align-items: center;
                justify-content: center;
            }

        }
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }

</style>
