Pinger =
  init: ->    
  Parse.initialize("F7nlxZwxA130dKHUp12xCdZPSa9Dv82rz1V8hmhZ", "oogdBxHwClJvdk16qehVepDMOcEH1OZsTVCdBNUZ");
  Ping = Parse.Object.extend("Ping");
  pingObject = new Ping();
  pingObject.save({foo: "bar"}).then((object)  ->
  console.log("yay! it worked");

$ ->
  $('#sendMailer').click ->
    Pinger.init()