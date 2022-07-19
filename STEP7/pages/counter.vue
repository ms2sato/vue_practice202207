
<template>
  <!-- <CountUp/> と記載しても同ように振る舞う -->
  <count-up></count-up> <!-- ① -->
</template>
<script>
import CountUp from '@/components/CountUp'; // ②
export default {
  components:{
    // { 'CountUp': CountUp } の省略形
    CountUp // ③
  }
}
</script>