Vue.component('error', {
    data() {
        return {
            ErrorTitle: 'error server',
            visible: false,
        }
    },

    computed: {
        visError() {
            this.visible = true;
        }
    },

    template: `
            <div class="error" v-if="visible">
                <p>{{ErrorTitle}}</p>
            </div>`
});