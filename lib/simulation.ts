export type MotorState='Parado'|'Direto'|'Reverso'|'Estrela'|'Transição aberta'|'Triângulo'|'Falha';
export function coilsFor(mode:string,state:string){return {KM:(mode!=='Reversão')&&['Direto','Estrela','Transição aberta','Triângulo'].includes(state),KM1:mode==='Reversão'&&state==='Direto',KM2:mode==='Reversão'&&state==='Reverso',KY:mode==='Estrela-triângulo'&&state==='Estrela',KD:mode==='Estrela-triângulo'&&state==='Triângulo'};}
export function canStart(state:string){return state==='Parado'}
