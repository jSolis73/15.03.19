<template>
    <div>
        <div v-for="(man, index) in people" :key="index">
            <div v-if="infoId ==man.manId">
                <h5>{{man.name}}</h5>
                <p>{{man.position}}</p> 
                <p>{{man.experience}}</p> 
                <img :src="man.image"> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Info',
    data() {
        return {
            people: [
                {
                    name: 'Василий',
                    position: 'Фронтэнд разработчик',
                    experience: '3 года',
                    image: require('../images/Vas.png'),
                    manId: 1
                },
                {
                    name: 'Семён',
                    position: 'Бэкэнд разработчик',
                    experience: '4 года',
                    image: require('../images/Sem.png'),
                    manId: 2
                },
                {
                    name: 'Анатолий',
                    position: 'IOS разработчик',
                    experience: 'стажёр',
                    image: require('../images/Anat.png'),
                    manId: 3
                },
                {
                    name: 'Станислав',
                    position: 'Тестировщик',
                    experience: '5 лет',
                    image: require('../images/Stan.jpg'),
                    manId: 4
                }
            ],
            infoId: this.$route.params.iId,
            title: "Info"
        }
    }
}
</script>
