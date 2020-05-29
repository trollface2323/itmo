<template>
    <section class="news">
        <div class="news__title">
            <h1>медиа</h1>
        </div>
        <div class="body">
            <div class="body__card">
                <div class="body__card-photo">
                    <img src="../photo/pic11.png" alt="">
                </div>
                <div class="body__card-title">Первый этап</div>
            </div>
            <div class="body__card">
                <div class="body__card-photo">
                    <img src="../photo/pic11.png" alt="">
                </div>
                <div class="body__card-title">Кубок ВУЗов - 3 место</div>
            </div>
            <div class="body__card">
                <div class="body__c ard-photo">
                    <img src="../photo/pic11.png" alt="">
                </div>
                <div class="body__card-title">Кубок ВУЗов - 3 место</div>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "News"
    }
</script>

<style scoped lang="scss">

    .news {
        font-family: 'Roboto', sans-serif;
        padding: 0 115px;
        margin: 190px 0 0 0;

        &__title {
            text-transform: uppercase;
            margin-bottom: 90px;
        }

    }

    .body {
        display: flex;

        &__card {
            position: relative;
            /*text-align: center;*/
            max-width: 300px;
            width: 31%;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
            margin: 0 10% 40px 0;

            &:last-child {
                margin-right: 0;
            }

            & img {
                width: 100%;
            }

            &-title {
                position: absolute;
                left: 0;
                bottom: 0;
                font-family: 'Exo 2', sans-serif;
                color: #fff;
                font-weight: 700;
                font-size: 18px;
                width: 100%;
                height: 54px;
                background: rgba(23, 56, 43, 0.6);
                padding-left: 20px;
            }
        }
    }

    @media (max-width: 1023px) {

        .news {
            padding: 0;
            margin: 100px 0 0 0;

            &__title {
                text-align: center;
                color: #414E7E;
                margin-bottom: 40px;
            }
        }

        .body {
            display: block;

            &__card {
                max-width: 500px;
                width: 90%;
                margin: 0 auto 40px auto;

                & img {
                    width: 100%;
                }

                &:last-child {
                    margin: 0 auto 40px auto;
                }
            }
        }

    }


</style>