# Backend do Portfólio

API do portfólio, construída com ASP.NET Core e organizada em quatro projetos para separar regras de negócio, casos de uso, integrações externas e transporte HTTP.

> **Estado atual:** `POST /api/contact`, o envio SMTP e as políticas Polly descritas abaixo são planejados; ainda não estão implementados. A WebAPI atual é o template inicial do ASP.NET Core e expõe `GET /weatherforecast`. O OpenAPI fica disponível apenas no ambiente `Development`.

## Tecnologias e estrutura

- .NET 10 / ASP.NET Core
- OpenAPI para descoberta do contrato durante o desenvolvimento
- SMTP como integração planejada para o formulário de contato
- Polly como opção planejada para resiliência em operações externas

```text
Backend/
├── Portfolio.slnx
└── src/
    ├── Portfolio.Domain/
    ├── Portfolio.Application/
    ├── Portfolio.Infrastructure/
    └── Portfolio.WebAPI/
```

## Arquitetura e dependências

A Clean Architecture mantém as regras de negócio isoladas de detalhes como HTTP, SMTP e bibliotecas externas. Isso permite testar os casos de uso sem depender de um servidor de e-mail e trocar uma integração sem levar seus detalhes para o domínio.

| Camada | Responsabilidade |
| --- | --- |
| `Domain` | Entidades, regras e conceitos centrais do negócio; não depende das outras camadas. |
| `Application` | Casos de uso, validações e contratos (interfaces) necessários para executar as regras; depende do `Domain`. |
| `Infrastructure` | Implementações dos contratos de acesso externo, como o adaptador SMTP; depende de `Application` e pode usar `Domain`. |
| `WebAPI` | Endpoints HTTP, serialização, configuração e composição das dependências; conecta a aplicação à infraestrutura. |

As dependências apontam para o centro; as camadas internas não conhecem as externas.

| Projeto | Dependências permitidas |
| --- | --- |
| `Domain` | Nenhuma camada do projeto. |
| `Application` | `Domain`. |
| `Infrastructure` | `Application` e `Domain`. |
| `WebAPI` | `Application` para acionar casos de uso e `Infrastructure` para registrar implementações na composição da aplicação. |

Na solução atual, as referências entre projetos seguem `WebAPI → Infrastructure → Application → Domain`. A `WebAPI` é o ponto de composição: a regra de negócio não deve depender dela nem da implementação SMTP.

### Por que Polly

O envio de e-mail depende de um serviço externo, sujeito a indisponibilidade e falhas transitórias. Polly foi escolhido como estratégia planejada para aplicar políticas limitadas de timeout, retry e circuit breaker ao adaptador de e-mail, mantendo essas decisões fora do domínio e do caso de uso.

Retries devem ser restritos a falhas transitórias e configurados com limite e atraso. Como uma falha de conexão pode ocorrer depois de o servidor SMTP aceitar a mensagem, repetir automaticamente pode gerar e-mails duplicados; erros de autenticação ou validação não devem ser repetidos. Polly ainda não está instalado nem configurado neste backend.

## API

### Rotas atuais

| Método | Rota | Estado | Descrição |
| --- | --- | --- | --- |
| `GET` | `/weatherforecast` | Implementada (template) | Retorna dados de exemplo do ASP.NET Core; não faz parte do produto final do portfólio. |

### Rota planejada: contato

| Método | Rota | Estado | Descrição |
| --- | --- | --- | --- |
| `POST` | `/api/contact` | Planejada | Recebe uma mensagem do formulário e solicita o envio por e-mail via SMTP. |

Payload JSON proposto:

```json
{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "subject": "Contato pelo portfólio",
  "message": "Olá, gostaria de conversar sobre um projeto."
}
```

Contrato inicial sugerido:

- `name`: obrigatório, nome de quem envia.
- `email`: obrigatório, endereço válido usado para identificar quem envia e, se necessário, responder.
- `subject`: obrigatório, assunto da mensagem.
- `message`: obrigatório, conteúdo da mensagem.
- Sucesso: `200 OK` após o envio ser concluído.
- Payload inválido: `400 Bad Request`, com erros de validação por campo.
- Falha temporária no envio: resposta `5xx` genérica, sem expor credenciais ou detalhes internos do SMTP.

Esse contrato é uma proposta inicial e poderá ganhar limites de tamanho, proteção contra abuso e um formato padronizado de erro durante a implementação.

### Configuração SMTP futura

Quando o adaptador SMTP for implementado, as configurações podem ser fornecidas pela configuração padrão do .NET. Nomes indicativos:

```text
Smtp__Host
Smtp__Port
Smtp__Username
Smtp__Password
Smtp__FromAddress
Contact__RecipientAddress
```

Os nomes acima são uma proposta, não configurações lidas atualmente pela API. Não versione credenciais: use `dotnet user-secrets` no desenvolvimento local e variáveis de ambiente ou um gerenciador de segredos no ambiente publicado.

## Instalação e execução

### Pré-requisitos

- .NET SDK 10 instalado. Confira com `dotnet --version`.
- Terminal aberto na pasta `Backend`.

### Restaurar, compilar e executar

```bash
dotnet restore Portfolio.slnx
dotnet build Portfolio.slnx
dotnet run --project src/Portfolio.WebAPI/Portfolio.WebAPI.csproj --launch-profile http
```

O perfil `http` inicia a API em `http://localhost:5005`. Com a aplicação em execução, teste a rota de exemplo:

```bash
curl http://localhost:5005/weatherforecast
```

No ambiente `Development`, o documento OpenAPI está em `http://localhost:5005/openapi/v1.json`. A rota `/api/contact` ainda não existe, portanto não aceitará requisições até ser implementada.

Para interromper a aplicação, use `Ctrl+C` no terminal.
