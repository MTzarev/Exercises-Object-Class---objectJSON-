function objectJSON(json) {
    let newObj = JSON.parse(json);
    let entries = Object.entries(newObj);
    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }

    console.log();
}
objectJSON('{"name": "George", "age": 40, "town": "Sofia"}');