<template>
    <div class="header r">
        <div class="header__body">
            <a href="" class="header__logo">
                <img src="./photo/logo.png" alt="">
            </a>
            <div class="header__burger"><span></span>
            </div>
            <div class="header__menu ">
                <div class="header__photo">
                    <img src="./photo/menu.png" alt="">
                </div>
                <ul class="header__list r">
                    <li><a href="" class="header__link">о нас</a></li>
                    <li><a href="" class="header__link">история</a></li>
                    <li><a href="" class="header__link">команда</a></li>
                    <li><a href="" class="header__link">новоти</a></li>
                    <li><a href="" class="header__link">медиа</a></li>
                    <li><a href="" class="header__link">контакты</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "test"
    }
</script>

<style scoped lang="scss">


    ul {
        text-decoration: none;
        margin: 0;
        padding: 0;
    }

    .header {
        display: flex;
        position: fixed;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        height: 100px;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100px;
            background: #3D5084;

        }

        &__body {
            position: relative;
            z-index: 2;

        }

        &__logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 110px;

            & img {
                width: 100%;
            }
        }

        &__burger {
            display: none;
        }

        &__menu {
            display: flex;
        }

        &__photo {
            display: none;
        }

        &__list {
            display: flex;
            text-transform: uppercase;
            justify-content: flex-end;

            & li {
                list-style: none;
                margin: 0 3%;

            }


        }
        &__link{
            text-decoration: none;
            color: #fff;
        }
    }

    @media (max-width: 800px) {
        .header {
            &__burger {
                top: 15px;
                width: 30px;
                height: 20px;
                display: block;
                position: absolute;

                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 100%;
                    height: 2px;
                    background: #fff;
                }

                &:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    background: #fff;
                    width: 100%;
                    height: 2px;
                }
            }
        }
    }

    .r {
        outline: 2px red solid;
    }
</style>