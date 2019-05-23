<template>
    <div class="m-5">
        <table class="table table-bordered h4">  
            <tbody>
                <tr>
                    <td class="border border-primary rounded-pill">
                        <router-link tag="a" to="/team/Vasiliy">Василий</router-link>
                    </td>
                    <td class="border border-secondary">
                        <router-link tag="a" to="/team/Semien">Семён</router-link>
                    </td>
                </tr>
                <tr>
                    <td class="border border-success">
                        <router-link tag="a" to="/team/Anatol">Анатолий</router-link>
                    </td>
                    <td class="border border-dark">
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

