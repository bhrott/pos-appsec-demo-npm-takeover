import postInstall from "./postinstall.js";

export default function app() {
    console.log("Hello World!");
    postInstall()
}

app()