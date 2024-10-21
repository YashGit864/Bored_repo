(async () => {
    try {
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        const result = response.data;
        document.querySelector(".card-activity").innerText = result.activity;
    } catch (error) {
        console.error("Failed to make request:", error.message);
    }
})();

document.querySelector(".form-submit").onclick = filterActivity;

async function filterActivity() {
    event.preventDefault();
    const type = document.querySelector('select[name="type"]').value;
    const participants = document.querySelector('select[name="participants"]').value;

    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
    const result = response.data[0];
    // console.log(result.activity);
    document.querySelector(".card-activity").innerText = result.activity;
}
