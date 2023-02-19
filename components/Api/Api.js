import axios from 'axios'
import * as SecureStore from 'expo-secure-store';

exports.check = async () => {
    const token = await SecureStore.getItemAsync("token");
    return token;
}
exports.createTeam = async (team, players, type) => {
    const token = await SecureStore.getItemAsync("token");
    return axios.post("match/add/team", {
        team,
        players,
        type
    }, {
        headers: {
            authorization: token
        }
    });
}

exports.getBatsmans = async () => {
    const token = await SecureStore.getItemAsync("token");
    return axios.get("/getbatsman", {
        headers: {
            authorization: token
        }
    });
}
exports.mymatch = async () => {
    const token = await SecureStore.getItemAsync("token");
    return axios.get("/match/get/my", {
        headers: {
            authorization: token
        }
    });
}
exports.SearchTeam = async (id) => {
    const token = await SecureStore.getItemAsync("token");
    return axios.post("/match/search", {
        id
    }, {
        headers: {
            authorization: token
        }
    });
}
exports.allmatch = async () => {
    const token = await SecureStore.getItemAsync("token");
    return axios.get("/match/get/all", {
        headers: {
            authorization: token
        }
    });
}

exports.getBow = async () => {
    const token = await SecureStore.getItemAsync("token");
    return axios.get("/getbowlers", {
        headers: {
            authorization: token
        }
    });
}
exports.tossWin = async (team) => {
    const token = await SecureStore.getItemAsync("token");
    return axios.post("/match/batfirst", {
        team
    }, {
        headers: {
            authorization: token
        }
    });

}
exports.getTeam = async () => {
    const token = await SecureStore.getItemAsync("token");
    return axios.get("get/team", {
        headers: {
            authorization: token
        }
    });
}
exports.userMatchLive = async () => {
    const token = await SecureStore.getItemAsync("token");
    return axios.get("match/user/live", {
        headers: {
            authorization: token
        }
    });

}
exports.deleteuserMatchLive = async () => {
    const token = await SecureStore.getItemAsync("token");
    return axios.get("match/user/live/delete", {
        headers: {
            authorization: token
        }
    });

}
exports.user = async () => {
    const token = await SecureStore.getItemAsync("token");
    return axios.get("/user", {
        headers: {
            authorization: token
        }
    });
}

exports.createMatch = async (team1, team2, stadium, date, overs) => {
    const token = await SecureStore.getItemAsync("token");
    return await axios.post("/match/create", {
        team1,
        team2,
        stadium,
        date,
        overs
    }, {
        headers: {
            authorization: token
        }
    });
}
