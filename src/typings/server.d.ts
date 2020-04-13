declare class Server {
    static on(eventType: 'Start' | 'Stop' | 'Tick', action: () => void): void;
}