<template>
    <div class="menu">
        <div class="menu__burger" :class="{active}" @click="active = !active"><span></span></div>
        <div class="menu__logo">
            <img src="./photo/logo.png" alt="">
        </div>
        <ul class="menu__list">
            <li class="menu__item"><a href="#">о нас</a></li>
            <li class="menu__item">история</li>
            <li class="menu__item">команда</li>
            <li class="menu__item">новости</li>
            <li class="menu__item">медиа</li>
            <li class="menu__item">контакты</li>
        </ul>
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

    .menu {
        background: #414E7E;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        color: #fff;
        height: 112px;
        z-index: 10;

        .menu__logo {
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
            padding-top: 44px;
            font-weight: 600;

            & li {
                margin: 0 40px;
                list-style: none;

                &:nth-child(3) {
                    margin-right: 250px;
                }
            }
        }

        &__item img {
            height: 90px;
            width: 160px;
            transform: translateY(-40%);
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
                &.active{
                    & span {
                        transform: scale(0);
                        transition: all 0.5s ease 0s;
                    }
                    &:before{
                        transform: rotate(45deg);
                        top: 14px;
                    }
                    &:after{
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