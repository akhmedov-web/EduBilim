const appStage = import.meta.env.VITE_APP_STAGE || 'prod';

const stages = {
    dev: {
        apiUrl: "https://single.uz/api",
        cdnHost: "https://single.uz/uploads",
    },
    prod: {
        apiUrl: "https://api.edu-bilim.uz",
        cdnHost: "http://api.edu-bilim.uz/uploads",
    },
};

export const stage = stages[appStage];