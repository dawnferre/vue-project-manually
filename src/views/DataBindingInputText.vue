<!-- eslint-disable vue/no-unused-vars -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
    <div>
        <div>
        <input type="text" v-model="valueModel"/>
        <br/>
        <input type="number" v-model="numberModel"/>
        <br/>
        <textarea v-model="message"></textarea>
        <br/>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select>
        </div>
        <br/>
        <label><input type="checkbox" v-model="checked" true-value="yes" false-value="no">{{ checked }}</label>
        <br/>
        <br/>
        <br/>
        <label><input type="checkbox" v-model="checkedList" value="서울">서울</label>
        <label><input type="checkbox" v-model="checkedList" value="부산">부산</label>
        <label><input type="checkbox" v-model="checkedList" value="제주">제주</label>
        <br/>
        <span>체크한 지역 : {{checkedList}} </span>
        <br/>
        <br/>
        <br/>
        <label><input type="radio" v-bind:value="radioValue1" v-model="picked">서울</label>
        <label><input type="radio" v-bind:value="radioValue2" v-model="picked">부산</label>
        <label><input type="radio" v-bind:value="radioValue3" v-model="picked">제주</label>
        <br/>
        <span>라디오버튼 선택 지역 : {{picked}} </span>
        <br/>
        <br/>
        <br/>
        <img v-bind:src="imgSrc"/>
    </div>
    <div>
    <input type="text" v-model="textValue"/>
    <button type="button" v-bind:disabled="textValue==''">Click</button>
    </div>
   <!--클래스 바인딩.1 -->
    <div class="container" v-bind:class="{
        'active': isActive, 'text-red': hasError
    }">Class Binding</div>
    <!--클래스 바인딩.2 : 배열을 사용하여 클래스 바인딩 -->
    <div class="container" v-bind:class="[activeClass,errorClass]">Class Binding</div>
     <!--인라인 스타일 바인딩 -->
     <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
     <!--인라인 스타일 바인딩: 배열을 사용하여 클래스 바인딩 -->
     <div v-bind:style="[baseStyle,addStyle]">인라인 스타일 바인딩</div>

     <!--Data List Binding  : v-for = for문 -->
     <br/>
     <br/>
     <table>
        <thead>
            <tr>
                <th>제품명</th>
                <th>가격</th>
                <th>카테고리</th>
                <th>배송료</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="i" v-for="(product,i) in productList">
                 <td>{{product.product_name}}</td>
                 <td>{{product.price}}</td>
                 <td>{{product.category}}</td>
                 <td>{{product.delivery_price}}</td>
            </tr>
        </tbody>
     </table>
     <!--
         v-if, v-show : 조건문
        * v- if: 조건 만족시, html 블록이 생성됨.
        * v- show: 조건에 상관없이 무조건 html 블록이 생성됨.(무조건 랜더링됨, 조건을 만족하지 않으면 화면에서 숨기도록 처리가 됨.)
        -토글이 자주 일어나는 이벤트라면, v-show 추천
     -->
     <div>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-if="type=='B'">B</h1>
        <h1 v-else >C</h1>
     </div>
</template>
<script>
export default {
  data () {
    return {
      valueModel: 'South Korea',
      numberModel: 3,
      message: '여러줄을 입력할 수 있는  textarea 입니다.',
      city: '064',
      checked: true,
      checkedList: [],
      picked: '',
      radioValue1: '서울',
      radioValue2: '부산',
      radioValue3: '제주',
      imgSrc: 'data:image/png;base64,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',
      textValue: '',
      isActive: true,
      hasError: false,
      activeClass: 'active',
      errorClass: 'text-red',
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      baseStyle: 'background-color:yellow; width:100%;height: 200px;',
      addStyle: 'color:red;font-weight:bold;',
      productList: [
        { product_name: '기계식키보드', price: 25000, category: '노트북/태블릿', delivery_price: 5000 },
        { product_name: '기계식키보드', price: 25000, category: '노트북/태블릿', delivery_price: 5000 },
        { product_name: '기계식키보드', price: 25000, category: '노트북/태블릿', delivery_price: 5000 },
        { product_name: '기계식키보드', price: 25000, category: '노트북/태블릿', delivery_price: 5000 },
        { product_name: '기계식키보드', price: 25000, category: '노트북/태블릿', delivery_price: 5000 }
      ],
      type: 'A'
    }
  }
}
</script>
<style scoped>
    .container{
        width: 100%;
        height: 200px;
    }
    .active{
        background-color: yellow;
        font-weight: bold;;
    }
    .text-red{
        color:red;
    }
    table{
       font-family: arial,sans-serif;
       border-collapse: collapse;
       width: 100%;
    }
    td,th{
        border: 1px solid #dddd;
        text-align: left;
        padding: 8px;
    }
</style>
