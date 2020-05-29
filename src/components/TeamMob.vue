<template>
    <div class="team">
        <div class="cross">
            <a href="">&times;</a>
        </div>
        <div class="team__body">
            <div class="team__title">команда</div>

            <div class="team__cards">
                <div class="team__cards-item">
                    <div class="team__cards-info">
                        <div class="team__cards-photo">
                            <img src="../photo/makagonov2.png" alt="">
                        </div>
                        <div class="team__cards-text">
                            <div class="team__cards-name">макагонов иван</div>
                            <div class="team__cards-role">Капитан мужской сборной</div>
                        </div>
                    </div>
                    <div class="team__cards-numbers">
                        <div class="years">23<br><span>возраст</span></div>
                        <div class="height">185<br><span>рост</span></div>
                        <div class="weight">85<br><span>вес</span></div>
                    </div>
                    <div class="team__cards-bio">Биография</div>
                    <div class="team__cards-bio-text">Любимое пиво "ОХОТА КРЕПКОЕ"</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Team",
        data() {
            return {
                active: false,
            }
        }
    }
</script>

<style scoped lang="scss">


    @media (max-width: 1023px) {

        .team {
            font-family: 'Roboto', sans-serif;
            margin-top: 85px;

            &__title {
                padding: 40px 0 5px 0;
                text-align: center;
                font-size: 24px;
                font-weight: 700;
                text-transform: uppercase;
                color: #414E7E;
            }

            &__cards {

                &-item {
                    text-align: center;
                    margin: 0 auto 20px auto;
                    width: 100%;
                    max-width: 400px;

                }

                &-info {
                    position: relative;
                }

                &-text {
                    font-family: 'Exo 2', sans-serif;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    background: #414E7E;
                    width: 100%;

                }

                &-name {
                    font-size: 24px;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: #fff;
                }

                &-role {
                    color: #60AEE8;
                    font-size: 20px;
                }

                &-numbers {
                    display: flex;
                    justify-content: center;
                    font-size: 48px;
                    color: #414E7E;
                    line-height: 0.8em;
                    margin: 20px 0;
                    text-transform: uppercase;

                    & div:nth-child(2) {
                        margin: 0 15%;
                    }

                    & span {
                        color: #60AEE8;
                        font-size: 18px;
                    }
                }

                &-bio {
                    text-align: left;
                    width: 90%;
                    margin: 0 auto 20px auto;
                    font-weight: 700;
                    font-size: 16px;
                }

                &-bio-text {
                    font-size: 14px;
                    width: 90%;
                    text-align: left;
                    margin: 0 auto 70px auto;
                }
            }
        }
    }
    .cross{
        position: absolute;
        right: 25px;
        top: 80px;
        font-size: 28px;
        & a{
            text-decoration: none;
            color: #000;
        }
    }

</style>