class HomeCinemaFacade {
  private player: MoviePlayer;
  private tv: TV;
  private lights: Lights;
  private sound: SoundSystem;

  constructor(player: MoviePlayer, tv: TV, lights: Lights, sound: SoundSystem) {
    this.player = player;
    this.tv = tv;
    this.lights = lights;
    this.sound = sound;
  }

  public startMovie() {
    this.player.on();
    this.lights.turnOff();
    this.tv.on();
    //this.sound.on();

    if (sound.powerState) {
      this.sound.setSource('player');
      this.sound.setVolume(5);
    } else console.log('Can not use Subwoofer. Turn it on!');
    if (player.powerState && tv.powerState && sound.powerState) {
      this.player.play();
    } else
      console.log(
        `Can not start movie! Check devices :\n TV : ${tv.powerState} \n Player : ${player.powerState}\n Subwoofer : ${sound.powerState}`
      );
  }
  public endMovie() {
    this.player.turnOff();
    this.lights.on();
    this.tv.turnOff();
    this.sound.turnOff();
  }
}

class MoviePlayer {
  public powerState = false;

  public on() {
    console.log('Movie player turning on...');
    this.powerState = true;
  }
  public turnOff() {
    console.log('Movie player turning off...');
    this.powerState = false;
  }
  public play() {
    console.log('Playing movie...');
  }
}

class TV {
  public powerState = false;

  public on() {
    console.log('TV turning on...');
    this.powerState = true;
  }
  public turnOff() {
    console.log('TV turning off...');
    this.powerState = false;
  }
}

class SoundSystem {
  public powerState = false;

  public on() {
    console.log('Subwoofer turning on...');
    this.powerState = true;
  }
  public turnOff() {
    console.log('Subwoofer turning off...');
    this.powerState = false;
  }
  public setSource(source: string) {
    console.log('Connecting sound system to ' + source);
  }
  public setVolume(volumeLevel: number) {
    console.log('Setting volume to ' + volumeLevel);
  }
}

class Lights {
  powerState = true;
  public on() {
    console.log('Lights turning on...');
    this.powerState = true;
  }
  public turnOff() {
    console.log('Lights turning off...');
    this.powerState = false;
  }
}

let player = new MoviePlayer();
let sound = new SoundSystem();
let tv = new TV();
let lights = new Lights();

let homeCinema = new HomeCinemaFacade(player, tv, lights, sound);
homeCinema.startMovie();
homeCinema.endMovie();
