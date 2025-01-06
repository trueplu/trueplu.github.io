import { DEFAULT_LOCALE } from './constants'

export const formatDate = (date: Date) =>
    date.toLocaleDateString(DEFAULT_LOCALE, { dateStyle: 'medium' })

export function once(fn: Function) {
    return function (this: Function, event: Event) {
        if (fn) fn.call(this, event)
        // @ts-expect-error
        fn = null
    }
}
