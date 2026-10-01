# Modelo de dados para evolução multiusuário
| Entidade | Chaves / relações principais |
|---|---|
| Usuário | id, nome, papel; identidade autenticada no servidor |
| Turma | id, docente_id, nome, carga_horária |
| Matrícula | id, turma_id, usuário_id; restrição única por par |
| Equipe | id, turma_id, nome |
| Membro da equipe | equipe_id, matrícula_id |
| Atividade | id, turma_id, estado de publicação |
| Versão de atividade | id, atividade_id, versão, contexto, problema, objetivos, pré-requisitos, recursos, segurança, etapas, evidências, prazo, pontuação |
| Questão | id, versão_id, tipo, enunciado, alternativas |
| Gabarito privado | questão_id, resposta, política de liberação; acesso somente servidor |
| Entrega | id, versão_id, matrícula_id/equipe_id, tentativa, status, enviada_em |
| Resposta | id, entrega_id, questão_id, conteúdo, unidade |
| Anexo | id, entrega_id, storage_key privado, mime, tamanho, nome |
| Rubrica | id, versão_id, critério, peso, escala |
| Avaliação | id, entrega_id, docente_id, nota, competência, feedback, data |
| Escore | avaliação_id, rubrica_id, nível |
| Feedback individual | avaliação_id, matrícula_id, texto |

Em produção: validar a identidade e matrícula em cada operação; alunos consultam apenas atividades publicadas da turma e suas entregas; docentes gerenciam apenas suas turmas. Uploads com validação de assinatura MIME, tamanho e acesso privado. Credenciais somente em variáveis de ambiente do servidor. Versionamento e tentativas imutáveis, URLs temporárias para download. O modelo local em lib/data.ts é uma representação reduzida para demonstração, não implementação de segurança multiusuário.
