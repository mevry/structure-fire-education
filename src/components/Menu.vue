<template>
<div class="container-fluid text-center py-5">
    <h1>Menu Component</h1>
    <div class="row pt-5">
        <div class="col">
            <router-link to="/jeopardy" tag="div" class="activity-link mx-1">
                <h1>Jeopardy</h1>
                <img src="../img/250x300.png" />
            </router-link>
        </div>
        <div class="col">
            <router-link to="/drag-drop" tag="div" class="activity-link mx-1">
                <h1>Drag &amp; Drop</h1>
                <img src="../img/250x300.png" />
            </router-link>
        </div>
        <div class="col">
            <router-link to="/memory" tag="div" class="activity-link mx-1">
                <h1>Memory</h1>
                <img src="../img/250x300.png" />
            </router-link>
        </div>
    </div>
    <div class="row pt-5">
        <div class="col">
            <router-link to="/coloring" tag="div" class="activity-link mx-1">
                <h1>Coloring</h1>
                <img src="../img/250x300.png" />
            </router-link>
        </div>
        <div class="col">
            <router-link to="/resources" tag="div" class="activity-link mx-1">
                <h1>Resources</h1>
                <img src="../img/250x300.png" />
            </router-link>
        </div>
        <div class="col">
            <router-link to="/certificate" tag="div" class="activity-link mx-1">
                <h1>Certificate</h1>
                <img src="../img/250x300.png" />
            </router-link>
        </div>  
    </div>
</div>
</template>
<script>
export default {
  name: 'menu'
};
</script>
<style lang="scss" scoped>
    .activity-link {
        cursor: pointer;
    }
</style>


