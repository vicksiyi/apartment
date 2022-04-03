<template>
  <div class="device-type">
    <el-table :data="tableData" height="400" border style="width: 100%">
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="title" label="名称"> </el-table-column>
      <el-table-column prop="mobile" label="联系"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="images" label="图片" width="80">
        <el-button type="success" @click="show" size="mini">查看</el-button>
      </el-table-column>
      <el-table-column prop="devices" label="配套设施">
        <template slot-scope="scope">
          <el-tag
            v-for="item in scope.row.devices"
            :key="item"
            type="success"
            >{{ item }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="money" label="价格"> </el-table-column>
      <el-table-column prop="msg" label="公寓描述" width="80">
        <template slot-scope="scope">
          <el-popover
            placement="top-start"
            width="200"
            trigger="hover"
            :content="scope.row.msg"
          >
            <el-button type="primary" size="mini" slot="reference">显示</el-button>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="warning" @click="edit" size="mini">修改</el-button>
          <el-button type="danger" size="mini">下架</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Show",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03 22:22:00",
          title: "整租 | 松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9",
          mobile: "1333888888",
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFiF-XDX3xRHUVIW0VNHij00XFMX82xvQJg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFiF-XDX3xRHUVIW0VNHij00XFMX82xvQJg&usqp=CAU",
          ],
          devices: [
            "免费WIFI",
            "热水供给",
            "免费WIFI",
            "热水供给",
            "免费WIFI",
            "热水供给",
            "免费WIFI",
            "热水供给",
          ],
          address: "上海市普陀区金沙江路 1518 弄",
          money: "1200-2000",
          msg: "【交通出行】 小区交通出行便利，出门往东有昌盛园二区东门公交站，326路从南邵地铁站到朝凤庵村，也经过昌平东关地铁站。【周边配套】 小区周边配套齐全，有小吃店，便利店，蔬菜水果超市，公交站等配套设施健身场所。【小区介绍】 此房源位于昌盛园二区，小区有停车位，电动自行车车棚，出行便利",
        },
        {
          date: "2016-05-03 22:22:00",
          title: "整租 | 松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9",
          mobile: "1333888888",
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFiF-XDX3xRHUVIW0VNHij00XFMX82xvQJg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFiF-XDX3xRHUVIW0VNHij00XFMX82xvQJg&usqp=CAU",
          ],
          devices: ["免费WIFI", "热水供给"],
          address: "上海市普陀区金沙江路 1518 弄",
          money: "1200-2000",
          msg: "【交通出行】 小区交通出行便利，出门往东有昌盛园二区东门公交站，326路从南邵地铁站到朝凤庵村，也经过昌平东关地铁站。【周边配套】 小区周边配套齐全，有小吃店，便利店，蔬菜水果超市，公交站等配套设施健身场所。【小区介绍】 此房源位于昌盛园二区，小区有停车位，电动自行车车棚，出行便利",
        },
        {
          date: "2016-05-03 22:22:00",
          title: "整租 | 松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9",
          mobile: "1333888888",
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFiF-XDX3xRHUVIW0VNHij00XFMX82xvQJg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFiF-XDX3xRHUVIW0VNHij00XFMX82xvQJg&usqp=CAU",
          ],
          devices: ["免费WIFI", "热水供给"],
          address: "上海市普陀区金沙江路 1518 弄",
          money: "1200-2000",
          msg: "【交通出行】 小区交通出行便利，出门往东有昌盛园二区东门公交站，326路从南邵地铁站到朝凤庵村，也经过昌平东关地铁站。【周边配套】 小区周边配套齐全，有小吃店，便利店，蔬菜水果超市，公交站等配套设施健身场所。【小区介绍】 此房源位于昌盛园二区，小区有停车位，电动自行车车棚，出行便利",
        },
        {
          date: "2016-05-03 22:22:00",
          title: "整租 | 松南城芙蓉苑 3室2厅1卫 2700元月 电梯房 9",
          mobile: "1333888888",
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFiF-XDX3xRHUVIW0VNHij00XFMX82xvQJg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFiF-XDX3xRHUVIW0VNHij00XFMX82xvQJg&usqp=CAU",
          ],
          devices: ["免费WIFI", "热水供给"],
          address: "上海市普陀区金沙江路 1518 弄",
          money: "1200-2000",
          msg: "【交通出行】 小区交通出行便利，出门往东有昌盛园二区东门公交站，326路从南邵地铁站到朝凤庵村，也经过昌平东关地铁站。【周边配套】 小区周边配套齐全，有小吃店，便利店，蔬菜水果超市，公交站等配套设施健身场所。【小区介绍】 此房源位于昌盛园二区，小区有停车位，电动自行车车棚，出行便利",
        },
      ],
    };
  },
  methods: {
    edit() {
      this.$emit("show", true);
    },
    show() {
      this.$emit("showImage");
    },
  },
};
</script>


<style scoped>
</style>
