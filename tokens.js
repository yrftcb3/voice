// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "id_channel",
        serverId: "id_server",
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
