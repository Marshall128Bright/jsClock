function run(){
    setInterval(()=>{
        const time = new Date()
        document.getElementById("clock").innerHTML = `${time.getHours()} : ${time.getMinutes()}.${time.getSeconds()}` 
    },1000)
}