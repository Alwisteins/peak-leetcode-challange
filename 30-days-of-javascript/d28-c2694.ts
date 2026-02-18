type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  private events: Map<string, Callback[]>;

  constructor() {
    this.events = new Map();
  }

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const callbacks = this.events.get(eventName)!;
    callbacks.push(callback);

    return {
      unsubscribe: () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1) {
          callbacks.splice(index, 1);
        }
        return undefined;
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (!this.events.has(eventName)) {
      return [];
    }

    const callbacks = this.events.get(eventName);
    const result: any[] = [];

    for (const cb of callbacks) {
      result.push(cb(...args));
    }

    return result;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
