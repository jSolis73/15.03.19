<template>
    <table>
        <tbody>
            <tr>
                <td v-for = "card in arrayCards" class="table table-bordered table-dark">{{card.title}} {{card.text}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ['arrayCards']
}
</script>

<style>
tr {
    position: relative;
}   
td {
  width: 30px;
  height: 30px;
}  
</style>
