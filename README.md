# Recuperação de senha

**RF (Requisitos funcionais)**

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha

**RNF (Requisitos não funcionais)**

- Utilizar mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de emails deve acontecer em segundo plano (background jobs);

**RN (Regras de negócios)**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova ao resetar;

# Atualização de perfil

**RF (Requisitos funcionais)**

- O usuário deve poder atualizar seu perfil (Nome, email e senha);

**RN (Regras de negócios)**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve iformar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF (Requisitos funcionais)**

- O usuário deve poder listar seus agendamentos de umm dia específico;
- O prestador deve receber uma notificação sempre houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF (Requisitos não funcionais)**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;

- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN (Regras de negócios)**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF (Requisitos funcionais)**

- O usuário deve poder listar todos os prestadores de serviços contratados;

- O usuário deve poder listar os dias de um mes com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF (Requisitos não funcionais)**

- A listagem de prestadores deve ser armazenado em cache;

**RN (Regras de negócios)**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos deve estar disponível entre as 8h, último as 17hrs;
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar consigo mesmo;
