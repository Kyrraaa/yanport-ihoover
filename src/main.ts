import Orientation from "./enums/orientation"
import Room from "./objects/room"
import VacuumCleaner from "./objects/vacuumCleaner"

function init() {
    // Initialize a room
    const room: Room = new Room(10, 10)

    // Initialize a vacuum cleaner and associate it to a room 
    const vacuumCleaner: VacuumCleaner = new VacuumCleaner(room, Orientation.N, 5, 5)

    // A series of instructions that the vacuum cleaner should perform
    const instructions: string[] = "DADADADAA".split('')

    // Sends the instructions to be performed to the vacuum cleaner 
    vacuumCleaner.execute(instructions)
}

init()