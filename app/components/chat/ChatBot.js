export default class ChatBot {
    getMessage(userMessage) {
        if(userMessage.body.match(/([A-ZА-Я!$#%\^]){2,}/gu) !== null) {
            return {name: 'bot', body: 'Пожалуйста, не сердитесь.'};
        }
        if(userMessage.body.match(/\?+/gu) !== null) {
            return {name: 'bot', body: this.getRandomMessage()};
        }
        if(userMessage.body.match(/[ \.]{3,}/gu) !== null) {
            return {name: 'bot', body: 'Да, да, я вас слушаю'};
        }
        return {name: 'bot', body: 'Готов к общению!'};
    }

    getRandomMessage () {
        const defaultAnswer = [
            'Все вопросы, вопросы. Может помолчим',
            'Ответ есть в самом вопросе',
            'Не понял о чем вопрос.',
            'Если ты не знаешь ответа то мне не о чем разговаривать',
            'Мне стоит обдумать ответ. Спроси позже.',
            'Что, что?',
            'Я устал, я ухожу.',
            'Интересный вопрос, но отвечать на него я не буду.',
        ];
        return defaultAnswer[Math.floor(Math.random() * defaultAnswer.length)];
    }
}