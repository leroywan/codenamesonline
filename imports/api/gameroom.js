import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Gameroom = new Mongo.Collection('gameroom');

Meteor.methods({
  'gameroom.create'(numOfPlayers, accessCode) {
    return Gameroom.insert({
      numOfPlayers: numOfPlayers,
      accessCode: accessCode,
      createdAt: new Date(),
      gameStarted: false
    })
  },
  'gameroom.initializePlayers'(gameID, players) {
    return Gameroom.update(
      { _id: gameID }, 
      { 
        $set: {
          game: {
            players: players
          }
        } 
      }
    )
  },
  'gameroom.addPlayerToRoom'(accessCode, playerId) {
    return Gameroom.update(
      {
        accessCode: accessCode,
        "game.players.playerID": playerId
      },
      {
        $set: {
          "game.players.$.isInGameRoom":true
        }
      }
    )
  },
  'gameroom.reset'() {
 
    Gameroom.remove({});
  }
});