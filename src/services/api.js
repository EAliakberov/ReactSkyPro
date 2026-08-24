import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/kanban';
const USER_API_URL = 'https://wedev-api.sky.pro/api/user';

export async function getTasks(token) {
    try {
        const data = await axios.get(API_URL, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return data.data?.tasks || [];
    } catch (err) {
        const message = err.response?.data.message || err.message;
        throw new Error(message, { cause: err });
    }
}

export async function getTask(taskId, token) {
    try {
        const data = await axios.get(`${API_URL}/${taskId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data.data?.task || {};
    } catch (err) {
        throw new Error(err.response?.data.message || err.message, { cause: err });
    }
}

/**
 * 
 * @param {Object} newTask - данные задачи
 * @param {String} newTask.title - "Новая задача 2!",
   @param {String} newTask.topic - "Research",
   @param {String} newTask.status - "Без статуса",
   @param {String} newTask.description - "Подробное описание задачи",
   @param {String} newTask.date - "2024-01-07T16:26:18.179Z",
 * @param {String} token - токен пользователя
 * @returns {Array}
 */
export async function addTask(newTask, token) {
    try {
        const data = await axios.post(API_URL, newTask, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': null,
            },
        });
        return data.data?.tasks || [];
    } catch (err) {
        throw new Error(err.response?.data.message || err.message, { cause: err });
    }
}

/**
 * 
 * @param {Object} newTask - данные задачи
 * @param {String} newTask.title - "Новая задача 2!",
   @param {String} newTask.topic - "Research",
   @param {String} newTask.status - "Без статуса",
   @param {String} newTask.description - "Подробное описание задачи",
   @param {String} newTask.date - "2024-01-07T16:26:18.179Z",
 * @param {String} token - токен пользователя
   @param {String} taskId - ID задачи
 * @returns {Array}
 */
export async function editTask(newTask, taskId, token) {
    try {
        const data = await axios.put(`${API_URL}/${taskId}`, newTask, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': null,
            },
        });
        return data.data?.tasks || [];
    } catch (err) {
        throw new Error(err.response?.data.error || err.message, { cause: err });
    }
}

export async function deleteTask(taskId, token) {
    try {
        const data = await axios.delete(`${API_URL}/${taskId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data.data?.tasks || [];
    } catch (err) {
        throw new Error(err.response?.data.error || err.message, { cause: err });
    }
}

export async function userGetUsers() {
    try {
        const data = await axios.post(USER_API_URL, { headers: { 'Content-Type': null } });
        return data.data?.users || [];
    } catch (err) {
        throw new Error(err.response?.data.error || err.message, { cause: err });
    }
}

export async function userLogin({ login, password }) {
    const loginData = { login, password };

    try {
        const data = await axios.post(USER_API_URL + '/login', JSON.stringify(loginData), {
            headers: { 'Content-Type': null },
        });
        return data.data?.user || {};
    } catch (err) {
        throw new Error(err.response?.data.error || err.message, { cause: err });
    }
}

export async function userRegister({ login, name, password }) {
    const registerData = { login, name, password };
    try {
        const data = await axios.post(USER_API_URL, registerData, {
            headers: { 'Content-Type': null },
        });
        return data.data?.user || {};
    } catch (err) {
        console.log(err.response?.data.error);
        throw new Error(err.response?.data.error || err.message, { cause: err });
    }
}
