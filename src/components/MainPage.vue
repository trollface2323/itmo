<template>

    <div class="main">
        <head>
            <!--            todo перенести фришты в индекс-->
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@700&family=Roboto:wght@300;500;600;700;900&display=swap"
                  rel="stylesheet">


        </head>

        <section class="header">
            <div class="header__photo">
                <img src="../photo/head.png" alt="">
            </div>
        </section>

        <section class="about">
            <div class="about__photo">
                <img src="../photo/body.png" alt="">
                <img src="../photo/test.jpg" alt="">
            </div>
            <div class="about__text">
                <div class="about__title">о нас</div>
                <div class="about__sub-title">
                    <p>Гребной клуб Университета ИТМО - это не просто гребной спорт. Это команда,
                        где каждый может найти для себя что-то интересное: от профессионального спорта до спортивной
                        журналистики и фотографа.</p>
                    <p>Существуем с 2013 года. В этом году наша команда впервые вышла на мировой уровень. </p>
                    <p> За лето 2018 г. мы побывали на соревнованиях в 4 странах и участвовали в 3 международных
                        регатах:
                        в Китае, Польше и Германии, где боролись с лучшими командами всего мира.</p>
                </div>
                <div class="about__link">
                    <a href="" class="about__link-item link">история клуба</a>
                </div>
            </div>
        </section>
        <section class="team">
            <div class="team__title">наша команда</div>
            <div class="team__body">
                <div class="team__body-card">
                    <div class="team__body-card-photo">
                        <img src="../photo/kalash.png" alt="">
                    </div>
                    <div class="team__body-card-info">
                        <div class="team__body-card-info-name">иван калашников</div>
                        <div class="team__body-card-info-role">Гребец</div>
                    </div>

                </div>
                <div class="team__body-card">
                    <div class="team__body-card-photo">

                        <img src="../photo/makagonov.png" alt="">
                    </div>

                    <div class="team__body-card-info">
                        <div class="team__body-card-info-name">иван<br> макагонов</div>
                        <div class="team__body-card-info-role">Капитан мужской сборной</div>
                    </div>
                </div>
                <div class="team__body-card">
                    <div class="team__body-card-photo">
                        <img src="../photo/fomchenko.png" alt="">
                    </div>
                    <div class="team__body-card-info">
                        <div class="team__body-card-info-name">андрей фомченко</div>
                        <div class="team__body-card-info-role">Тренер</div>
                    </div>
                </div>
                <div class="team__body-card">
                    <div class="team__body-card-photo">
                        <img src="../photo/borsuk.png" alt="">
                    </div>
                    <div class="team__body-card-info">
                        <div class="team__body-card-info-name">елизавета борсук</div>
                        <div class="team__body-card-info-role">Рулевая</div>
                    </div>
                </div>


            </div>
        </section>
        <section class="news">
            <div class="news__title">
                <span>новости</span>
                <a href="" class="news__link link">все новости</a>
            </div>
            <div class="news__card">
                <div class="news__card-photo">
                    <img src="../photo/pic11.png" alt="">
                </div>
                <div class="news__card-title">Кубок ВУЗов - 3 место</div>
                <div class="news__card-sub-title">тут типа какой-то текст</div>

            </div>
        </section>
        <section class="photos">
            <img src="../photo/pic1.png" alt="" class="photos_item">
            <img src="../photo/pic2.png" alt="" class="photos_item">
            <img src="../photo/pic3.png" alt="" class="photos_item">
            <img src="../photo/pic4.png" alt="" class="photos_item">
            <img src="../photo/pic5.png" alt="" class="photos_item">
            <img src="../photo/pic6.png" alt="" class="photos_item">
            <img src="../photo/pic7.png" alt="" class="photos_item">
            <img src="../photo/pic8.png" alt="" class="photos_item">
            <img src="../photo/pic9.png" alt="" class="photos_item">
            <img src="../photo/pic10.png" alt="" class="photos_item">
            <img src="../photo/pic11.png" alt="" class="photos_item">
            <img src="../photo/pic12.png" alt="" class="photos_item">
        </section>
        <section class="social">
            <div class="social__title">мы в соцсетях</div>
            <div class="social__networks">
                <a href="" class="social__networks-item"
                   style="background: #414E7E; box-shadow: 0 0 10px #414E7E;"><span>ВКонтакте</span><i
                        class="fab fa-vk"></i></a>
                <a href="" class="social__networks-item" style="background: #F79C49;
                        box-shadow: 0 0 10px #F79C49;"><span>Instagram</span><i
                        class="fab fa-instagram"></i></a>
                <a href="" class="social__networks-item"
                   style="background: #60AEE8; box-shadow: 0 0 10px #60AEE8"><span>Telegram</span><i
                        class="fab fa-telegram-plane"></i></a>
                <a href="" class="social__networks-item"
                   style="background: #EB3F3F; box-shadow: 0 0 10px #EB3F3F"><span>YouTube</span><i
                        class="fab fa-youtube"></i></a>
                <a href="" class="social__networks-item"
                   style="background: #293357; box-shadow: 0 0 10px #293357"><span>Facebook</span><i
                        class="fab fa-facebook-f"></i></a>
                <a href="" class="social__networks-item"
                   style="background: #CFED8E; box-shadow: 0 0 10px #CFED8E"><span>Mail</span><i
                        class="far fa-envelope"></i></a>
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

    .main {
    }

    .header {
        font-family: 'Roboto', sans-serif;


        &__photo {
            position: relative;
            max-width: 100vw;

            & img {
                width: 100%;

            }
        }
    }

    .about {
        font-family: 'Roboto', sans-serif;
        display: flex;

        &__photo {
            width: 50%;

            & img:last-child {
                display: none;
                /*width: 100%;*/
            }
        }

        &__text {
            /*margin: 0 auto;*/
            /*width: 50%;*/
        }

        &__title {
            font-size: 48px;
            text-align: center;
            margin-top: 88px;
            text-transform: uppercase;
            color: #414E7E;
            font-weight: 700;
        }

        &__sub-title {
            margin: 56px auto 80px auto;
            font-weight: 300;
            width: 70%;
            font-size: 24px;
            line-height: 1.6em;

            & p:last-child {
                /*height: 200px;*/
            }
        }
    }

    .link {
        border-radius: 20px;
        text-decoration: none;

        &:hover {
            text-decoration: none;
        }

    }

    .about__link {
        text-align: center;

        &-item {
            margin-top: 133px;
            padding: 15px 30px;
            text-transform: uppercase;
            color: #3D5084;
            font-weight: 500;
            font-size: 34px;
        }
    }

    .team {
        height: 640px;
        background: #3D5084;
        font-family: 'Roboto', sans-serif;

        &__title {
            display: inline-block;
            text-transform: uppercase;
            color: #fff;
            margin: 75px 0 60px 115px;
            font-size: 48px;
            font-weight: 700;
        }

        &__body {
            display: flex;
            padding: 0 120px;
            flex-wrap: wrap;
            /*justify-content: space-between;*/

            &-card {
                display: flex;
                width: 30%;
                /*flex-wrap: wrap;*/
                margin: 0 25px 70px 0;

                &-photo {
                    /*width: 150px;*/
                    /*height: 150px;*/

                    & img {
                        width: 150px;
                        height: 150px;
                        /*height: 100%;*/
                        border-radius: 50%;
                        /*object-fit: contain;*/
                        object-fit: cover;
                    }
                }

                &-info {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-left: 15px;

                    &-name {
                        text-transform: uppercase;
                        font-weight: 500;
                        color: #fff;
                        font-size: 24px;
                    }

                    &-role {
                        color: #60AEE8;
                        font-size: 18px;
                        /*text-transform: ;*/
                    }
                }
            }
        }
    }

    .news {
        /*height: 670px;*/
        margin: 80px 0 0 115px;

        &__title {
            display: flex;
            align-items: center;
            /*margin: 80px 0 45px 115px;*/
            margin-bottom: 45px;

            & span {
                font-weight: 700;
                text-transform: uppercase;
                color: #414E7E;
                font-size: 48px;
            }

        }

        &__link {
            margin-left: 20px;
            text-decoration: none;
            font-size: 17px;
            font-family: 'Exo 2', sans-serif;
            font-weight: 700;
            padding: 10px 15px;
            border-radius: 9px;
            border: solid;
            color: #60AEE8;
        }

        &__card {
            margin-bottom: 80px;

            &-photo {
                width: 30%;
                margin-bottom: 20px;

                & img {
                    height: 200px;
                    width: 100%;
                    object-fit: cover;
                }
            }

            &-title {
                font-weight: 700;
                font-size: 20px;
                margin-bottom: 20px;
            }

            &-sub-title {
                font-size: 16px;
            }
        }
    }

    .photos {
        & img {
            width: 16.666%;
        }

    }

    .social {
        font-family: 'Roboto', sans-serif;
        height: 230px;

        &__title {
            text-align: center;
            text-transform: uppercase;
            color: #3D5084;
            font-size: 24px;
            font-weight: 700;
            margin: 30px 0 0 50%;
            transform: translateX(-50%);
        }

        &__networks {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 960px;
            margin: 0 auto;
            margin-top: 25px;

            & a {
                text-decoration: none;

                &:hover {
                    text-decoration: none;
                    color: #fff;
                }
            }

            &-item {
                position: relative;
                display: flex;
                align-items: center;
                padding-right: 80px;
                height: 40px;
                width: 280px;
                border-radius: 10px;
                font-size: 18px;
                margin-bottom: 25px;
                color: #fff;


                & svg {
                    position: absolute;
                    right: 15px;
                    top: 10px;
                }

                & span {
                    margin-left: 40px;
                }


            }
        }
    }

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

            & .offset-1 {
                margin-left: 140px;
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

    @media (max-width: 1333px) {
        .about {
            &__photo {
                /*width: 50%;*/

                & img {
                    width: 45vw;
                }
            }

            &__text {
                /*width: 50%;*/
            }

            &__title {
                margin-top: 40px;
            }

            &__sub-title {
                margin: 25px auto 50px auto;
                /*line-height: 1.35em;*/
                /*font-size: 22px;*/
                & p:last-child {
                    /*margin-bottom: 0;*/
                }
            }
        }

    }

    @media (max-width: 1300px) {
        .team {
            &__body {
                &-card {
                    &-photo {
                        & img {
                            width: 120px;
                            height: 120px;
                        }
                    }

                    &-info {
                        &-name {
                            font-size: 16px;
                        }

                        &-role {
                            font-size: 14px;
                        }
                    }
                }
            }
        }

    }

    @media (max-width: 1246px) {
        .about {
            &__sub-title {
                /*line-height: 1.35em;*/
                font-size: 22px;
            }

        }
    }

    @media (max-width: 1193px) {
        .about {
            &__sub-title {
                font-size: 20px;
            }
        }

    }

    @media (max-width: 1130px) {
        .about {
            &__sub-title {
                line-height: 1.4em;
                font-size: 19.5px;
            }

            &__link {
                &-item {
                    font-size: 24px;
                }
            }
        }

    }

    @media (max-width: 1023px) {

        .header {
            display: none;
        }
        .about {
            display: block;

            &__photo {
                width: 100vw;
            }

            &__photo {
                display: block;
                margin-top: 80px;
                width: 100%;

                & img:first-child {
                    display: none;
                }

                & img:last-child {
                    display: block;
                    width: 100vw;
                }
            }

            &__text {
                padding: 0em 10px;
                /*margin: 0 auto;*/
                /*outline: red 2px solid;*/
                /*width: 100%;*/


            }

            &__title {
                margin: 30px 0 0 0;
                font-size: 24px;
            }

            &__sub-title {
                width: 100%;
                font-size: 14px;
            }

            &__link {
                margin-bottom: 20px;

                &-item {
                    font-size: 14px;
                }
            }
        }
        .team {
            display: flex;
            flex-direction: column;
            height: 340px;


            &__title {
                justify-content: center;
                font-size: 24px;
                margin: 20px auto 40px auto;
            }

            &__body {
                padding: 0;

                &-card:nth-child(2), &-card:nth-child(3), &-card:nth-child(4) {
                    display: none;
                }

                &-card {
                    margin: 0;
                    width: 100%;
                    flex-direction: column;
                    align-items: center;

                    &-photo {
                        & img {
                            width: 180px;
                            height: 180px;
                        }
                    }

                    &-info {
                        &-role {
                            text-align: center;
                        }
                    }
                }
            }
        }
        .news {

            margin: 30px 0;
            &__title {
                display: block;
                margin: 0;
                text-align: center;
            }
            &__card{
                margin: 0 auto;
                width: 90%;
                text-align: center;
                &-photo{
                    margin: 0 auto;
                    width: 90%;
                }
                &-title{
                    margin: 20px auto 20px auto;
                    width: 85%;
                }
                &-sub-title{
                    margin: 0 auto;
                    width: 85%;
                }
            }

        }
        .social {
            display: none;
        }
        .news {
            &__title {
                margin-left: 0;

                & span {
                    font-size: 28px;
                }
            }

            &__link {
                display: none;
            }
        }
        .photos {
            display: none;
        }
    }

    .bg-cover {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center 35%;
        background-color: #ecf1f5;
        position: relative;
    }
</style>



