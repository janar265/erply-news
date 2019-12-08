import User from './api/User';

export default {
    fetchUserData: async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        return new Promise((resolve, reject) => setTimeout(() => resolve(new User(user)), 500));
    },
    patchUserData: async (user) => {
        const userData = JSON.parse(localStorage.getItem('user'));
        const newData = { ...userData, ...user };
        localStorage.setItem('user', JSON.stringify(newData));
        return new Promise((resolve, reject) => setTimeout(() => resolve(new User(newData)), 500));
    }
}