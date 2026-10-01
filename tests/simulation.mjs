import assert from 'node:assert/strict';
import {coilsFor,canStart} from '../lib/simulation.ts';
let count=0;
for(const mode of ['Partida direta','Reversão','Estrela-triângulo'])for(const state of ['Parado','Direto','Reverso','Estrela','Transição aberta','Triângulo','Falha']){const c=coilsFor(mode,state);assert.ok(!(c.KM1&&c.KM2));assert.ok(!(c.KY&&c.KD));assert.equal(canStart(state),state==='Parado');count+=3;}
assert.deepEqual(coilsFor('Estrela-triângulo','Transição aberta'),{KM:true,KM1:false,KM2:false,KY:false,KD:false});
console.log(`${count+1} verificações de estados e intertravamentos passaram.`);
