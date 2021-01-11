import { Room } from "./types";

export const rooms: { [roomId: string]: Room } = {
    bar: {
        id: "bar",
        scale: 1,
        size: { x: 9, y: 9 },
        originCoordinates: { x: 0, y: 660 },
        spawnPoint: { x: 8, y: 4, direction: "left" },
        backgroundImageUrl: "rooms/bar/background.png",
        backgroundColor: "#c0c0c0",
        objects: [
            { x: 2, y: 1, url: "table.png" },
            { x: 2, y: 2, url: "table.png" },
            { x: 6, y: 1, url: "table.png" },
            { x: 6, y: 2, url: "table.png" },
            { x: 2, y: 7, url: "counter_left.png" },
            { x: 2, y: 6, url: "counter_left.png" },
            { x: 2, y: 5, url: "counter_bottom_left.png" },
            { x: 3, y: 5, url: "counter_bottom.png" },
            { x: 4, y: 5, url: "counter_bottom.png" },
            { x: 5, y: 5, url: "counter_bottom.png" },
            { x: 6, y: 7, url: "counter_right.png" },
            { x: 6, y: 6, url: "counter_right.png" },
            { x: 6, y: 5, url: "counter_bottom_right.png" },
        ],
        sit: [
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 3, y: 1 },
            { x: 3, y: 2 },
            { x: 5, y: 1 },
            { x: 5, y: 2 },
            { x: 7, y: 1 },
            { x: 7, y: 2 },
            { x: 1, y: 5 },
            { x: 1, y: 6 },
            { x: 1, y: 7 },
            { x: 2, y: 4 },
            { x: 3, y: 4 },
            { x: 4, y: 4 },
            { x: 5, y: 4 },
            { x: 6, y: 4 },
            { x: 7, y: 5 },
            { x: 7, y: 6 },
            { x: 7, y: 7 }
        ],
        blocked: [
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 6, y: 1 },
            { x: 6, y: 2 },
            { x: 2, y: 5 },
            { x: 3, y: 5 },
            { x: 4, y: 5 },
            { x: 5, y: 5 },
            { x: 6, y: 5 },
            { x: 2, y: 6 },
            { x: 2, y: 7 },
            { x: 6, y: 6 },
            { x: 6, y: 7 },
            { x: 1, y: 8 },
            { x: 2, y: 8 },
            { x: 3, y: 8 },
            { x: 4, y: 8 },
            { x: 5, y: 8 },
            { x: 6, y: 8 },
            { x: 7, y: 8 },
        ],
        forbiddenMovements: [],
        doors: [
            // [[0, 0], "bar_st", [1, 7], 1],
            // [[3, 7], "underground", [0, 2], 1],
            // [[8, 4], "bar_st", [3, 5], 1]
            { x: 8, y: 4, targetRoomId: "admin_st", targetX: 0, targetY: 2 }
        ],
        streams: [
            { isActive: false, isReady: false, withSound: null, withVideo: null, userId: null },
            { isActive: false, isReady: false, withSound: null, withVideo: null, userId: null },
        ],
    },
    admin_st: {
        id: "admin_st",
        scale: 160 / 200,
        size: { x: 10, y: 9 },
        originCoordinates: { x: 18, y: 614 },
        spawnPoint: { x: 5, y: 2, direction: "right" },
        backgroundImageUrl: "rooms/admin_st/background.png",
        backgroundColor: "#c0c0c0",
        objects: [
            { x: 1, y: 5, url: "house1.svg", scale: 2.5, xOffset: -1, yOffset: 58 },
            { x: 1, y: 5, url: "house2.svg", scale: 2.5, xOffset: -1, yOffset: 58 },
            { x: 5, y: 4, url: "trash-bin1.svg", scale: 2.5, xOffset: 2, yOffset: -15 },
            { x: 5, y: 4, url: "trash-bin2.svg", scale: 2.5, xOffset: 12, yOffset: -18 },
            { x: 5, y: 7, url: "go-table.svg", scale: 2.5, xOffset: 10, yOffset: -7 },
            { x: 5, y: 6, url: "chair.svg", scale: 2.5, xOffset: 28, yOffset: -18 },
            { x: 5, y: 8, url: "chair.svg", scale: 2.5, xOffset: 28, yOffset: -18 },

            { x: 6, y: 5, url: "boom-barrier.svg", scale: 2.5, xOffset: -1, yOffset: -10 },
            { x: 9, y: 4, url: "funkyboon.svg", scale: 2.5, xOffset: 5, yOffset: -8 },
        ],
        sit: [],
        blocked: [
            // { x: 0, y: 5 },
            { x: 1, y: 5 },
            { x: 2, y: 5 },
            { x: 3, y: 5 },
            { x: 4, y: 5 },
            { x: 5, y: 5 },
            { x: 5, y: 4 },
            { x: 6, y: 5 },
            { x: 7, y: 5 },
            { x: 8, y: 5 },
            { x: 9, y: 5 },
            { x: 9, y: 4 },
        ],
        forbiddenMovements: [],
        doors: [
            { x: 0, y: 2, targetRoomId: "bar", targetX: 8, targetY: 4 },
            { x: 2, y: 4, targetRoomId: "admin", targetX: 10, targetY: 0 },
            { x: 7, y: 4, targetRoomId: "radio_backstage", targetX: 2, targetY: 4 },
            { x: 7, y: 0, targetRoomId: "bar_st", targetX: 7, targetY: 8 },
            { x: 9, y: 2, targetRoomId: "NOT_READY_YET", targetX: 10, targetY: 0 },
            { x: 0, y: 8, targetRoomId: "NOT_READY_YET", targetX: 0, targetY: 0 },
        ],
        streams: [],
    },
    admin: {
        id: "admin",
        scale: 160 / 200,
        size: { x: 12, y: 6 },
        originCoordinates: { x: 90, y: 530 },
        spawnPoint: { x: 10, y: 0, direction: "up" },
        backgroundImageUrl: "rooms/admin/background.png",
        backgroundColor: "#c0c0c0",
        objects: [],
        sit: [
            { x: 10, y: 2 },
            { x: 10, y: 3 },
            { x: 7, y: 2 },
            { x: 7, y: 3 },
            { x: 9, y: 1 },
            { x: 9, y: 4 },
            { x: 8, y: 1 },
            { x: 8, y: 4 },
            { x: 4, y: 1 },
            { x: 4, y: 2 },
            { x: 4, y: 3 },
            { x: 4, y: 4 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 1, y: 4 },
        ],
        blocked: [
            { x: 0, y: 5 }, // shobon
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 2, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 1 },
            { x: 3, y: 2 },
            { x: 3, y: 3 },
            { x: 3, y: 4 },
            { x: 8, y: 2 },
            { x: 8, y: 3 },
            { x: 9, y: 2 },
            { x: 9, y: 3 },
            { x: 6, y: 5 },
        ],
        forbiddenMovements: [],
        doors: [
            { x: 10, y: 0, targetRoomId: "admin_st", targetX: 2, targetY: 4 }
        ],
        streams: [
            { isActive: false, isReady: false, withSound: null, withVideo: null, userId: null },
            { isActive: false, isReady: false, withSound: null, withVideo: null, userId: null },
        ],
    },
    radio_backstage: {
        id: "radio_backstage",
        scale: 160 / 200,
        size: { x: 3, y: 9 },
        originCoordinates: { x: 37, y: 900 },
        spawnPoint: { x: 2, y: 4, direction: "left" },
        //spawnPoint: { x: 0, y: 0, direction: "up" },
        backgroundImageUrl: "rooms/radio_backstage/radio_backstage.png",
        backgroundColor: "#333333",
        objects: [],
        sit: [],
        blocked: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 7 },
            { x: 0, y: 8 },
        ],
        forbiddenMovements: [],
        doors: [
            { x: 2, y: 1, targetRoomId: "bar", targetX: 8, targetY: 4 },
            { x: 2, y: 4, targetRoomId: "admin", targetX: 10, targetY: 0 },
            { x: 2, y: 7, targetRoomId: "admin_st", targetX: 2, targetY: 4 }
        ],
        streams: []
    },
    school_st: {
        id: "school_st",
        scale: 160 / 200,
        size: { x: 6, y: 8 },
        originCoordinates: { x: 52, y: 780 },
        spawnPoint: { x: 0, y: 0, direction: "left" },
        backgroundImageUrl: "rooms/school_st/giko-hell.png",
        // backgroundColor: "#c0c0c0",
        backgroundColor: "#990600",
        objects: [],
        sit: [
            { x: 0, y: 2 },
            { x: 0, y: 4 },
            { x: 0, y: 6 },
            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 3, y: 2 },
            { x: 4, y: 2 },
            { x: 5, y: 5 },
            { x: 0, y: 2 },
            { x: 3, y: 4 },
            { x: 3, y: 2 },
            { x: 5, y: 5 },
            { x: 0, y: 3 },

            { x: 0, y: 2 },
            { x: 0, y: 5 },
            { x: 3, y: 7 },
            { x: 5, y: 2 },
            { x: 4, y: 1 },

        ],
        blocked: [
            // correct blocks:
            // { x: 0, y: 3 },
            // { x: 0, y: 4 },
            // { x: 0, y: 4 },
            // { x: 0, y: 6 },
            // { x: 0, y: 7 },


            { x: 2, y: 7 },
            { x: 5, y: 6 },
            { x: 0, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 },
            { x: 2, y: 5 },
            { x: 6, y: 7 },
            { x: 3, y: 4 },
            { x: 4, y: 6 },
            { x: 6, y: 2 },
        ],
        forbiddenMovements: [],
        doors: [
            { x: 0, y: 2, targetRoomId: "NOT_READY_YET", targetX: 8, targetY: 4 },
            { x: 0, y: 5, targetRoomId: "NOT_READY_YET", targetX: 8, targetY: 4 }, // school entrance
            { x: 3, y: 7, targetRoomId: "NOT_READY_YET", targetX: 8, targetY: 4 }, // to bar street
            { x: 5, y: 2, targetRoomId: "NOT_READY_YET", targetX: 8, targetY: 4 }, // to kanrinin street
            { x: 4, y: 1, targetRoomId: "NOT_READY_YET", targetX: 8, targetY: 4 }, // manhole
        ],
        streams: []
    },
    bar_st: {
        id: "bar_st",
        scale: 160 / 200,
        size: { x: 10, y: 9 },
        originCoordinates: { x: 20, y: 580 },
        spawnPoint: { x: 4, y: 3, direction: "right" },
        backgroundImageUrl: "rooms/bar_st/bar_st.png",
        backgroundColor: "#c0c0c0",
        objects: [
            { x: 4, y: 5, url: "door.svg", scale: 2.5, xOffset: 8, yOffset: -1 },
            { x: 4, y: 5, url: "arrow.svg", scale: 2.5, xOffset: 30, yOffset: -12 },
            { x: 4, y: 5, url: "signboard.svg", scale: 2.5, xOffset: 5, yOffset: -9 },
        ],
        sit: [
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },

            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 3, y: 2 },

            { x: 4, y: 7 },
            { x: 4, y: 8 },
        ],
        blocked: [
            // cola vending machines:
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 0, y: 3 },
            { x: 1, y: 3 },
            { x: 2, y: 3 },
            { x: 3, y: 3 },
            // building:
            { x: 3, y: 4 },
            { x: 3, y: 5 },
            { x: 3, y: 6 },
            { x: 3, y: 7 },
            { x: 3, y: 8 },
        ],
        forbiddenMovements: [
            { xFrom: 4, yFrom: 5, xTo: 5, yTo: 5 },
            { xFrom: 4, yFrom: 5, xTo: 4, yTo: 6 },
            { xFrom: 5, yFrom: 5, xTo: 4, yTo: 5 },
            { xFrom: 4, yFrom: 6, xTo: 4, yTo: 5 },
        ],
        doors: [
            { x: 4, y: 5, targetRoomId: "NOT_READY_YET", targetX: 0, targetY: 0 }, // to bar
            { x: 7, y: 0, targetRoomId: "school_st", targetX: 0, targetY: 2 },
            { x: 7, y: 8, targetRoomId: "admin_st", targetX: 7, targetY: 0 },
            { x: 9, y: 8, targetRoomId: "NOT_READY_YET", targetX: 0, targetY: 0 },
            { x: 9, y: 2, targetRoomId: "takadai", targetX: 2, targetY: 0 },
            { x: 8, y: 4, targetRoomId: "NOT_READY_YET", targetX: 0, targetY: 0 }, // manhole
        ],
        streams: []
    },
    takadai: {
        id: "takadai",
        scale: 160 / 200,
        size: { x: 9, y: 14 },
        originCoordinates: { x: -90, y: 620 },
        spawnPoint: { x: 2, y: 0, direction: "right" },
        backgroundImageUrl: "rooms/takadai/takadai-cropped.png",
        backgroundColor: "#c0c0c0",
        objects: [],
        sit: [
            { x: 3, y: 5 },
            { x: 3, y: 6 },
        ],
        blocked: [
            // dango flag
            { x: 1, y: 0 },
            // naito shop
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 2, y: 3 },
            { x: 2, y: 4 },
            { x: 2, y: 5 },
            { x: 2, y: 6 },
            { x: 2, y: 7 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 1, y: 4 },
            { x: 1, y: 5 },
            { x: 1, y: 6 },
            { x: 1, y: 7 },

            { x: 1, y: 8 },
            { x: 1, y: 10 },
            { x: 1, y: 11 },
            { x: 1, y: 12 },
            { x: 4, y: 12 },
            { x: 5, y: 12 },
            { x: 5, y: 11, },
            { x: 5, y: 10 },
            { x: 5, y: 9 },
            { x: 6, y: 8 },
            { x: 7, y: 8 },
            { x: 8, y: 7 },
            { x: 7, y: 7 },

            { x: 3, y: 1 },

            { x: 6, y: 5 },

            { x: 8, y: 0 },
            { x: 8, y: 1 },

            { x: 0, y: 13 },
            { x: 0, y: 9 },
            { x: 3, y: 13 },
            { x: 5, y: 8 },
            { x: 8, y: 4 },
            { x: 8, y: 5 },
            { x: 8, y: 6 },
        ],
        forbiddenMovements: [
        ],
        doors: [
            { x: 2, y: 0, targetRoomId: "bar_st", targetX: 9, targetY: 2 }, // to bar
            { x: 6, y: 0, targetRoomId: "NOT_READY_YET", targetX: 0, targetY: 0 }, // to bar
        ],
        streams: [
            { isActive: false, isReady: false, withSound: null, withVideo: null, userId: null },
            { isActive: false, isReady: false, withSound: null, withVideo: null, userId: null },
        ]
    }
}

export const defaultRoom = rooms.admin_st
