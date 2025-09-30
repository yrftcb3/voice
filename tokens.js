// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1421512318876913808",
        serverId: "1325810262997209201",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
