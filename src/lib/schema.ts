import { z } from 'zod';
export const dateSchema=z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
export const questionSchema=z.object({id:z.string().min(1),revision:z.number().int().positive(),publishDate:dateSchema,text:z.string().min(20),answer:z.string().min(1),explanation:z.string().min(10),hints:z.tuple([z.string().min(1),z.string().min(1)]),attribution:z.object({source:z.string().optional(),url:z.string().url().optional(),authors:z.array(z.string()).optional(),year:z.number().int().optional()}).default({}),isDemo:z.boolean()});
export type Question=z.infer<typeof questionSchema>;
export const manifestSchema=z.object({schemaVersion:z.literal(1),revision:z.number().int().positive(),generatedAt:z.string().datetime(),timezone:z.literal('Europe/Moscow'),published:z.array(z.object({id:z.string(),publishDate:dateSchema,revision:z.number().int(),url:z.string(),checksum:z.string()})),revokedIds:z.array(z.string())});
export type Progress={questionId:string;hintsRevealed:0|1|2;answerRevealed:boolean;selfAssessment:null|'solved'|'not_solved';draft:string;updatedAt:string};
export type EditorialStatus='imported'|'validated'|'prepared'|'approved'|'scheduled'|'published'|'needs_review'|'rejected';
export type EditorialRecord=Question&{originalSourceId:string;normalizedHash:string;rightsStatus:'allowed'|'unknown'|'denied';rightsBasis:string;rawMaterial:string;checks:string[];reviewReasons:string[];status:EditorialStatus;processedAt:string;model?:string;promptVersion?:string;usage?:{tokens:number;costUsd:number}};
