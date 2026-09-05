import raw from '../../data/public/questions.json'; import manifestRaw from '../../data/public/manifest.json';
import {questionSchema,manifestSchema,type Question} from './schema'; import {moscowDate} from './date';
export const questions=questionSchema.array().parse(raw) as Question[];
export const manifest=manifestSchema.parse(manifestRaw);
export const sorted=[...questions].sort((a,b)=>b.publishDate.localeCompare(a.publishDate));
export function todayQuestion(now=new Date()){const date=moscowDate(now);return questions.find(q=>q.publishDate===date)}
export function archive(now=new Date()){const date=moscowDate(now);return sorted.filter(q=>q.publishDate<date)}
