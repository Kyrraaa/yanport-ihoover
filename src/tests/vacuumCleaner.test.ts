import { expect, test } from '@jest/globals'

import Orientation from "../enums/orientation"
import Room from "../objects/room"
import VacuumCleaner from "../objects/vacuumCleaner"

test('The vacuum cleaner object properties', () => {
    const room = new Room(10, 10)
    const vacuum = new VacuumCleaner(room, Orientation.N, 5, 5)

    expect(vacuum).toHaveProperty('room')
    expect(vacuum.room).toBe(room)

    expect(vacuum).toHaveProperty('x')
    expect(vacuum.x).toBe(5)

    expect(vacuum).toHaveProperty('y')
    expect(vacuum.y).toBe(5)

    expect(vacuum).toHaveProperty('orientation')
    expect(vacuum.orientation).toBe(Orientation.N)
})

test('The vacuum cleaner execute instructions', () => {
    const room = new Room(10, 10)
    const vacuum = new VacuumCleaner(room, Orientation.N, 5, 5)
    let instructions = "DADADADAA".split('')
    vacuum.execute(instructions)

    expect(vacuum).toHaveProperty('x')
    expect(vacuum.x).toBe(5)

    expect(vacuum).toHaveProperty('y')
    expect(vacuum.y).toBe(6)

    expect(vacuum).toHaveProperty('orientation')
    expect(vacuum.orientation).toBe(Orientation.N)

    instructions = "G".split('')
    vacuum.execute(instructions)
    expect(vacuum.orientation).toBe(Orientation.W)

    instructions = "D".split('')
    vacuum.execute(instructions)
    expect(vacuum.orientation).toBe(Orientation.N)
})

test('The vacuum cleaner throw an error if it tries to go outside of the room', () => {
    const room = new Room(10, 10)
    const vacuum = new VacuumCleaner(room, Orientation.N, 5, 5)
    let instructions = "AAAAAA".split('')

    expect(() => {
        vacuum.execute(instructions)
    }).toThrowError()

    instructions = "DAAAAAA".split('')
    expect(() => {
        vacuum.execute(instructions)
    }).toThrowError()
})

test('The vacuum cleaner throw an error if placed at negative coordinates', () => {
    const room = new Room(10, 10)
    const vacuum = new VacuumCleaner(room, Orientation.N, 5, 5)

    expect(() => {
        vacuum.x = -1
    }).toThrowError()

    expect(() => {
        vacuum.y = -1
    }).toThrowError()
})

test('The vacuum cleaner rotates in the right direction', () => {
    const room = new Room(10, 10)
    const vacuum = new VacuumCleaner(room, Orientation.N, 5, 5)

    expect(vacuum.orientation).toBe(Orientation.N)

    vacuum.rotate(90)
    expect(vacuum.orientation).toBe(Orientation.E)

    vacuum.rotate(90)
    expect(vacuum.orientation).toBe(Orientation.S)

    vacuum.rotate(90)
    expect(vacuum.orientation).toBe(Orientation.W)

    vacuum.rotate(90)
    expect(vacuum.orientation).toBe(Orientation.N)

    vacuum.rotate(-180)
    expect(vacuum.orientation).toBe(Orientation.S)

    vacuum.rotate(-90)
    expect(vacuum.orientation).toBe(Orientation.E)
})