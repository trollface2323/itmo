<template>

    <div class="main">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@700&family=Roboto:wght@300;500;600;700;900&display=swap"
                  rel="stylesheet">


        </head>

        <section class="footer">
            <!--            <div class="container">-->
            <div class="footer__social">
                <a href="" class="footer__social-link"><i class="fab fa-vk"></i></a>
                <a href="" class="footer__social-link"><i class="fab fa-facebook-f"></i></a>
                <a href="" class="footer__social-link"><i class="fab fa-instagram"></i></a>
                <a href="" class="footer__social-link"><i class="fab fa-youtube"></i></a>
                <a href="" class="footer__social-link"><i class="fab fa-telegram-plane"></i></a>
                <a href="" class="footer__social-link"><i class="far fa-envelope"></i></a>
            </div>
            <div class="footer__body">
                <div class="container">
                    <div class="footer__block-1">
                        <div class="footer__block-1-title">Контакты</div>
                        <div class="footer__block-1-sub-title">
                            <div class="footer__block-1-sub-title-1">Офис:</div>
                        </div>
                        <div class="footer__block-1-info">
                            <div class="footer__block-1-info-1">
                                г. Санкт-Петербург<br> ул. Ломоносова, 9; к. 4402
                            </div>

                        </div>
                    </div>
                    <div class="footer__block-2">
                        <div class="footer__block-2-sub-title-1"><span style="white-space: nowrap">Тренировочная база:</span></div>
                        <div class="footer__block-2-info-1">г. Санкт-Петербург<br> Северная дорога, 25</div>

                    </div>
                    <div class="footer__block-3">
                        <div class="footer__block-3-info">+7 (923) 546-43-21 info@iurc.com</div>

                    </div>
                    <div class="footer__block-4">
                        <div class="footer__block-4-title">Хочу вступить</div>
                        <div class="footer__block-4-sub-title">Оставь свои контакты</div>
                        <div class="footer__block-4-info">
                            <div class="footer__block-4-info-1"><input type="text"></div>
                            <div class="footer__block-4-info-2"><i class="fas fa-angle-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <!--    </div>-->


        </section>

    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {}
    }
</script>

<style scoped lang="scss">

    .container {
        display: flex;
        justify-content: space-between;

    }

    .footer {
        height: 240px;

        &__social {
            display: none;
        }

        &__body {

            background: #414E7E;
            display: flex;
            /*justify-content: space-between;*/
            padding: 30px 0 0 0%;

        }

        &__block-1 {
            /*width: 50%;*/

            &-title {
                color: #fff;
                font-size: 24px;
                font-weight: 600;

            }

            &-sub-title {

                /*display: flex;*/
                padding-top: 25px;
                color: #60AEE8;
                font-size: 18px;
                font-weight: 600;
                /*flex: 0 0 px;*/

                &-1 {
                    /*width: 200px;*/
                    /*margin-right: 30%;*/
                }

                &-2 {
                    /*width: 180px;*/
                }
            }

            &-info {
                /*display: flex;*/
                padding: 20px 0 40px 0;
                font-size: 16px;
                color: #fff;
                font-weight: 500;


                &-1 {
                    width: 200px;
                    /*margin-right: 30%;*/
                }
            }
        }

        &__block-2 {

            &-sub-title-1 {

                /*display: flex;*/
                padding-top: 60px;
                color: #60AEE8;
                font-size: 18px;
                font-weight: 600;
                /*flex: 0 0 px;*/
            }

            &-info-1{
                /*display: flex;*/
                padding: 20px 0 40px 0;
                font-size: 16px;
                color: #fff;
                font-weight: 500;
            }
        }


        &__block-3 {
            align-self: flex-end;
            padding: 0 0 40px 0;
            flex: 0 1 140px;
            margin-right: 5%;
            margin-left: 0%;

            &-info {

                font-size: 16px;
                color: #fff;
                font-weight: 500;
            }
        }

        &__block-4 {
            &-title {

                color: #fff;
                font-size: 24px;
                font-weight: 600;

            }

            &-sub-title {
                padding-top: 20px;
                color: #60AEE8;
                font-size: 18px;
                font-weight: 600;
            }

            &-info {
                display: flex;
                padding-top: 30px;
                font-size: 16px;
                color: #fff;
                font-weight: 500;

                input {
                    border-radius: 10px;
                    height: 30px;
                }

                &-2 {
                    margin-left: 15px;
                    font-size: 24px;
                    margin-top: -3px;
                }
            }
        }

    }

    @media (max-width: 1023px) {

        .container{
            flex-wrap: wrap;
            justify-content:normal;
        }

        .footer {
            &__body {

            }

            &__social {
                display: block;
                background: #414E7E;
                text-align: center;
                padding-top: 30px;


                &-link {
                    margin: 0 16px;
                    font-size: 22px;
                    color: #fff;
                }
            }

            &__block-1 {
                order: 1;
                width: 40%;
                &-title {
                    font-size: 18px;
                }

                &-sub-title {
                    font-size: 14px;

                    &-1 {
                        /*margin-right: 10%;*/
                    }
                }

                &-info {
                    font-size: 12px;

                    &-1 {
                        max-width: 100%;
                    }
                }
            }

            &__block-2 {
                order: 2;
                width: 40%;
                margin-left: 10%;

                &-sub-title-1 {
                    padding-top: 50px;
                    font-size: 14px;
                }

                &-info-1 {
                    /*margin-left: 10%;*/
                    font-size: 12px;
                }
            }

            &__block-3 {
                width: 100%;
                order: 4;
                &-title {
                    font-size: 18px;
                }

                &-sub-title {
                    font-size: 14px;
                }

                &-info {
                    padding-top: 10px;
                    font-size: 12px;
                }
            }
            &__block-4 {
                width: 100%;
                order: 3;
                &-title {
                    font-size: 18px;
                }

                &-sub-title {
                    padding-top: 0;
                    font-size: 14px;
                }

                &-info {
                    padding-top: 5px;
                    font-size: 12px;
                    & input{
                        width: 270px;
                    }
                    & svg{
                        margin-left: -10px;
                    }
                }
            }
        }
    }

    .r {
        outline: red 2px solid;
    }

</style>



