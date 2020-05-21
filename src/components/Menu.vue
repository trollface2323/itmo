<head>
    <link rel="stylesheet" href="./normilize.css">
</head>
<template>
    <div class="menu">
        <div class="menu__body">
            <div class="menu__burger" :class="{active}" @click="active = !active"><span></span></div>
            <div class="menu__logo">
                <a href="#">
                    <img src="./photo/logo.png" alt="">
                </a>
            </div>

            <ul class="menu__list" :class="{active}">
                <div class="menu__photo">
                    <img src="./photo/menu.png" alt="">
                </div>
                <li class="menu__item link"><a href="#" class="link">о нас</a></li>
                <li class="menu__item link"><a href="#" class="link">история</a></li>
                <li class="menu__item link"><a href="#" class="link">команда</a></li>
                <li class="menu__item link"><a href="#" class="link">новости</a></li>
                <li class="menu__item link"><a href="#" class="link">медиа</a></li>
                <li class="menu__item link"><a href="#" class="link">контакты</a></li>
                <div class="menu__social">
                    <a href="" class="menu__social-link"><i class="fab fa-vk"></i></a>
                    <a href="" class="menu__social-link"><i class="fab fa-facebook-f"></i></a>
                    <a href="" class="menu__social-link"><i class="fab fa-instagram"></i></a>
                    <a href="" class="menu__social-link"><i class="fab fa-youtube"></i></a>
                    <a href="" class="menu__social-link"><i class="fab fa-telegram-plane"></i></a>
                    <a href="" class="menu__social-link"><i class="far fa-envelope"></i></a>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Menu",
        data() {
            return {
                active: false
            }
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    ul {
        margin: 0;
        padding: 0;

    }

    .link {
        text-decoration: none;
        color: #fff;
    }

    .menu {
        background: #414E7E;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 112px;
        z-index: 10;

        &__photo {
            position: relative;
            display: none;

            /*top: 80px;*/
        }

        &__body {
            display: flex;
            justify-content: center;

        }

        &__logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            & img {
                width: 100%;
            }
        }

        &__burger {
            display: none;
        }

        &__list {
            display: flex;
            justify-content: center;
            text-transform: uppercase;
            padding-top: 44px;
            font-weight: 600;
            width: 100%;


            & li {
                margin: 0 3%;
                list-style: none;

                /*&:nth-child(1) {*/
                /*    display: none;*/
                /*}*/

                &:nth-child(4) {
                    margin-right: 10%;
                    /*border: 3px red solid;*/
                }

                &:nth-child(5) {
                    margin-left: 10%;
                }

            }
        }
        &__social{
            display: none;
        }

    }

    @media (max-width: 1023px) {
        .menu {
            height: 80px;

            &__body.slide {

            }

            &__photo {
                text-align: center;
                display: block;

                & img {
                    width: 100%;
                }
            }

            &__logo {
                max-width: 90px;
                z-index: 2;
            }

            &__list {
                /*position: absolute;*/
                display: flex;
                position: relative;
                flex-direction: column;
                align-items: center;
                padding-top: 80px;
                background: #414E7E;
                margin-top: -634px;
                top: 10%;
                width: 100%;
                height: 100%;
                transition: all 0.5s ease 0s;

                &.active {
                    margin-top: 0;
                }

                & li {
                    text-align: center;
                    width: 100%;
                    margin: 5px 0;
                    border-bottom: 1px solid gray;
                    padding: 10px 0;

                    &:nth-child(5) {
                        margin-left: 0;
                    }

                    &:nth-child(4) {
                        margin-right: 0;
                    }
                }
            }

            &__burger {
                display: block;
                position: fixed;
                width: 35px;
                height: 25px;
                right: 20px;
                top: 45px;
                transform: translateY(-50%);
                cursor: pointer;
                z-index: 2;

                &.active {
                    & span {
                        transform: scale(0);
                        transition: all 0.5s ease 0s;
                    }

                    &:before {
                        transform: rotate(45deg);
                        top: 10px;
                    }

                    &:after {
                        transform: rotate(-45deg);
                        bottom: 13px;
                    }
                }


                & span {
                    position: absolute;
                    height: 2px;
                    width: 100%;
                    top: 12px;
                    left: 0;
                    color: red;
                    background: #fff;
                    transition: all 0.5s ease 0s;

                }

                &:before {
                    content: '';
                    background: #fff;
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    right: 0;
                    top: 0;
                    transition: all 0.5s ease 0s;
                }

                &:after {
                    content: '';
                    background: #fff;
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    right: 0;
                    bottom: 0;
                    transition: all 0.5s ease 0s;

                }
            }
            &__social{
                display: block;
                padding: 50px;
                &-link{
                    text-decoration: none;
                    color: #fff;
                    margin: 0 15px;
                }
            }
        }
    }


    .r {
        outline: red 2px solid;

    }

</style>