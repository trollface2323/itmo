<template>

    <div class="main">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@700&family=Roboto:wght@300;500;700;900&display=swap" rel="stylesheet">


        </head>
        <section class="header">
            <div class="menu">
                <ul class="menu__list">
                    <li class="menu__item">о нас</li>
                    <li class="menu__item">история</li>
                    <li class="menu__item">команда</li>
                    <li class="menu__item"><img src="./photo/logo.png" alt=""></li>
                    <li class="menu__item">новости</li>
                    <li class="menu__item">медиа</li>
                    <li class="menu__item">контакты</li>
                </ul>
            </div>
        </section>
        <section class="about">
            <div class="about-photo">
                <img src="" alt="">
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
            <div class="team__info">

            </div>
        </section>
        <section class="news">
            <div class="news__title">
                <span>новости</span>
                <a href="" class="news__link link">все новости</a>
            </div>
        </section>
        <section class="photos">
            <img src="./photo/pic1.png" alt="" class="photos_item">
            <img src="./photo/pic2.png" alt="" class="photos_item">
            <img src="./photo/pic3.png" alt="" class="photos_item">
            <img src="./photo/pic4.png" alt="" class="photos_item">
            <img src="./photo/pic5.png" alt="" class="photos_item">
            <img src="./photo/pic6.png" alt="" class="photos_item">
            <img src="./photo/pic7.png" alt="" class="photos_item">
            <img src="./photo/pic8.png" alt="" class="photos_item">
            <img src="./photo/pic9.png" alt="" class="photos_item">
            <img src="./photo/pic10.png" alt="" class="photos_item">
            <img src="./photo/pic11.png" alt="" class="photos_item">
            <img src="./photo/pic12.png" alt="" class="photos_item">
        </section>
        <section class="social">
            <div class="social__title">мы в соцсетях</div>
            <div class="social__networks">
                <a href="" class="social__networks-item">ВКонтакте</a>
                <a href="" class="social__networks-item">Instagram</a>
                <a href="" class="social__networks-item">Telegram</a>
                <a href="" class="social__networks-item">YouTube</a>
                <a href="" class="social__networks-item">Facebook</a>
                <a href="" class="social__networks-item">Mail</a>
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

<style lang="scss">
    a{
        font-size: 40px;
        margin: 0;
        padding: 0;
    }

    .main {
        margin: 0 auto;
        max-width: 1440px;
    }


    .menu {
        margin: 0 auto;
        width: 1219px;
        color: #fff;

        &__list {
            display: flex;
            justify-content: space-between;
            text-transform: uppercase;
            padding-top: 44px;
            margin: -8px 0 0 0;
            font-weight: 600;

            & li {

                list-style: none;
            }
        }

        &__item img {
            height: 90px;
            width: 160px;
            transform: translateY(-50%);
        }
    }


    .header {
        margin: 0 auto;
        font-family: 'Roboto', sans-serif;
        height: 1024px;
        background-image: url(photo/head.png);

    }

    .about {
        font-family: 'Roboto', sans-serif;

        display: flex;

        &__text {
            margin: 0 auto;
            width: 795px;
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
            margin: 56px 0 80px 56px;
            font-weight: 300;
            width: 660px;
            font-size: 24px;
            line-height: 1.6em;
        }

        &-photo {
            background-image: url(photo/body.png);
            width: 645px;
            height: 905px;
        }


    }

    .link {
        border: 2px #60AEE8 solid;
        border-radius: 20px;
        text-decoration: none;

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
            margin: 75px 0 0 115px;
            font-size: 48px;
            font-weight: 700;
        }
    }

    .news {
        height: 670px;
        &__title {
            display: flex;
            align-items: center;

            & span {
                font-weight: 700;
                text-transform: uppercase;
                color: #414E7E;
                font-size: 48px;
            }

            margin: 80px 0 0 115px;
        }

        &__link {
            margin-left: 20px;
            text-decoration: none;
            font-size: 17px;
            font-family: 'Exo 2', sans-serif;
            font-weight: 700;
            padding: 10px 15px;
            border-radius: 9px;
            color: #60AEE8;
        }
    }
    .social{
        font-family: 'Roboto', sans-serif;
        &__title{
            text-align: center;
            text-transform: uppercase;
            color: #3D5084;
            font-size: 24px;
            font-weight: 700;
            margin: 30px 0 0 50%;
            transform: translateX(-50%);
        }
        &__networks{
            width: 960px;
            margin: 0 auto;
            outline: red 2px   solid;

        }
        a{
            display: inline-block;
            outline: red 2px solid;
            text-decoration: none;
            height: 40px;
            width: 280px;
            border-radius: 5px;
            margin:0 60px 25px 0;
            font-size: 18px;
            color: #000;
        }
    }



</style>
