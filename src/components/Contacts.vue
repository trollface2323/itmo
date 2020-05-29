<template>

    <div class="main">
        <div class="header">
            <div class="header__photo">
                <img src="../photo/cont1.png" alt="">
                <div class="header__photo-text">
                    <span>контакты</span>
                </div>
            </div>
        </div>
        <div class="body">
            <div class="body__cont1 ">
                <div class="body__cont1-photo">
                    <img src="../photo/cont2.png" alt="">
                </div>
                <div class="body__cont1-info">
                    <div class="name">алексей копыть</div>
                    <div class="position">Генеральный менеджер</div>
                    <div class="vk"><i class="fab fa-vk"></i>ссылка</div>
                    <div class="phone"><i class="fas fa-phone-alt"></i>номер</div>
                    <div class="mail"><i class="far fa-envelope"></i>почта</div>
                </div>
            </div>
            <div class="body__cont2">
                <div class="body__cont2-photo">
                    <img src="../photo/cont3.png" alt="">
                </div>
                <div class="body__cont2-info">
                    <div class="name">андрей фомченко</div>
                    <div class="position">Cтарший тренер</div>
                    <div class="vk"><i class="fab fa-vk"></i>ссылка</div>
                    <div class="phone"><i class="fas fa-phone-alt"></i>номер</div>
                    <div class="mail"><i class="far fa-envelope"></i>почта</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Contacts",
    }
</script>

<style scoped lang="scss">

    .main{
        font-family: 'Roboto', sans-serif;
    }

    .header{
        margin-top: 142px;

        &__photo{
            position: relative;
            width: 90vw;
            margin: 0 auto;
            & img{
                width: 100%;
            }
            &-text{
                position: absolute;
                top: 0;
                left: 0.8%;
                text-transform: uppercase;
                font-size: 48px;
                font-weight: 700;
                background-color: rgba(61, 80, 132, 0.9);
                margin-top: 5px;
                padding: 15px 30px;
                color: #fff;
            }
        }
    }
    .body{
        position: relative;
        z-index: 2;
        background: #fff;
        margin: 0 auto;
        margin-top: -10%;
        width: 56%;

        & svg{
            margin-right: 15px;
        }
        &__cont1{
            display: flex;
            justify-content: space-around;
            margin-bottom: 45px;
            &-photo{
                width: 33%;
                & img{
                    width: 100%;
                }
            }
            &-info{

            }
        }
        &__cont2{
            display: flex;
            justify-content: space-around;
            padding-bottom: 90px;
            &-photo{
                width: 33%;
                & img{
                    width: 100%;
                }
            }
            &-info{
                width: 209px;
            }
        }
    }

    @media (max-width: 1023px) {
        .header{
            &__photo{
                &-text{
                    position: static;
                    padding: 0;
                    font-size: 28px;
                    text-align: center;
                    background: #fff;
                    color: #414E7E;
                    margin: 20px 0;
                }
            }
        }
        .body{
            width: 90%;
            margin-top: 0;
            &__text{
                padding: 0;
                font-size: 14px;
            }

        }

    }

    .name{
        text-transform: capitalize;
        color: #414E7E;
        font-size: 32px;
        font-weight: 700;
        width: 100px;
        margin-bottom: 16px;
        line-height: 0.9em;
    }
    .position{
        color: #60AEE8;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 42px;
    }
    .vk{

        opacity: 0.7;
        margin-bottom: 16px;
    }
    .phone{
        opacity: 0.7;
        margin-bottom: 16px;
    }
    .mail{
        opacity: 0.7;
    }
    .r{
        outline: solid 2px red;
    }
    @media (max-width: 599px) {
        .body__cont1-info{
            margin-left: 40px;

        }
        .body__cont2-info{
            margin-left: 40px;

        }
        .name{
            /*text-transform: capitalize;*/
            /*color: #414E7E;*/
            font-size: 18px;
            /*font-weight: 700;*/
            /*width: 100px;*/
            white-space: nowrap;
            margin-bottom: 5px;
            line-height: 0.9em;
        }
        .position{
            font-size: 1em;
            margin-bottom: 5px;
        }
        .vk{

            opacity: 0.7;
            margin-bottom: 5px;
        }
        .phone{
            opacity: 0.7;
            margin-bottom: 5px;
        }
    }

</style>