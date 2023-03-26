
let func = async () => {
    let data = await axios.get('https://dummyjson.com/products/')
    console.log(data.data)
}
func()