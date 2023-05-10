const React = require('react')
class Show extends React.Component {
  render () {
   const actionadventure = this.props.actionadventure
    return (
      <div>
      <h1>{actionadventure.name}</h1>
        {actionadventure.name} was made by {actionadventure.company}. 
        {actionadventure.multiplayer 
            ? ` This is a online multiplayer game.`
            : ` This game is not online or multiplayer.`}
            <br></br><br></br>
        <a href="/actionadventure"> back </a>
      </div>
      );
     }
   }
  module.exports  = Show;