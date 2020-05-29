<template>
    <div class="team">
        <div class="team__body">
            <div class="team__title">команда</div>
            <div class="team__section">
                <a href="" class="team__section-link">тренерский штаб</a>
                <a href="" class="team__section-link">рулевые</a>
                <a href="" class="team__section-link">мужская сборная</a>
                <a href="" class="team__section-link">женская сборная</a>
            </div>
            <div class="team__cards">
                <div class="team__cards-item">
                    <a href="#exampleModal" data-toggle="modal">
                        <div class="team__cards-photo">
                            <img src="../photo/makagonov2.png" alt="">
                        </div>
                        <div class="team__cards-name">макагонов иван александрович</div>
                    </a>
                </div>
                <div class="team__cards-item">
                    <div class="team__cards-photo">
                        <img src="../photo/kalash2.png" alt="">
                    </div>
                    <div class="team__cards-name">калашников иван геннадьевич</div>
                </div>
                <div class="team__cards-item">
                    <div class="team__cards-photo">
                        <img src="../photo/kopyt2.png" alt="">
                    </div>
                    <div class="team__cards-name">копыть алексей максимович</div>
                </div>
                <div class="team__cards-item">
                    <div class="team__cards-photo">
                        <img src="../photo/kopyt2.png" alt="">
                    </div>
                    <div class="team__cards-name">копыть алексей максимович</div>
                </div>
                <div class="team__cards-item">
                    <div class="team__cards-photo">
                        <img src="../photo/kopyt2.png" alt="">
                    </div>
                    <div class="team__cards-name">копыть алексей максимович</div>
                </div>


            </div>
        </div>
<!--todo узнать шиирну экрана через JS-->
        <div class="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">

                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="modal-photo">
                            <img src="../photo/makagonov2.png" alt="">
                        </div>
                        <div class="modal-info">
                            <div class="modal-name">макагонов иван</div>
                            <div class="modal-role">Капитан мужской сборной</div>
                            <div class="modal-numbers">
                                <div class="years">23<br><span>возраст</span></div>
                                <div class="height">185<br><span>рост</span></div>
                                <div class="weight">85<br><span>вес</span></div>
                            </div>
                            <div class="modal-bio">Любимое пиво: "ОХОТА КРЕПКОЕ"</div>

                        </div>
                    </div>
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

    .team {
        font-family: 'Roboto', sans-serif;
        margin-top: 105px;

        &__body {
            margin: 0 auto;
            padding: 0 7.5%;
        }

        &__title {
            text-transform: uppercase;
            color: #262E4A;
            font-weight: 700;
            font-size: 48px;
            padding: 90px 0 25px 0;
        }

        &__section {
            font-weight: 500;
            text-transform: uppercase;
            font-size: 24px;
            margin-bottom: 30px;

            &-link {
                position: relative;
                margin-right: 10px;
                padding-right: 10px;

                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 4px;
                    height: 30px;
                    background: #414E7E;

                }

                &:last-child {
                    &:after {
                        background: #fff;
                    }
                }
            }

            & a {
                text-decoration: none;
                color: #262E4A;

            }
        }

        &__cards {
            display: flex;
            flex-wrap: wrap;
            position: relative;
            margin-bottom: 40px;

            &-item {
                position: relative;
                width: 22%;
                margin: 0 2% 80px 0;

                & img {
                    width: 100%;
                }

                &:last-child {
                    margin-right: 0;
                }
            }

            &-name {
                font-family: "Exo 2",sans-serif;
                position: absolute;
                bottom: 0;
                left: 0;
                background: #414E7E;
                font-size: 18px;
                text-transform: uppercase;
                color: #fff;
                padding: 0 20px;
                font-weight: 700;
                width: 100%;
            }
        }
    }

    .modal {
        &-body{
            display: flex;
            & button{
                position: absolute;
                right: 20px;
                font-size: 34px;
            }

        }
        &-info {
            padding: 40px 0 0 40px;
        }

        &-name {
            color: #414E7E;
            font-size: 46px;
            font-weight: 700;
            text-transform: capitalize;

        }

        &-role {
            color: #60AEE8;
            font-size: 24px;
            margin-bottom: 30px;
        }

        &-numbers {
            display: flex;
            text-align: center;
            line-height: 0.8em;
            font-size: 48px;
            color: #414E7E;
            font-weight: 500;
            margin-bottom: 30px;

            & div{
                margin-right: 30px;
            }
            & span{
                color: #60AEE8;
                text-transform: uppercase;
                font-size: 18px;
            }
        }
    }

    @media (max-width: 1180px) {

        .team__cards-name {
            font-size: 14px;
        }

    }

    @media (max-width: 1023px) {

        .team{
            margin-top: 85px;
            &__title{
                padding: 40px 0 5px 0;
                text-align: center;
                font-size: 24px;
            }
            &__section{
                font-size: 14px;
                white-space: nowrap;
                overflow-x: scroll;
            }
            &__cards{
                display: block;
                &-item{
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
                    margin: 0 auto 20px auto;
                    width: 100%;
                    max-width: 400px;
                    &:last-child{
                        margin: 0 auto;
                    }
                }
            }
        }

    }


</style>