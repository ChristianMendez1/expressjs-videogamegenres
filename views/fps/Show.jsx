const React = require('react')
class Show extends React.Component {
  render () {
   const fps = this.props.fps
    return (
      <div>
      <h1>{fps.name}</h1>
        {fps.name} was made by {fps.company}. 
        {fps.multiplayer 
            ? ` This is a online multiplayer game.`
            : ` This game is not online or multiplayer.`}
            <br></br><br></br>
        <a href="/fps"> back </a>
      </div>
      );
     }
   }
  module.exports  = Show;