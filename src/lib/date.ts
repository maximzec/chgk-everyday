export const TIMEZONE='Europe/Moscow';
export function moscowDate(now=new Date()):string{return new Intl.DateTimeFormat('en-CA',{timeZone:TIMEZONE,year:'numeric',month:'2-digit',day:'2-digit'}).format(now)}
export function addDays(date:string,n:number){const [y,m,d]=date.split('-').map(Number);const x=new Date(Date.UTC(y!,m!-1,d!+n,12));return x.toISOString().slice(0,10)}
export function russianDate(date:string){return new Intl.DateTimeFormat('ru-RU',{timeZone:'UTC',day:'numeric',month:'long',year:'numeric'}).format(new Date(date+'T12:00:00Z'))}
