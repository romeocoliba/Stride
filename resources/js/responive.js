function dropdown() {
    let element = document.getElementById("drop-down")

    if (element.className === "drop-down inactive") {
        element.className = "drop-down active";
    } else {
        element.className = "drop-down inactive";
    }
}