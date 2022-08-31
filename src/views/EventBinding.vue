<!-- eslint-disable space-before-blocks -->
<!-- eslint-disable vue/valid-template-root -->
// eslint-disable-next-line vue/valid-template-root
<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <p>The counter is : {{counter}}</p>
    </div>
    <!-- onchange = v-change = @change-->
    <select v-model="selectedValue" @change="changeSelect">
        <option value='서울'>서울</option>
        <option value='부산'>부산</option>
        <option value='제주'>제주</option>
    </select>
    <!--키 입력 이벤트
        @keyup.enter  엔터키 입력
        @keyup.tab
        @keyup.delete
        @keyup.esc
        @keyup.space
        @keyup.up
        @keyup.down
        @keyup.left
        @keyup.right

        특수키 입력
        @keyup.alt.enter
        @click.ctrl 등
    -->
    <h1>full name : {{fullName}}</h1>
</template>
<script>
export default {
  data () {
    return {
      counter: 0,
      selectedValue: '',
      firstName: 'An',
      lastName: 'Yeongju'
    }
  },
  methods: {
    increaseCounter () {
      this.counter = this.counter + 1
    },
    changeSelect () {
      alert(this.selectedValue)
    }
  },
  computed: { // 정의해놓은 함수를 호출해놓으면 여러번쓰더라도 한번만 연산됨.(기존에 정의된 데이터 값을 기반으로 새로운 데이터 값을  활용)
    fullName () {
      return this.firstName + '' + this.lastName
    }
  }
}
</script>
