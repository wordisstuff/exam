export type LearningLanguage = 'en' | 'uk' | 'es';
const copy: Record<string, [string, string]> = {
 'Learning Mode 2.0': ['Режим навчання 2.0', 'Modo de aprendizaje 2.0'],
 'Start': ['Почати', 'Comenzar'], 'Save answer': ['Зберегти відповідь', 'Guardar respuesta'],
 'Save draft': ['Зберегти чернетку', 'Guardar borrador'], 'Pause': ['Пауза', 'Pausar'], 'Resume': ['Продовжити', 'Reanudar'],
 'History': ['Історія', 'Historial'], 'Continue Learning': ['Продовжити навчання', 'Continuar aprendiendo'],
 'Checkpoint review': ['Перегляд відповідей', 'Revisión del bloque'],
 'Section (optional)': ['Розділ (необов’язково)', 'Sección (opcional)'], 'Index term (optional)': ['Термін Index (необов’язково)', 'Término del índice (opcional)'],
 'Paused · timer stopped': ['Пауза · таймер зупинено', 'En pausa · temporizador detenido'],
 'I used my Code Book (self-reported)': ['Я користувався Code Book (самооцінка)', 'Usé mi Code Book (autodeclarado)'],
 'Correct': ['Правильно', 'Correcto'], 'Incorrect / unanswered': ['Неправильно / без відповіді', 'Incorrecto / sin respuesta'],
 'Reading': ['Читання', 'Lectura'], 'Search pacing': ['Орієнтир пошуку', 'Ritmo de búsqueda'],
 'no time limit': ['без обмеження часу', 'sin límite de tiempo'],
 '110 questions · 10 checkpoints. Review opens after each 11 submissions. Three minutes is a pacing guide; you can take longer. Section and Index entries are optional.': ['110 питань · 10 блоків. Перегляд відкривається після кожних 11 відповідей. Три хвилини — орієнтир, можна витратити більше часу. Розділ та Index необов’язкові.', '110 preguntas · 10 bloques. La revisión se abre después de cada 11 respuestas. Tres minutos es una guía; puedes tardar más. Sección e índice son opcionales.'],
};
export function learningText(text: string, language: LearningLanguage): string {
 return language === 'en' ? text : copy[text]?.[language === 'uk' ? 0 : 1] ?? text;
}
