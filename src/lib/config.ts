const validExternal=(s:string|undefined)=>{if(!s)return undefined;try{const u=new URL(s);return u.protocol==='https:'?u.toString():undefined}catch{return undefined}};
export const publicConfig={name:'Вопрос на вечер',donationUrl:validExternal(import.meta.env.DONATION_URL)};
