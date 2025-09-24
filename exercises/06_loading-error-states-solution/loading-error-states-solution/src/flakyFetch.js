export default async function flakyFetch(url, options) {
    // Sleep for a bit to simulate loading.
    await new Promise(r => setTimeout(r, 1000));

    // Fail early (simulate network/server failure)
    let randomValue = Math.random() * 100;
    if (randomValue <= 32) {
        const data = { error: "Server error" };
        const blob = new Blob([JSON.stringify(data, null, 2)], {
            type: "application/json",
        });
        const init = { status: 500, statusText: "Server Error" };
        return new Response(blob, init);
    }
    randomValue = Math.random() * 100;
    if (randomValue <= 32) {
        throw new Error("Network request failed");
    }

    // Only if we "pass", make the real request
    if (options)
        options.headers = {
            'Content-Type': 'application/json'
        };
    return fetch(url, options);
}
