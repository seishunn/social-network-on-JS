import {addPostActionCreator, profileReducer} from "./profile-reducer";

test('Length of posts should be incremented', () => {
    //1. Готовим исходные данные
    let action = addPostActionCreator("John Cena");
    let state = {
        posts: [
            {id: 1, message: "Привет, React"},
            {id: 2, message: "Привет, JS"},
            {id: 3, message: "Привет, bundle.js"},
            {id: 4, message: "Привет, props"},
        ]
    };

    // 2. Выполняем операцию
    let newState = profileReducer(state, action);

    //3. Проверка
    expect(newState.posts.length).toBe(5);
})


it('should ', function () {
    function sum(a, b) {
        return a + b;
    }

    expect(sum(1, 2)).toBe(3);
});
