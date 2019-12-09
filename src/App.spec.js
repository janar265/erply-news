import authReducer from './data/redux/auth/authReducers';

const userPayload = {
    name: "Test", email: "test@test.com", apiKey: "abcdefghijk"
}

describe("App", () => {
    describe("Reducer", () => {
        it("Should set user info", () => {
            const state = { 
                user: null,
                isAuthenticated: false,
                initialized: false 
            };
            const newState = authReducer(state, {
                type: "LOGIN",
                payload: userPayload
            });
            expect(newState).toEqual({
                user: {name: "Test", email: "test@test.com", apiKey: "abcdefghijk"},
                isAuthenticated: true,
                initialized: true
            });
        })
    })
})