let para = document.getElementById("para");
let btn = document.getElementById("btn");
const URL = "https://catfact.ninja/fact";
async function getFact() {
    let promise = await fetch(URL);
    let result = await promise.json();
    para.innerText = result.fact;
}
btn.addEventListener('click', () => {
    getFact();
})