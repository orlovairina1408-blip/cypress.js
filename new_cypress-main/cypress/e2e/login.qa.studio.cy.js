describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизыции вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю, что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

   it('Забыли пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('sobakasobaka123@gmail.com');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

   it('Верный логин и неверный пароль', function () {
       cy.visit('https://login.qa.studio');
       cy.get('#mail').type('german@dolnikov.ru'); 
       cy.get('#pass').type('iLoveqastudio5'); 
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   }) 

   it('Неверный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio');
       cy.get('#mail').type('igor@dolnikov.ru'); 
       cy.get('#pass').type('iLoveqastudio1'); 
       cy.get('#loginButton').click();
       cy.get('#messageHeader').should('be.visible');
       cy.get('#messageHeader').contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   }) 

       it('Валидация на наличие @', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })

   it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('GerMan@Dolnikov.ru'); 
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
    })
})




// Найти поле логин и ввести верный логин
// Найти поле пароль и ввести верный пароль
// Найти кнопку войти и нажать на неё
// Проверить, что авторизация прошла успешно