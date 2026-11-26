import type { APIRoute, GetStaticPaths } from 'astro'
import { getEvent, type EventDetails } from '../../data/events'
import { timestamp } from '../../utils/opportunities'

function calendarEvent(event: EventDetails, end: string) {
  const escape = (text: string) => text.replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/[;,]/g, '\\$&')
  const utc = (value: number) => new Date(value).toISOString().replace(/[-:]|\.\d{3}/g, '')
  const start = timestamp(event.startsAt)
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//LABEM UFCG//Eventos//PT-BR',
    'BEGIN:VEVENT',
    `UID:${start}@labem-ufcg`,
    `DTSTAMP:${utc(Date.now())}`,
    `DTSTART:${utc(start)}`,
    `DTEND:${utc(timestamp(end))}`,
    `SUMMARY:${escape(event.title)}`,
    `DESCRIPTION:${escape(event.description)}`,
    `LOCATION:${escape(event.location)}`,
    'END:VEVENT',
    'END:VCALENDAR',
    '',
  ].join('\r\n')
}

export const getStaticPaths: GetStaticPaths = () => {
  const event = getEvent()
  if (!event?.active || !event.calendar || !event.endsAt || !(timestamp(event.startsAt) < timestamp(event.endsAt))) return []
  return [{ params: { arquivo: 'agenda' }, props: { event, end: event.endsAt } }]
}

export const GET: APIRoute = ({ props }) => new Response(calendarEvent(props.event, props.end), {
  headers: { 'Content-Type': 'text/calendar; charset=utf-8' },
})
