# ACIONA LAB
Plataforma React + TypeScript demonstrativa para Acionamentos Elétricos Industriais.

## Executar
Requer Node.js >= 22.13. Instale as dependências com `npm install` (ou pnpm conforme o lockfile) e execute `npm run dev`. Para produção: `npm run build`. O projeto usa o adaptador Vinext/Cloudflare do Sites.

## Explorar
1. Entre como aluno fictício e abra uma atividade. Respostas são salvas automaticamente no navegador.
2. Preencha a questão objetiva, a resolução e as evidências; clique em Enviar atividade.
3. Alterne para Docente no topo. Em Entregas e feedback, abra a entrega, preencha a rubrica e o feedback, e conclua ou solicite revisão.
4. Volte ao perfil Aluno e consulte o resultado.
5. Em Painel do docente, edite/publice atividades, cadastre turmas e alunos fictícios, organize equipes e exporte backup.
6. Use Relatório / PDF e escolha Salvar como PDF na impressão do navegador. CSV está disponível para dados tabulares.

## Recursos
12 atividades completas e editáveis; quatro trilhas; cinco calculadoras (incluindo seis famílias de cálculo); três simulações; rascunhos, arquivos locais, rubricas ponderadas, feedback individual/coletivo, versões de enunciados nas entregas; importação/exportação JSON; relatórios; temas claro/escuro; upload de logomarca.

## Limitações explícitas
- Demonstração local. Alternar perfis não é autenticação. Dados não são sincronizados entre pessoas ou dispositivos.
- Gabaritos estão no código local, sem proteção de servidor. Não usar como avaliação sigilosa.
- Evidências até 5 arquivos de 700 KB cada por entrega. O armazenamento total depende da quota do navegador; exporte backups regularmente.
- Envio em equipe usa entregas individuais; feedback coletivo é copiado apenas para entregas existentes. Não há submissão única compartilhada em tempo real.
- Tentativas anteriores são preservadas localmente ao reenviar, com a versão do enunciado. O backup local é editável e não constitui trilha de auditoria segura.
- Simuladores são modelos funcionais simplificados, não esquemas executivos nem sistemas de segurança.
- Escala atual da rubrica é 0–4; critérios, pesos e pontuação máxima são editáveis.
- PDF depende da impressão do navegador; não há geração de PDF no servidor.
- Uso multiusuário real exige backend, autenticação, isolamento por matrícula, armazenamento privado e gabarito exclusivamente servidor. Esquema conceitual em MODELAGEM.md.

## Validação
Consulte VALIDACAO.md para os testes realmente executados e limitações.
