class Room {

    /**
     * @private
     * @type {number}
     */
    private readonly _x: number

    /**
     * @private
     * @type {number}
     */
    private readonly _y: number

    /**
     * Initialize a room with 'x' and 'y' axes
     * @constructor
     * @param {number} x - The maximum value of the 'x' axis of the room
     * @param {number} y - The maximum value of the 'y' axis of the room
     * @this {Room}
     */
    constructor(x: number, y: number) {
        this._x = x
        this._y = y
    }

    /**
     * @return {number} - Retrieve the value of the room 'x' axis
     * @this {Room}
     */
    public get x(): number {
        return this._x
    }

    /**
     * @return {number} - Retrieve the value of the room 'y' axis
     * @this {Room}
     */
    public get y(): number {
        return this._y
    }
}

export default Room