<template>
  <div class="prime-box">
     <fieldset>
      <legend>质数求和</legend>
      <div>
        输入起始数字： 
        <el-input :min="0" type="number" v-model.number="start"></el-input>
      </div>
      <div>
        输入结束数字:
        <el-input :min="0" type="number" v-model.number="end"></el-input>
      </div>
      
      <div>结果是： {{primesTatal}}</div>
    </fieldset>
   
  </div>
</template>
<script>
export default {
  name: 'primes-total',
  data() {
    return {
      start: 0,
      end: 0
    }
  },
  computed: {
    primesTatal() {
      let {start, end} = this;
      const arr = [];
      while(end >= start) {
        if (end % 2 === 1) {
          arr.push(end);
        }
        end--;
      }
      console.log(arr); //eslint-disable-line
      return arr.reduce((result, next) => {
        result += next;
        return result;
      }, 0);
    }
  }
}
</script>

<style lang="scss">
.prime-box {
  display: flex;
  margin-top: 30px;
}
</style>




