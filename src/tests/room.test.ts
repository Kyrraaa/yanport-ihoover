import { expect, test } from '@jest/globals'

import Room from "../objects/room"

test('The room object properties', () => {
    const room = new Room(10, 10)

    expect(room).toHaveProperty('x')
    expect(room.x).toBe(10)

    expect(room).toHaveProperty('y')
    expect(room.y).toBe(10)
})