import { Hono } from 'hono';
const app = new Hono();
app.get("/text", (c) => c.text("Hello, World!"));
app.get("/page", (c) => c.html(`
    <h1>Hello, ${c.req.query("name") ?? "user"}!</h1>
    <p>This is a learning project.</p>
`));
app.get("/json/:text", (c) => {
    const req = c.req.param("text") ?? "dummy";
    const upper = req.toUpperCase();
    return c.json({ req, upper });
});
export default app;