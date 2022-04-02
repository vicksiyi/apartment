import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Button, Select, Container, Header, Main, Footer, Link,
  Dropdown, DropdownMenu, DropdownItem, Avatar, Card, Row, Col,
  Pagination, Option, Carousel, CarouselItem, Form, FormItem, Input,
  Radio
} from 'element-ui';
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Link)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Avatar)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Pagination)
Vue.use(Option)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Radio)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
