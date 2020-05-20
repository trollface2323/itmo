<template>
    <div class="header">
        <div class="header__body">
            <div class="header__logo">
                <img src="./photo/logo.png" alt="">
            </div>
            <div class="header__burger" :class="{active}" @click="active = !active"><span></span></div>
           <nav class="header__menu"></nav>
            <ul class="header__list">
                <li><a href="#" class="header__link link">о нас</a></li>
                <li><a href="#" class="header__link link">история</a></li>
                <li><a href="#" class="header__link link">команда</a></li>
                <li><a href="#" class="header__link link">новости</a></li>
                <li><a href="#" class="header__link link">медиа</a></li>
                <li><a href="#" class="header__link link">контакты</a></li>
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

    .link{
        text-decoration: none;
        color: #fff;

    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        color: #abd;
        z-index: 10;

        &:before {
            content: '';
            background: #414E7E;
            top: 0;
            left: 0;
            position: absolute;
            height: 100%;
            width: 100%;

        }
        &__body{
            position: relative;
            margin: 40px 0;
            z-index: 2;
        }

        &__logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &__burger {
            display: none;
        }

        &__list {
            display: flex;
            justify-content: center;
            text-transform: uppercase;
            font-weight: 600;

            & li {
                margin: 0 40px;
                list-style: none;


                &:nth-child(3) {
                    margin-right: 250px;
                }


            }
        }
    }

    @media (max-width: 1023px) {
        .menu {

            &__burger {
                display: block;
                position: fixed;
                width: 40px;
                height: 30px;
                right: 20px;
                top: 55px;
                transform: translateY(-50%);
                cursor: pointer;

                &.active {
                    & span {
                        transform: scale(0);
                        transition: all 0.5s ease 0s;
                    }

                    &:before {
                        transform: rotate(45deg);
                        top: 14px;
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
                    top: 14px;
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

            &__list {
                display: block;
                margin-top: 100px;
            }
        }

    }

    @media (max-width: 1150px) {
        .menu__list li {
            margin: 0 30px;
        }

    }

    .r {
        outline: red 2px solid;
    }
</style>