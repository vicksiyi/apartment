import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/main';
import {
  Button, Select, Container, Header, Main, Footer, Link,
  Dropdown, DropdownMenu, DropdownItem, Avatar, Card, Row, Col,
  Pagination, Option, Carousel, CarouselItem, Form, FormItem, Input,
  Radio, Tabs, TabPane, Descriptions, DescriptionsItem, Tag,
  Timeline, TimelineItem, Switch, Table, TableColumn, TimeSelect,
  Notification, Aside, Menu, MenuItem, Submenu, MenuItemGroup,
  Drawer, CheckboxGroup, Checkbox, Upload, Dialog, Popover, Loading,
  Message,RadioGroup
} from 'element-ui';
Vue.config.productionTip = false
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$loading = Loading.service;
Vue.use(RadioGroup);
Vue.use(Loading.directive);
Vue.use(Popover)
Vue.use(CheckboxGroup)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Checkbox)
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
Vue.use(TimeSelect)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Drawer)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
