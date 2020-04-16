import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        name: 'SVELTE',
        lastname: '2020'
    }
});

export default app;