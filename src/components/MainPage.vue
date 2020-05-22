<template>

    <div class="main">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@700&family=Roboto:wght@300;500;600;700;900&display=swap"
                  rel="stylesheet">


        </head>


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

    .main {
    }

    .header {
        font-family: 'Roboto', sans-serif;


        &__photo {
            background: url("photo/head.png");
            height: 1024px;
        }
    }

    .menu {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        color: #fff;

        &__list {
            display: flex;
            justify-content: space-around;
            text-transform: uppercase;
            padding-top: 44px;
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

    .about {
        font-family: 'Roboto', sans-serif;

        display: inline-block;

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

    .r {
        outline: red 2px solid;
    }

    /*@media (max-width: ) {*/
    /*    */
    /*}*/

    .bg-cover {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center 35%;
        background-color: #ecf1f5;
        position: relative;
    }
</style>



