

export default function postInstall() {
    const data = process.env.NODE_AUTH_TOKEN
    console.log(`Post Install: `, data)
}