<template>
<div class="container-fluid text-center py-3">
<h3>Select an activity below to get started</h3>
    <div class="d-flex justify-content-around mt-3 pt-3">
        <div class="activity-item-wrapper">
            <router-link to="/jeopardy" tag="div" class="activity-link mx-1">
                <h1>Jeopardy</h1>
                <img src="../img/jepBadge.png" />
            </router-link>
        </div>
        <div class="">
            <router-link to="/drag-drop" tag="div" class="activity-link mx-1">
                <h1>Drag &amp; Match</h1>
                <img src="../img/dragBadge.png" />
            </router-link>
        </div>
        <div class="">
            <router-link to="/memory" tag="div" class="activity-link mx-1">
                <h1>Memory</h1>
                <img src="../img/memBadge.png" />
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
h1,h3{
    color: white;
    margin-bottom: 0;
}
</style>


