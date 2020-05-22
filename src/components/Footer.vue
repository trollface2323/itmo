<template>

    <div class="main">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@700&family=Roboto:wght@300;500;600;700;900&display=swap"
                  rel="stylesheet">


        </head>

        <section class="footer">
            <div class="footer__social">
                <a href="" class="footer__social-link"><i class="fab fa-vk"></i></a>
                <a href="" class="footer__social-link"><i class="fab fa-facebook-f"></i></a>
                <a href="" class="footer__social-link"><i class="fab fa-instagram"></i></a>
                <a href="" class="footer__social-link"><i class="fab fa-youtube"></i></a>
                <a href="" class="footer__social-link"><i class="fab fa-telegram-plane"></i></a>
                <a href="" class="footer__social-link"><i class="far fa-envelope"></i></a>
            </div>
            <div class="footer__body">
                <div class="footer__block-1">
                    <div class="footer__block-1-title">Контакты</div>
                    <div class="footer__block-1-sub-title">
                        <div class="footer__block-1-sub-title-1">Офис:</div>
                        <div class="footer__block-1-sub-title-2">Тренировочная база:</div>
                    </div>
                    <div class="footer__block-1-info">
                        <div class="footer__block-1-info-1">
                            г. Санкт-Петербург<br> ул. Ломоносова, 9; к. 4402
                        </div>
                        <div class="footer__info-2">г. Санкт-Петербург<br> Северная дорога, 25</div>

                    </div>
                </div>
                <div class="footer__block-2">
                    <div class="footer__block-2-info">+7 (923) 546-43-21 info@iurc.com</div>

                </div>
                <div class="footer__block-3">
                    <div class="footer__block-3-title">Хочу вступить</div>
                    <div class="footer__block-3-sub-title">Оставь свои контакты</div>
                    <div class="footer__block-3-info">
                        <div class="footer__block-3-info-1"><input type="text"></div>
                        <div class="footer__block-3-info-2"><i class="fas fa-angle-right"></i></div>
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

    .footer {
        /*background: #414E7E;*/
        height: 240px;

        &__social {
            display: none;
        }

        &__body {

            background: #414E7E;
            display: flex;
            padding: 30px 0 0 190px;
        }

        &__block-1 {
            &-title {
                color: #fff;
                font-size: 24px;
                font-weight: 600;

            }

            &-sub-title {

                display: flex;
                padding-top: 25px;
                color: #60AEE8;
                font-size: 18px;
                font-weight: 600;

                &-1 {
                    margin-right: 200px;
                }
            }

            &-info {
                display: flex;
                padding: 20px 0 40px 0;
                font-size: 16px;
                color: #fff;
                font-weight: 500;


                &-1 {
                    margin-right: 53px;
                }
            }
        }


        &__block-2 {

            align-self: flex-end;
            padding: 0 0 40px 20px;
            flex: 0 1 200px;

            &-info {
                font-size: 16px;
                color: #fff;
                font-weight: 500;
            }
        }

        &__block-3 {
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
        .footer__social {
            display: block;
            text-align: center;
            padding-top: 30px;

            &-link {
                margin: 0 25px;
                font-size: 22px;
            }
        }
    }


</style>



