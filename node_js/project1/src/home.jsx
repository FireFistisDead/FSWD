import img from './img2.png';
function Home(){
    var a = 10
    var b = 20
    var mycolor = {color : 'blue', backgroundColor : 'yellow'}
    return(
        <div>
            <h1 style={mycolor}>Hello Home!</h1>
            <p style = {{color : 'red', backgroundColor : 'green'}}>Hello</p>
            <p>A is {a}</p>
            <img src = {img}/>
        </div>

    )
}
export default Home