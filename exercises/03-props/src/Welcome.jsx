function Welcome ({ name }) {
    if (name) {
        return <h1>Welcome {name}</h1>;
    } else {
        return <h1>Welcome user</h1>;
    }
}

export default Welcome;