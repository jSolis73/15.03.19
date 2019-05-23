<template>
    <div>
        <table class="table table-bordered">  
            <tbody>
                <tr>
                    <td>
                        <router-link tag="a" to="/team/Vasiliy">Василий</router-link>
                    </td>
                    <td>
                        <router-link tag="a" to="/team/Semien">Семён</router-link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <router-link tag="a" to="/team/Anatol">Анатолий</router-link>
                    </td>
                    <td>
                        <router-link tag="a" to="/team/Stanislav">Станислав</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

