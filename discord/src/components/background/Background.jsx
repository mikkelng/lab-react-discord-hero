import "./Background.css";
import background from "../../assets/discord-background.png"

function Background() {
  return (
      <div className='flex-container'>
      
          <img src={background}></img>
      
      </div>
  )
}

export default Background