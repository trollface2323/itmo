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
    import Menu from "@/components/Menu";
    // import MainPage from "@/components/MainPage";
    // import News from "@/components/News";
    // import Media from "@/components/Media";
    // import Team from "@/components/Team";
    import TeamMob from "@/components/TeamMob";
    // import History from "@/components/History";
    // import Contacts from "@/components/Contacts";
    import Footer from "@/components/Footer";

    export default {
        name: "App",
        components: {
            // History,
            Footer,
            Menu,
            // Contacts,
            // MainPage,
            // News,
            // Media,
            // Team,
            TeamMob
        },
        data() {
            return {
                active: false,
            }
        },
        methods: {
            no_scroll(active) {
                this.active = active;
                console.log(active)
            },
        }
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

            }
        }

        &__sub-title {
            display: flex;
            justify-content: center;
            text-transform: uppercase;
            font-weight: 600;

            &-1 {
                margin: 0 200px 0 200px;
            }

            & li {
                margin: 0 3%;
                list-style: none;


                &:nth-child(3) {
                    margin-right: 250px;
                }


            }
        }
    }

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

    @media (max-width: 1023px) {
        .footer__social {
            display: block;
            text-align: center;
            padding-top:30px;
            &-link{
                margin: 0 25px;
                font-size: 22px;
            }

            &__list {
                display: block;
                margin-top: 100px;
            }
        }
    }

</style>