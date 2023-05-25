import Orientation from "../enums/orientation"
import Room from "./room"

class VacuumCleaner {

    /**
     * @private
     * @type {number}
     */
    private _x: number

    /**
     * @private
     * @type {number}
     */
    private _y: number

    /**
     * @private
     * @type {Orientation}
     */
    private _orientation: Orientation

    /**
     * @private
     * @type {Room}
     */
    private _room: Room

    /**
     * Initialize the default position and orientation of the vacuum cleaner
     * @constructor
     * @param {Room} room - Define the room of the vacuum cleaner
     * @param {Orientation} orientation - Define the orientation of the vacuum cleaner
     * @param {number} x - Define the default value of 'x' to 0
     * @param {number} y - Define the default value of 'y' to 0
     */
    constructor(room: Room, orientation?: Orientation, x?: number, y?: number) {
        this._x = x ? x : 0
        this._y = y ? y : 0
        this._orientation = orientation ? orientation : Orientation.N
        this._room = room
    }

    /**
     * @return {number} - Retrieve the value of the 'x' axis
     */
    public get x(): number {
        return this._x
    }
    
    /**
     * @param {number} x - The new value of the 'x' axis
     * @throws {Error} - 'x' axis should be positive and not greater than the 'x' axis of the room
     */
    public set x(x: number) {
        if (x > this._room.x) {
            throw new Error("The submitted 'x' axis of the vacuum cleaner cannot be greater than the 'x' axis of the room")
        }

        if (x < 0) {
            throw new Error("The submitted 'x' axis of the vacuum cleaner can't be negative");
        }

        this._x = x
    }
    
    /**
     * @return {number} - Retrieve the value of the 'y' axis
     */
    public get y(): number {
        return this._y
    }
    
    /**
     * @param {number} y - The new value of the 'y' axis
     * @throws {Error} - 'y' axis should be positive and not greater than the 'y' axis of the room
     */
    public set y(y: number) {
        if (y > this._room.y) {
            throw new Error("The submitted 'y' axis of the vacuum cleaner cannot be greater than the 'y' axis of the room")
        }

        if (y < 0) {
            throw new Error("The submitted 'y' axis of the vacuum cleaner can't be negative");
        }

        this._y = y
    }

    /**
     * @return {Orientation} - Get the orientation of the vacuum cleaner
     */
    public get orientation(): Orientation {
        return this._orientation
    }
    
    /**
     * @param {Orientation} orientation - Define the new orientation of the vacuum cleaner
     */
    public set orientation(orientation: Orientation) {
        this._orientation = orientation
    }
    
    /**
     * @return {Room} - Get the room of the vacuum cleaner
     */
    public get room(): Room {
        return this._room
    }

    /**
     * @param {Room} room - The new room 
     * @throws {Error} - The current 'x' or 'y' axes of the vacuum cleaner are greater than the axes of the new room
     */
    public set room(room: Room) {
        if (this.x > room.x) {
            throw new Error("The current 'x' axis of the vacuum cleaner is greater than the 'x' axis of the new room");
        }

        if (this.y > room.y) {
            throw new Error("The current 'y' axis of the vacuum cleaner is greater than the 'y' axis of the new room");
        }

        this._room = room;
    }

    /**
     * Rotate the vacuum cleaner to a certain degree
     * @param {number} degrees - Defines the degree of rotation
     */
    public rotate(degrees: number) {
        const orientations: Orientation[] = [Orientation.N, Orientation.E, Orientation.S, Orientation.W];
        const currentIndex = orientations.indexOf(this._orientation);
        const totalDegrees = orientations[currentIndex] + degrees;
        const normalizedDegrees = (totalDegrees + 360) % 360;

        let newIndex = 0;
        for (let i = 0; i < orientations.length; i++) {
            if (orientations[i] === normalizedDegrees) {
                newIndex = i;
                break;
            }
        }

        this._orientation = orientations[newIndex];
    }

    /**
     * Moves the vacuum cleaner according to its orientation
     * @private
     * @throws {Error} - Impossible to determine the mouvement to make of the vacuum cleaner
     */
    private move() {
        switch (this._orientation) {
            case Orientation.N:
                this.y += 1
                break;
            case Orientation.E:
                this.x += 1
                break;
            case Orientation.S:
                this.y -= 1
                break;
            case Orientation.W:
                this.x -= 1
                break;
            default:
                throw new Error("Unable to determine where to move the vacuum cleaner");
        }
    }
    
    /**
     * Return informations of the current instance
     * @return {string} - position and orientation of the current instance
     */
    toString = (): string => {
        return `The instructions have been performed correctly\n\n`+
        `Position => x: ${this._x}, y: ${this._y}\n`+
        `Orientation => Cardinal Point: ${Orientation[this._orientation]}, Degrees: ${this._orientation}°`
    }

    /**
     * Execute the instructions given by the user
     * @param {string[]} instructions - An array containing the vacuum cleaner action to perform in order
     * @throws {Error} - Instruction does not exist, possible instructions are 'A', 'D' and 'G'
     */
    execute(instructions: string[]): boolean | void {
        for (const instruction of instructions) {
            switch (instruction) {
                case 'A':
                    this.move()
                    break;
                case 'D':
                    this.rotate(90)
                    break
                case 'G':
                    this.rotate(-90)
                    break
                default:
                    throw new Error(`Instruction '${instruction}' does not exist, possible instructions are 'A', 'D' and 'G'`);
            }
        }
        console.log(this.toString());
    }
}

export default VacuumCleaner