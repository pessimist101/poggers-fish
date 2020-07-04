async function handleRequest() {
    const init = {
        headers: {
            'content-type': 'text/html;charset=UTF-8',
        },
    }
    return new Response(someHTML, init)
}
addEventListener('fetch', event => {
    return event.respondWith(handleRequest())
})
const someHTML = `insert html`