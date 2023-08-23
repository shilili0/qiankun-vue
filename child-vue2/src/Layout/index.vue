<template>
  <a-layout class="layout-wrap">
    <a-layout-sider width="300" v-model="collapsed" :trigger="null" collapsible class="menus-wrap">
      <div class="logo" >vue2</div>
      <a-menu theme="dark" mode="inline">
        <a-menu-item 
          v-for="menu in menus" :key="menu.value" 
          @click="gotoMenu(menu)"
          >
          <a-icon type="user" />
          <span>{{ menu.name }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout class="content-wrap">
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
      <router-view ></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>

export default {
  data() {
    return {
      collapsed: false,
      menus:[
        {name: 'v2-自定义指令-direction', value:'v2-direction',path: 'v2-direction'},
        
      ]
    };
  },
  methods:{
    gotoMenu(menu){
      if(menu){
        this.$router.push({
          name: menu.path
        })
      }
    }
  }
};
</script>
<style>
.layout-wrap{
  width: 100%;
  height: 100vh;
}
.layout-wrap .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.layout-wrap .trigger:hover {
  color: #1890ff;
}

.layout-wrap .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
}
.menus-wrap{
  width: 300px;
  font-size: 16px;
}
.content-wrap{
  flex: 1;
}
</style>
