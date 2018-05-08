<template>
<div id="rootContainer" class="text-center p-5 visible-print-block">
    <h1>Certificate of Completion</h1>
    <h1 class="display-3">{{sharedStore.FirstName}} {{sharedStore.LastName}}</h1>
    <h2>has successfully completed the online <br>TFD Fire Safety Activities.</h2>
    <div class="row py-5">
        <div class="col-6 offset-3">
            <div class="row">
                <div class="col">
                    <img class="img-fluid" src="../img/jepGold.png" alt="150 placeholder">
                    <span>Jeopardy</span>    
                </div>
                <div class="col">
                    <img class="img-fluid" src="../img/dragBadge.png" alt="150 placeholder">
                    <span>Drag &amp; Drop</span>    
                </div>
                <div class="col">
                    <img class="img-fluid" src="../img/memBadge.png" alt="150 placeholder">
                    <span>Memory</span>    
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex">
        <span><strong>School:</strong> {{sharedStore.School}}</span>
        <span>{{new Date().getMonth()}}</span>
        <span class=""><strong>Teacher:</strong> {{sharedStore.Teacher}}</span>
    </div>
</div>
</template>
<script>
import store from '../store'
import badgePlaceholder from '../img/150x150.png' 
export default {
    data(){
        return{  
            name: 'certificate',
            sharedStore:store.state,
            badgePlaceholder
        }
    },
    computed:{
        date(){
            re
        }
    }
};
</script>
<style scoped>
    #rootContainer{
        border: solid 2px rgb(196, 15, 15);
        background-color: rgba(255,255,255,.9);
    }

</style>
