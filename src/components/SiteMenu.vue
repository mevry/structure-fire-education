<template>
<div class="container-fluid text-center py-3">
<p>Select an activity below to get started</p>
    <div class="d-flex justify-content-around pt-3">
        <div class="">
            <router-link to="/jeopardy" tag="div" class="activity-link mx-1">
                <h1>Jeopardy</h1>
                <img src="../img/250x300.png" />
            </router-link>
        </div>
        <div class="">
            <router-link to="/drag-drop" tag="div" class="activity-link mx-1">
                <h1>Drag &amp; Drop</h1>
                <img src="../img/250x300.png" />
            </router-link>
        </div>
        <div class="">
            <router-link to="/memory" tag="div" class="activity-link mx-1">
                <h1>Memory</h1>
                <img src="../img/250x300.png" />
            </router-link>
        </div>
    </div>
    <div class="d-flex justify-content-around pt-5">
        <div class="">
            <router-link to="/printables" tag="div" class="activity-link mx-1">
                <h1>Printables</h1>
                <img src="../img/250x300.png" />
            </router-link>
        </div>
        <div class="">
            <router-link to="/resources" tag="div" class="activity-link mx-1">
                <h1>Resources</h1>
                <img src="../img/250x300.png" />
            </router-link>
        </div>
        <div class="">
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
  name: 'site-menu'
};
</script>
<style lang="scss" scoped>
    .activity-link {
        cursor: pointer;
    }

</style>


