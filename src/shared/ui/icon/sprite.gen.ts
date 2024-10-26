export interface SpritesMap {
  sprite: "logout-icon" | "new-chat-icon" | "sent-request-icon"
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string
        width: number
        height: number
      }
    >
  }
} = {
  sprite: {
    filePath: "sprite.eec335ee.svg",
    items: {
      "logout-icon": {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24
      },
      "new-chat-icon": {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24
      },
      "sent-request-icon": {
        viewBox: "0 0 32 32",
        width: 32,
        height: 32
      }
    }
  }
}
