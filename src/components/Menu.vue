<template>
    <div class="menu r">
        <ul class="menu__list">
            <li class="menu__item">оs нас</li>
            <li class="menu__item">история</li>
            <li class="menu__item">команда</li>
            <li class="menu__item"><img src="./photo/logo.png" alt=""></li>
            <li class="menu__item">новости</li>
            <li class="menu__item">медиа</li>
            <li class="menu__item">контакты</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "menu"
    }
</script>

<style scoped lang="scss">

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
</style>