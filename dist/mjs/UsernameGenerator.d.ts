type config = {
    separator: string;
    showEmoji: boolean;
    style: string;
    dictionary: string;
};
export declare class UsernameGenerator {
    separator: string;
    showEmoji: boolean;
    style: string;
    dictionary: string;
    constructor(config: config);
    generate(): string;
    applyStyle(text: string): string;
}
export {};
