var HomeCinemaFacade = /** @class */ (function () {
    function HomeCinemaFacade(player, tv, lights, sound) {
        this.player = player;
        this.tv = tv;
        this.lights = lights;
        this.sound = sound;
    }
    HomeCinemaFacade.prototype.startMovie = function () {
        this.player.on();
        this.lights.turnOff();
        this.tv.on();
        //this.sound.on();
        if (sound.powerState) {
            this.sound.setSource('player');
            this.sound.setVolume(5);
        }
        else
            console.error('Can not use Subwoofer. Turn it on!');
        if (player.powerState && tv.powerState && sound.powerState) {
            this.player.play();
        }
        else
            console.log("Can not start movie! Check devices :\n TV : ".concat(tv.powerState, " \n Player : ").concat(player.powerState, "\n Subwoofer : ").concat(sound.powerState));
    };
    HomeCinemaFacade.prototype.endMovie = function () {
        this.player.turnOff();
        this.lights.on();
        this.tv.turnOff();
        this.sound.turnOff();
    };
    return HomeCinemaFacade;
}());
var MoviePlayer = /** @class */ (function () {
    function MoviePlayer() {
        this.powerState = false;
    }
    MoviePlayer.prototype.on = function () {
        console.log('Movie player turning on...');
        this.powerState = true;
    };
    MoviePlayer.prototype.turnOff = function () {
        console.log('Movie player turning off...');
        this.powerState = false;
    };
    MoviePlayer.prototype.play = function () {
        console.log('Playing movie...');
    };
    return MoviePlayer;
}());
var TV = /** @class */ (function () {
    function TV() {
        this.powerState = false;
    }
    TV.prototype.on = function () {
        console.log('TV turning on...');
        this.powerState = true;
    };
    TV.prototype.turnOff = function () {
        console.log('TV turning off...');
        this.powerState = false;
    };
    return TV;
}());
var SoundSystem = /** @class */ (function () {
    function SoundSystem() {
        this.powerState = false;
    }
    SoundSystem.prototype.on = function () {
        console.log('Subwoofer turning on...');
        this.powerState = true;
    };
    SoundSystem.prototype.turnOff = function () {
        console.log('Subwoofer turning off...');
        this.powerState = false;
    };
    SoundSystem.prototype.setSource = function (source) {
        console.log('Connecting sound system to ' + source);
    };
    SoundSystem.prototype.setVolume = function (volumeLevel) {
        console.log('Setting volume to ' + volumeLevel);
    };
    return SoundSystem;
}());
var Lights = /** @class */ (function () {
    function Lights() {
        this.powerState = true;
    }
    Lights.prototype.on = function () {
        console.log('Lights turning on...');
        this.powerState = true;
    };
    Lights.prototype.turnOff = function () {
        console.log('Lights turning off...');
        this.powerState = false;
    };
    return Lights;
}());
var player = new MoviePlayer();
var sound = new SoundSystem();
var tv = new TV();
var lights = new Lights();
var homeCinema = new HomeCinemaFacade(player, tv, lights, sound);
homeCinema.startMovie();
homeCinema.endMovie();
