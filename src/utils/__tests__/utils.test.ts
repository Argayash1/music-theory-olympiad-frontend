import { expect, test } from '@jest/globals';
import { handleChangeSecondsToMinutesAndSeconds } from '../utils'
describe('[handleChangeSecondsToMinutesAndSeconds] функция форматирование секунд в секунды и минуты', () => {
    test('форматирование целого числа секунд', () => {
        const result = handleChangeSecondsToMinutesAndSeconds(360);
        expect(result).toBe('06:00');
    });

    test('форматирование нецелого числа секунд', () => {
        const result = handleChangeSecondsToMinutesAndSeconds(600.538);
        expect(result).toBe('10:00');
    })

})