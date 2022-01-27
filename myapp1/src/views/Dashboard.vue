<template>
    <div class="dashboard">
        <Sidebar/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
export default {
  name: 'home',

  components: {
    Sidebar
  }
}
</script>

<style>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color:#283b5a;
}

.content {
    background-color: white;
    border-radius: 10px;
    margin: 100px 6px 6px 0px;
}
</style>
