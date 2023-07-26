export default defineCachedEventHandler(
    async () => {
        const config = useRuntimeConfig()
        console.log(config);
    },
)
