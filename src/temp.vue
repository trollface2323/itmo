<template>

    <div class="main">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@700&family=Roboto:wght@300;500;600;700;900&display=swap"
                  rel="stylesheet">


        </head>

        <section class="footer">
            <div class="footer__title">
                <div class="footer__title-1">Контакты</div>
                <div class="footer__title-2">Хочу вступить</div>
            </div>
            <div class="footer__sub-title">
                <div class="footer__sub-title-1">Офис:</div>
                <div class="footer__sub-title-2">Тренировочная база:</div>
                <div class="footer__sub-title-3">Оставь свои контакты</div>
            </div>
            <div class="footer__info">
                <div class="footer__info-1">
                    г. Санкт-Петербург<br> ул. Ломоносова, 9; к. 4402
                </div>
                <div class="footer__info-2">г. Санкт-Петербург<br> Северная дорога, 25</div>
                <div class="footer__info-3">+7 (923) 546-43-21<br> info@iurc.com</div>
                <div class="footer__info-4"><input type="text"></div>
                <div class="footer__info-5"><i class="fas fa-angle-right"></i></div>
            </div>


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
        height: 240px;
        background: #414E7E;

        &__title {
            padding-top: 40px;
            margin-bottom: 25px;
            display: flex;
            color: #fff;
            font-size: 24px;
            font-weight: 600;

            &-1 {
                margin: 0 630px 0 200px;

            }
        }

        &__sub-title {
            display: flex;
            margin-bottom: 20px;
            color: #60AEE8;
            font-size: 18px;
            font-weight: 600;

            &-1 {
                margin: 0 200px 0 200px;
            }

            &-2 {
                margin-right: 306px;
            }
        }

        &__info {
            display: flex;
            align-items: center;
            font-size: 16px;
            color: #fff;
            font-weight: 500;

            &-1 {
                margin: 0 53px 0 200px;
            }

            &-3 {
                margin: 0 75px 0 116px;
            }

            & input {
                border-radius: 10px;
                height: 30px;
                margin-right: 20px;
            }

            & svg {
                font-size: 30px;
                margin-top: 5px;
            }
        }
    }

    .r {
        outline: red 2px solid;
    }

</style>



