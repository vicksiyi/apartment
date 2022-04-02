import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Button, Select, Container, Header, Main, Footer, Link,
  Dropdown, DropdownMenu, DropdownItem, Avatar, Card, Row, Col,
  Pagination, Option, Carousel, CarouselItem, Form, FormItem, Input,
  Radio, Tabs, TabPane, Descriptions, DescriptionsItem, Tag,
  Timeline, TimelineItem, Switch, Table, TableColumn
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
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Descriptions)
Vue.use(DescriptionsItem)
Vue.use(Tag)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Switch)
Vue.use(Table)
Vue.use(TableColumn)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
