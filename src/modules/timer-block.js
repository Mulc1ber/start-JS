// import { getTodayDateFormat, getPreciseDateDifference } from '../core/utils/date'
import * as DateUtils from '../core/utils/date'



export class TimerBlock {
    #date
    #timerContainer
    #timerTextHTML

    constructor(date) {
        this.#date = date
        this.#timerContainer = document.createElement('div')
        this.#timerTextHTML = document.createElement('h2')
    }

    #getTimerContent() {
        return DateUtils.getPreciseDateDifference(new Date(), this.#date)
    }

    #enableDateUpdate() {
        setInterval(() => {
            this.#timerTextHTML.textContent = this.#getTimerContent()
        }, 1000)
    }


    render() {
        this.#timerContainer.id = 'timer'
        this.#timerTextHTML.className = 'timer-text'
        this.#timerTextHTML.textContent = this.#getTimerContent()

        const todayDate = document.createElement('div')
        todayDate.className = 'today-date'
        const todayDateFormat = DateUtils.getTodayDateFormat(new Date())
        todayDate.textContent = `(Сегодня: ${todayDateFormat})`

        this.#timerContainer.append(this.#timerTextHTML, todayDate)
        this.#enableDateUpdate()

        return this.#timerContainer
    }
}
