import { getEvent } from './events'
import { recruitment } from './recruitment'
import { timestamp, type TimedNotice } from '../utils/opportunities'

const customNotices: TimedNotice[] = []
const event = getEvent()
const eventNotice = event?.active && event.notice
const recruitmentNotice = recruitment.status !== 'sem-edital' && recruitment.notice

export const notices = [
  ...customNotices,
  ...(eventNotice ? [{ ...eventNotice, href: eventNotice.href ?? 'eventos/' }] : []),
  ...(recruitmentNotice ? [{ ...recruitmentNotice, href: recruitmentNotice.href ?? 'faca-parte/' }] : []),
].filter(notice => notice.active && timestamp(notice.startsAt) < timestamp(notice.endsAt))
  .sort((left, right) => right.priority - left.priority)
