<template>
    <AMisRenderer :schema="schema" />
</template>

<script>
import AMisRenderer from "@/components/AMisRenderer.vue";
export default {
    name: "Advanced",
    components: {
        AMisRenderer
    },
    data() {
        return {
            schema: {
                type: 'page',
                title: 'Dashboard',
                body: 'body...'
            }
        };
    }
};
</script>
