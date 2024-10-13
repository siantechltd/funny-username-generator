type config = {
    separator: string;
    showEmoji: boolean;
};
export declare class UsernameGenerator {
    separator: string;
    showEmoji: boolean;
    constructor(config: config);
    generate(): string;
}
export {};
