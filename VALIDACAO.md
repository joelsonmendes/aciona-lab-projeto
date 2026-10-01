# Verificações realizadas
- TypeScript: `tsc --noEmit` concluído sem erros.
- Cálculos: 12 verificações executadas em `tests/calculations.mjs`, cobrindo resultados de referência, zero, negativos, NaN, infinito, k > 1, polos ímpares e rotação fora da operação motora. Todas passaram.
- Estados: 64 verificações executadas em `tests/simulation.mjs`, cobrindo exclusão de contatores opostos e estrela/triângulo, condição de partida e transição aberta. Todas passaram.
- Build de produção: compilação Vinext concluída.

## Não verificado em navegador nesta sessão
A habilidade de controle de navegador exigida pela infraestrutura de prévia não estava disponível. Portanto não se afirma aprovação de testes ponta a ponta, aparência em dispositivos, teclado, impressão/PDF, anexos, backup/importação, recuperação após recarregar ou console. As funções estão implementadas, mas exigem homologação no navegador.

## Roteiro de homologação do docente
1. Editar uma atividade, despublicar, verificar sua ausência no perfil Aluno, publicar novamente.
2. Responder como aluno e atualizar a página para conferir o rascunho.
3. Anexar evidência, enviar, trocar para Docente e solicitar revisão com feedback.
4. Reenviar, verificar tentativa anterior, avaliar pela rubrica e conferir o resultado no perfil Aluno.
5. Imprimir relatório filtrado por turma, aluno, equipe e atividade. Conferir que somente o relatório aparece no PDF.
6. Exportar backup, restaurar demonstração e importar o backup.
7. Conferir as três simulações com falhas e a sequência temporizada estrela-triângulo.
8. Conferir layout móvel, foco de teclado, contraste, zoom 200% e tema escuro.

Autenticação real, permissões e sigilo do gabarito não estão implementados: a plataforma usa o modo demonstrativo local autorizado no escopo.
