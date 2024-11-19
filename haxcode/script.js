let func = () => {

    let randomnum = Math.floor(Math.random() * 16777215);
    let haxcolor = "#" + randomnum.toString(16);
    document.body.style.backgroundColor = haxcolor;
  let code= document.querySelector("h2").innerHTML= ("background color: ")+haxcolor;

}
// func()
document.querySelector(".container");

document.querySelector("#btn").addEventListener("click", ()=>{
    func(),()=>{
        code;
    }
})
