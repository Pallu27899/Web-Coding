let id;
async function getdata() {
    try {
        let query = document.querySelector("#query").value
        let url = `https://swapi.dev/api/people/?search=${query}`;
        let res = await fetch(url)
        let data = await res.json()
        return data.results
        console.log(data)
    } catch (err) {
        console.log(err)
    }

}

function append(data) {
    let results = document.querySelector("#results")
    results.innerHTML = null
    data.forEach(function (elem) {
        let p = document.createElement("p")
        p.innerText = elem.name
        results.append(p)
    })
}

async function main() {
    let data = await getdata()
    append(data)
}

function debouncing(func, delay) {
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(function () {
        func();
    }, delay)

}
