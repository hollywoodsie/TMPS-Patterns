interface SocketPlug {
  name: string;
  voltage: number;
  orientation: boolean;
}

class SocketPlugUsa implements SocketPlug {
  public name = 'US-Socket-Plug';
  public voltage: 120 = 120;
  public orientation = true;
}

class SocketPlugEu implements SocketPlug {
  public name = 'EU-Socket-Plug';
  public voltage: 220 = 220;
  public orientation = false;
}

abstract class SocketClient<T extends SocketPlug> {
  constructor(protected plug: T) {}

  public plugin(plug: T) {
    if (
      plug.voltage !== this.plug.voltage ||
      plug.orientation !== this.plug.orientation
    ) {
      console.error(
        `Failed to connect ${plug.name} with ${this.plug.name}.\nExpected : ${this.plug.voltage} V Got : ${plug.voltage} V\nExpected Orientation : ${this.plug.orientation} Got : ${plug.orientation}`
      );
      return;
    }
    console.log(
      `Successfully connected ${plug.name} to ${this.plug.name} with ${plug.voltage} V and ${plug.orientation} orientation!`
    );
  }
}

class SocketClientUsa extends SocketClient<SocketPlugUsa> {
  constructor() {
    super({ voltage: 120, name: 'US-Socket', orientation: true });
  }
}

class SocketClientEu extends SocketClient<SocketPlugEu> {
  constructor() {
    super({ voltage: 220, name: 'EU-Socket', orientation: false });
  }
}

class EuToUsAdapter implements SocketPlugUsa {
  public voltage!: 120;
  public name!: string;
  public orientation!: boolean;

  constructor({ name }: SocketPlugEu) {
    this.name = name;
    this.voltage = 120;
    this.orientation = true;
    console.log(`Adapt ${name} connector to a US-connector.`);
  }
}

const euPowerSocket = new SocketClientEu();
const usPowerSocket = new SocketClientUsa();
const euPlugAdaptee = new SocketPlugEu();
const usPlugAdaptee = new SocketPlugUsa();

euPowerSocket.plugin(euPlugAdaptee);
usPowerSocket.plugin(usPlugAdaptee);

usPowerSocket.plugin(new EuToUsAdapter(euPlugAdaptee));
