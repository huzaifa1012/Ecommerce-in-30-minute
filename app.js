let hero = document.getElementById('hero')

function buy() {
    alert('wowo')
}



let func = async () => {
    let response = await axios.get('https://dummyjson.com/products/')
    let data = response.data.products
    console.log(data)
    data.map((data) => {
        return (
            hero.innerHTML += `<div class="cardMain">
            <div class="card">
                <img src="${data.images[2]}">
                <div class="card-down">
                    <h3>${data.title.slice(0, 10)}</h3>
                    <h3> $${data.price}</h3>
                </div>
                <button onclick="buy()">Buy Now</button>
            </div>
            </div>`
        )
    }
    )

}
func()

window.buy = buy
