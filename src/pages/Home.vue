<template>
    <div class="page">
        <h1 class="first-title">Explanation</h1>
        <p>
            This portfolio is a bit different then your normal one.
            To read the information on the page, you have to be brave enough to enter the dungeons and defeat the monsters they contain!
            <br>
            <br>
            Be careful with the order you choose, since after you finish a dungeon the other ones become more difficult.
        </p>

        <h1>Who am I?</h1>
        <p>
            I am the Creator of this dungeon. To get more information about me, you have to clear the dungeons.
        </p>


        <h1>Explore the dungeons</h1>
        <div class="buttons grid">
            <Button go-to="/projects">
                <template #title><span> Projects </span></template>
                <template #icon> <ProjectIcon /> </template>
            </Button>
            <Button go-to="/skill-set">
                <template #title><span> Skill set </span></template>
                <template #icon> <SkillSetIcon /> </template>
            </Button>
            <Button go-to="/about-me">
                <template #title><span> About me </span></template>
                <template #icon> <MeIcon /> </template>
            </Button>
            <Button go-to="/contact-me">
                <template #title><span> Contact me </span></template>
                <template #icon> <ContactMeIcon /> </template>
            </Button>
        </div>
    </div>
</template>

<script setup>
import Button from '../components/Button.vue';
import ProjectIcon from '../components/icons/ProjectIcon.vue'
import SkillSetIcon from '../components/icons/SkillSetIcon.vue'
import MeIcon from '../components/icons/MeIcon.vue'
import ContactMeIcon from '../components/icons/ContactMeIcon.vue'
</script>

<style scoped>
    .first-title {
        margin-top: 0;
    }

    h1 {
        margin: 1rem 0;
        margin-bottom: 1rem;
    }

    p {
        padding: 1rem;
        margin: 0;
    }
    .buttons {
        padding: 0 1rem;
    }
    .grid { 
        display: grid;
        grid-template-columns: repeat(auto-fill, 8.125rem);;
        gap: 1rem;
    }

    button > span {
        color: var(--text-color);
    }

    /* Medium sized screens */
    @media screen and (min-width: 481px) {
        .grid {
            grid-template-columns: repeat(auto-fill, 16.25rem);
        }

        button > span {
            font-size: 20px;
        }

        button > svg {
            height: 180px;
            width: 180px;
        }
    }
</style>