<template>
<div class="container-fluid text-center py-3">
<h3 class="neon-yellow">Select an activity below to get started</h3>
    <div class="d-flex justify-content-around mt-3 pt-3">
        <div class="mx-2">
            <router-link to="/jeopardy" tag="div" class="activity-link mx-1" >
                <!-- <h1>Jeopardy</h1> -->
                <img class="img-fluid rounded shadow" style="border:4px solid #8c52c6;" src="../img/jeopardyattempt.gif" />
            </router-link>
        </div>
        <div class="mx-2">
            <router-link to="/drag-drop" tag="div" class="activity-link mx-1">
                <!-- <h1>Drag &amp; Match</h1> -->
                <img class="img-fluid rounded shadow" style="border:4px solid #cead49;" src="../img/dragattempt.gif" />
            </router-link>
        </div>
        <div class="mx-2">
            <router-link to="/memory" tag="div" class="activity-link mx-1">
                <!-- <h1>Memory</h1> -->
                <img class="img-fluid rounded shadow" style="border:4px solid #689f4b;" src="../img/memoryattempt.gif" />
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
h1{
    color: white;
    margin-bottom: 0;
}

</style>


