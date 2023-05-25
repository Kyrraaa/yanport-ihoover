# iHoover Automatic Vacuum Cleaner

## Description

iHoover is a TypeScript project that implements an automatic vacuum cleaner. The vacuum cleaner is designed to traverse an entire given room, with its position represented by coordinates (x, y) and a letter indicating the orientation based on the English cardinal notation (N, E, W, S). A room is modeled as a rectangular grid.

To control the vacuum cleaner, a sequence of commands represented by a series of letters is sent to it. The possible commands are "D," "G," and "A." "D" and "G" rotate the vacuum cleaner 90° to the right or left, respectively, without moving it. "A" means it moves one square in the direction it is facing, without changing its orientation.

To program the vacuum cleaner, the following input data is provided:

- The instance of a room where the vacuum cleaner can work.
- The initial position and orientation of the vacuum cleaner.
- A series of instructions that the vacuum cleaner will execute.

Once the vacuum cleaner completes a series of instructions, it communicates its final position and orientation.

## Prerequisites

To run the iHoover project, you need to have the following installed on your system:

- Node.js (version 12 or above)
- Yarn package manager

## Installation

1. Clone the iHoover repository from GitHub.
2. Navigate to the project directory.
3. Run the following command to install the dependencies:

```shell
yarn install
```

## Testing
The iHoover project includes a comprehensive test suite to ensure its functionality. To run the tests, follow these steps:

1. Make sure you are in the project directory.
2. Run the following command:

```shell
yarn test
```